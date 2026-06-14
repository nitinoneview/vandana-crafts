'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import { supabase } from '../../../lib/supabase'

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [images, setImages] = useState([])
  const [mainImage, setMainImage] = useState('')
  const [qty, setQty] = useState(1)
  const [loading, setLoading] = useState(true)
  const [openSection, setOpenSection] = useState('details')

  useEffect(() => {
    async function fetchData() {
      const { data: prod } = await supabase.from('products').select('*').eq('id', id).single()
      const { data: imgs } = await supabase.from('product_images').select('*').eq('product_id', id).order('sort_order')
      if (prod) setProduct(prod)
      if (imgs && imgs.length > 0) {
        setImages(imgs)
        setMainImage(imgs[0].image_url)
      }
      setLoading(false)
    }
    fetchData()
  }, [id])

  if (loading) return <main><Navbar /><p style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>Loading...</p></main>
  if (!product) return <main><Navbar /><p style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>Product not found</p></main>

  const waMessage = product.whatsapp_message + " | Quantity: " + qty

  return (
    <main style={{ fontFamily: 'sans-serif', backgroundColor: '#fdf6ec' }}>
      <Navbar />

      <div style={{ backgroundColor: '#f5ebe0', padding: '12px 20px', textAlign: 'center' }}>
        <span style={{ color: '#6b4226', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase' }}>
          {product.category === 'wall_clock' ? 'Wall Clock' : 'Table Clock'}
        </span>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '30px 20px' }}>
        <Link href="/" style={{ color: '#6b4226', textDecoration: 'none', fontSize: '14px' }}>← Back to Collection</Link>

        <div style={{ display: 'flex', gap: '30px', marginTop: '25px', flexWrap: 'wrap' }}>

          {/* LEFT: Thumbnails + Main Image */}
          <div style={{ display: 'flex', gap: '12px', flex: '1', minWidth: '300px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {images.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setMainImage(img.image_url)}
                  style={{
                    width: '65px', height: '65px', borderRadius: '8px', overflow: 'hidden',
                    border: mainImage === img.image_url ? '3px solid #c68642' : '2px solid #e8d5c0',
                    cursor: 'pointer'
                  }}
                >
                  <img src={img.image_url} alt={'view ' + i} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>

            <div style={{ flex: 1, borderRadius: '16px', overflow: 'hidden', backgroundColor: '#fff', border: '1px solid #e8d5c0', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '400px', maxHeight: '480px' }}>
              <img src={mainImage} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

          {/* RIGHT: Info */}
          <div style={{ flex: 1, minWidth: '280px' }}>
            <h1 style={{ fontSize: '24px', color: '#3d2b1f', margin: '0 0 12px', fontWeight: 'bold', lineHeight: 1.4 }}>{product.name}</h1>

            <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#3d2b1f', margin: '0 0 20px' }}>
              ₹{product.price}
            </p>

            <p style={{ color: '#6b4226', fontSize: '14px', lineHeight: 1.8, marginBottom: '25px' }}>{product.description}</p>

            <div style={{ marginBottom: '15px' }}>
              <p style={{ fontSize: '13px', letterSpacing: '1px', color: '#3d2b1f', marginBottom: '10px', fontWeight: 'bold' }}>QUANTITY</p>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #e8d5c0', borderRadius: '8px', width: '120px' }}>
                <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{ flex: 1, padding: '10px', border: 'none', background: 'none', fontSize: '18px', cursor: 'pointer', color: '#3d2b1f' }}>−</button>
                <span style={{ flex: 1, textAlign: 'center', fontSize: '15px', color: '#3d2b1f' }}>{qty}</span>
                <button onClick={() => setQty(q => q + 1)} style={{ flex: 1, padding: '10px', border: 'none', background: 'none', fontSize: '18px', cursor: 'pointer', color: '#3d2b1f' }}>+</button>
              </div>
            </div>

            <a href={'https://wa.me/919219265044?text=' + encodeURIComponent(waMessage)} target="_blank" style={{ display: 'block', backgroundColor: '#25d366', color: 'white', padding: '16px', borderRadius: '8px', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold', textAlign: 'center', marginBottom: '12px' }}>
              🛒 Order via WhatsApp
            </a>

            <a href={'https://wa.me/919219265044?text=' + encodeURIComponent('Hello! I want a custom version of ' + product.name)} target="_blank" style={{ display: 'block', backgroundColor: 'white', color: '#3d2b1f', padding: '14px', borderRadius: '8px', textDecoration: 'none', fontSize: '15px', fontWeight: 'bold', textAlign: 'center', border: '2px solid #3d2b1f', marginBottom: '20px' }}>
              ✏️ Request Custom Design
            </a>

            <div style={{ display: 'flex', gap: '20px', padding: '15px 0', borderTop: '1px solid #e8d5c0', borderBottom: '1px solid #e8d5c0', marginBottom: '15px', fontSize: '13px', color: '#6b4226' }}>
              <span>🚚 Pan-India Delivery</span>
              <span>💰 COD Available</span>
            </div>

            {/* Accordion Sections */}
            {[
              { key: 'details', title: 'PRODUCT DETAILS', content: '100% Handmade • Real Sagwan/Teak Wood • No Nails Required • Silent Mechanism • Nature Friendly Finish' },
              { key: 'delivery', title: 'DELIVERY & RETURNS', content: 'Ships within 3-5 business days. Custom orders may take 7-10 days. For returns/exchange queries, contact us on WhatsApp.' },
              { key: 'care', title: 'CARE INSTRUCTIONS', content: 'Wipe with a dry soft cloth. Avoid direct sunlight and moisture for long-lasting finish.' },
            ].map(sec => (
              <div key={sec.key} style={{ borderBottom: '1px solid #e8d5c0' }}>
                <div onClick={() => setOpenSection(openSection === sec.key ? '' : sec.key)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0', cursor: 'pointer' }}>
                  <span style={{ fontSize: '13px', letterSpacing: '1px', fontWeight: 'bold', color: '#3d2b1f' }}>{sec.title}</span>
                  <span style={{ color: '#3d2b1f' }}>{openSection === sec.key ? '−' : '+'}</span>
                </div>
                {openSection === sec.key && (
                  <p style={{ color: '#6b4226', fontSize: '13px', lineHeight: 1.8, paddingBottom: '15px' }}>{sec.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

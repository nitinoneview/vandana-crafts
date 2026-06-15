'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import { supabase } from '../../lib/supabase'

export default function Shop() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    async function fetchData() {
      let query = supabase.from('products').select('*').eq('is_available', true)
      if (filter !== 'all') query = query.eq('category', filter)
      const { data: prods } = await query
      const { data: imgs } = await supabase.from('product_images').select('*').eq('is_primary', true)
      if (prods && imgs) {
        const merged = prods.map(p => ({ ...p, image: imgs.find(i => i.product_id === p.id)?.image_url || '' }))
        setProducts(merged)
      }
      setLoading(false)
    }
    fetchData()
  }, [filter])

  return (
    <main style={{ fontFamily: 'sans-serif', backgroundColor: '#fdf6ec' }}>
      <Navbar />

      <section style={{ backgroundColor: '#3d2b1f', padding: '50px 20px', textAlign: 'center' }}>
        <h1 style={{ color: '#c68642', fontSize: '40px', fontFamily: 'Georgia, serif', marginBottom: '10px' }}>Our Collection</h1>
        <p style={{ color: '#d4b896', fontSize: '16px' }}>Handcrafted Sagwan wood clocks — each one unique</p>
      </section>

      <section style={{ backgroundColor: '#fdf6ec', padding: '30px 20px', textAlign: 'center' }}>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { label: 'All Products', value: 'all' },
            { label: 'Wall Clocks', value: 'wall_clock' },
            { label: 'Table Clocks', value: 'table_clock' },
          ].map(btn => (
            <button key={btn.value} onClick={() => setFilter(btn.value)} style={{ backgroundColor: filter === btn.value ? '#3d2b1f' : 'white', color: filter === btn.value ? '#c68642' : '#3d2b1f', border: '2px solid #3d2b1f', padding: '10px 25px', borderRadius: '25px', fontSize: '15px', cursor: 'pointer', fontWeight: 'bold' }}>
              {btn.label}
            </button>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: '#f5ebe0', padding: '50px 20px' }}>
        {loading ? (
          <p style={{ textAlign: 'center', color: '#6b4226', fontSize: '18px' }}>Loading products...</p>
        ) : (
          <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '1200px', margin: '0 auto' }}>
            {products.map(p => (
              <Link key={p.id} href={'/product/' + p.id} style={{ textDecoration: 'none', width: '300px' }}>
                <div style={{ backgroundColor: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(61,43,31,0.15)' }}>
                  <div style={{ height: '230px', overflow: 'hidden', backgroundColor: '#f5ebe0' }}>
                    {p.image ? (
                      <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '60px' }}>🕐</div>
                    )}
                  </div>
                  <div style={{ padding: '20px' }}>
                    <span style={{ backgroundColor: '#f5ebe0', color: '#6b4226', padding: '4px 12px', borderRadius: '20px', fontSize: '12px' }}>
                      {p.category === 'wall_clock' ? 'Wall Clock' : 'Table Clock'}
                    </span>
                    <h3 style={{ color: '#3d2b1f', fontSize: '18px', margin: '12px 0 8px', fontFamily: 'Georgia, serif' }}>{p.name}</h3>
                    <p style={{ color: '#6b4226', fontSize: '13px', lineHeight: 1.6, marginBottom: '15px' }}>{p.description?.substring(0, 90)}...</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '22px', fontWeight: 'bold', color: '#3d2b1f' }}>₹{p.price}</span>
                      <span style={{ backgroundColor: '#25d366', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 'bold' }}>Order →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <footer style={{ backgroundColor: '#3d2b1f', color: '#d4b896', padding: '30px 20px', textAlign: 'center' }}>
        <p style={{ fontSize: '20px', color: '#c68642', fontFamily: 'Georgia, serif', marginBottom: '10px' }}>Vandana Crafts</p>
        <p style={{ fontSize: '14px' }}>Handmade Sagwan Wood Clocks — Timeless By Nature</p>
      </footer>
    </main>
  )
}

'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import { supabase } from '../lib/supabase'

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetch() {
      const { data: prods } = await supabase.from('products').select('*').eq('is_available', true)
      const { data: imgs } = await supabase.from('product_images').select('*').eq('is_primary', true)
      if (prods && imgs) {
        const merged = prods.map(p => ({ ...p, image: imgs.find(i => i.product_id === p.id)?.image_url || '' }))
        setProducts(merged)
      }
      setLoading(false)
    }
    fetch()
  }, [])

  const usps = [
    { icon: '🤲', title: '100% Handmade', desc: 'Crafted by hand with love' },
    { icon: '🌳', title: 'Real Teak Wood', desc: 'Genuine Sagwan & Teak only' },
    { icon: '🔨', title: 'No Nails', desc: 'Easy wall installation' },
    { icon: '🔇', title: 'Silent Clock', desc: 'Zero ticking noise' },
    { icon: '🍃', title: 'Nature Friendly', desc: 'Sustainably sourced wood' },
  ]

  return (
    <main style={{ fontFamily: 'Georgia, serif', backgroundColor: '#fdf6ec' }}>
      <Navbar />

      <section style={{ background: 'linear-gradient(135deg, #3d2b1f 0%, #6b4226 100%)', color: '#fdf6ec', padding: '100px 20px', textAlign: 'center' }}>
        <p style={{ color: '#c68642', fontSize: '13px', letterSpacing: '4px', marginBottom: '20px', fontFamily: 'sans-serif' }}>TIMELESS BY NATURE</p>
        <h1 style={{ fontSize: 'clamp(36px, 7vw, 72px)', lineHeight: 1.15, marginBottom: '25px', fontWeight: 'normal' }}>
          Handmade Sagwan<br /><span style={{ color: '#c68642' }}>Wood Clocks</span>
        </h1>
        <p style={{ fontSize: '18px', color: '#d4b896', maxWidth: '480px', margin: '0 auto 45px', lineHeight: 1.8, fontFamily: 'sans-serif' }}>
          No nails. No machines. Just pure wood, pure craft, pure elegance.
        </p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#products" style={{ backgroundColor: '#c68642', color: '#3d2b1f', padding: '16px 40px', borderRadius: '50px', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Shop Now</a>
          <a href={"https://wa.me/919219265044?text=" + encodeURIComponent("Hello! I want to order a Vandana Crafts clock.")} target="_blank" style={{ backgroundColor: '#25d366', color: 'white', padding: '16px 40px', borderRadius: '50px', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>WhatsApp Order</a>
        </div>
      </section>

      <section style={{ backgroundColor: '#3d2b1f', padding: '25px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap', maxWidth: '900px', margin: '0 auto' }}>
          {usps.map((u, i) => (
            <div key={i} style={{ textAlign: 'center', color: '#fdf6ec' }}>
              <div style={{ fontSize: '28px', marginBottom: '6px' }}>{u.icon}</div>
              <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#c68642', fontFamily: 'sans-serif' }}>{u.title}</div>
              <div style={{ fontSize: '11px', color: '#d4b896', fontFamily: 'sans-serif' }}>{u.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="products" style={{ padding: '70px 20px', backgroundColor: '#fdf6ec' }}>
        <p style={{ textAlign: 'center', color: '#c68642', fontSize: '13px', letterSpacing: '3px', marginBottom: '10px', fontFamily: 'sans-serif' }}>OUR COLLECTION</p>
        <h2 style={{ textAlign: 'center', fontSize: '36px', color: '#3d2b1f', marginBottom: '50px', fontWeight: 'normal' }}>Every Clock Tells a Story</h2>
        {loading ? (
          <p style={{ textAlign: 'center', color: '#6b4226', fontFamily: 'sans-serif' }}>Loading...</p>
        ) : (
          <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '1200px', margin: '0 auto' }}>
            {products.map(p => (
              <Link key={p.id} href={"/product/" + p.id} style={{ textDecoration: 'none', width: '320px' }}>
                <div style={{ backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 25px rgba(61,43,31,0.12)', transition: 'transform 0.2s', cursor: 'pointer' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ height: '260px', overflow: 'hidden', backgroundColor: '#f5ebe0' }}>
                    {p.image ? (
                      <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '60px' }}>🕐</div>
                    )}
                  </div>
                  <div style={{ padding: '20px' }}>
                    <span style={{ backgroundColor: '#f5ebe0', color: '#6b4226', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontFamily: 'sans-serif' }}>
                      {p.category === 'wall_clock' ? 'Wall Clock' : 'Table Clock'}
                    </span>
                    <h3 style={{ color: '#3d2b1f', fontSize: '18px', margin: '12px 0 8px' }}>{p.name}</h3>
                    <p style={{ color: '#6b4226', fontSize: '13px', lineHeight: 1.6, marginBottom: '15px', fontFamily: 'sans-serif' }}>{p.description?.substring(0, 75)}...</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#3d2b1f', fontFamily: 'sans-serif' }}>₹{p.price}</span>
                      <span style={{ backgroundColor: '#25d366', color: 'white', padding: '8px 18px', borderRadius: '20px', fontSize: '13px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Order →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section style={{ backgroundColor: '#25d366', padding: '70px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', color: 'white', marginBottom: '15px', fontWeight: 'normal' }}>Want a Custom Clock?</h2>
        <p style={{ color: '#d4f5e2', fontSize: '16px', marginBottom: '35px', fontFamily: 'sans-serif' }}>Anniversary • Wedding • Corporate Gifts — We make it personal</p>
        <a href={"https://wa.me/919219265044?text=" + encodeURIComponent("Hello! I want a custom clock order.")} target="_blank" style={{ backgroundColor: 'white', color: '#25d366', padding: '16px 45px', borderRadius: '50px', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Chat on WhatsApp</a>
      </section>

      <footer style={{ backgroundColor: '#3d2b1f', color: '#d4b896', padding: '40px 20px', textAlign: 'center' }}>
        <p style={{ fontSize: '24px', color: '#c68642', marginBottom: '10px' }}>Vandana Crafts</p>
        <p style={{ fontSize: '14px', marginBottom: '5px', fontFamily: 'sans-serif' }}>Handmade Sagwan Wood Clocks — Timeless By Nature</p>
        <p style={{ fontSize: '13px', marginBottom: '15px', fontFamily: 'sans-serif' }}>
          <a href="https://wa.me/919219265044" style={{ color: '#25d366', textDecoration: 'none' }}>+91 92192 65044</a>
          {' | '}
          <a href="mailto:Craftsvandana@gmail.com" style={{ color: '#d4b896', textDecoration: 'none' }}>Craftsvandana@gmail.com</a>
          {' | '}
          <a href="https://instagram.com/vandanacrafts" target="_blank" style={{ color: '#d4b896', textDecoration: 'none' }}>@vandanacrafts</a>
        </p>
        <p style={{ fontSize: '12px', color: '#8b6f5e', fontFamily: 'sans-serif' }}>© 2025 Vandana Crafts. All rights reserved.</p>
      </footer>
    </main>
  )
}

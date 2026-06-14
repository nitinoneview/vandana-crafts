'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav style={{ backgroundColor: '#3d2b1f', padding: '15px 20px', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        <Link href="/" style={{ color: '#c68642', textDecoration: 'none', fontSize: '22px', fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>
          Vandana Crafts
        </Link>

        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <Link href="/" style={{ color: '#fdf6ec', textDecoration: 'none', fontSize: '16px' }}>Home</Link>
          <Link href="/shop" style={{ color: '#fdf6ec', textDecoration: 'none', fontSize: '16px' }}>Shop</Link>
          <Link href="/custom-order" style={{ color: '#fdf6ec', textDecoration: 'none', fontSize: '16px' }}>Custom Order</Link>
          <Link href="/about" style={{ color: '#fdf6ec', textDecoration: 'none', fontSize: '16px' }}>About</Link>
          <a href="https://wa.me/919219265044" target="_blank" style={{ backgroundColor: '#25d366', color: 'white', padding: '8px 18px', borderRadius: '25px', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold' }}>WhatsApp</a>
        </div>

      </div>

      {isOpen && (
        <div style={{ backgroundColor: '#4a3328', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '10px' }}>
          <Link href="/" style={{ color: '#fdf6ec', textDecoration: 'none', fontSize: '18px' }} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/shop" style={{ color: '#fdf6ec', textDecoration: 'none', fontSize: '18px' }} onClick={() => setIsOpen(false)}>Shop</Link>
          <Link href="/custom-order" style={{ color: '#fdf6ec', textDecoration: 'none', fontSize: '18px' }} onClick={() => setIsOpen(false)}>Custom Order</Link>
          <Link href="/about" style={{ color: '#fdf6ec', textDecoration: 'none', fontSize: '18px' }} onClick={() => setIsOpen(false)}>About</Link>
          <a href="https://wa.me/919219265044" target="_blank" style={{ backgroundColor: '#25d366', color: 'white', padding: '10px 20px', borderRadius: '25px', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold', textAlign: 'center' }}>Order on WhatsApp</a>
        </div>
      )}
    </nav>
  )
}

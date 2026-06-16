'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const logo = 'https://qvibrfhnpcksbzdokxik.supabase.co/storage/v1/object/public/product-images/logo.jpeg'
  const waIcon = 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'

  const links = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' },
    { href: '/custom-order', label: 'Custom Order' },
    { href: '/about', label: 'About' },
  ]

  return (
    <nav className="bg-[#3d2b1f] px-4 py-3 sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        <Link href="/" className="flex items-center gap-2">
          <img src={logo} alt="Vandana Crafts" className="h-10 w-10 rounded-full object-cover" />
          <span className="text-[#c68642] text-lg font-bold" style={{ fontFamily: 'Georgia, serif' }}>Vandana Crafts</span>
        </Link>

        <div className="hidden md:flex gap-6 items-center">
          {links.map(link => (
            <Link key={link.href} href={link.href} className="text-[#fdf6ec] text-sm hover:text-[#c68642] transition-colors">{link.label}</Link>
          ))}
          <a href="https://wa.me/919219265044" target="_blank" className="flex items-center gap-2 bg-[#25d366] text-white px-4 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity">
            <img src={waIcon} alt="WhatsApp" style={{ width: '18px', height: '18px' }} />
            WhatsApp
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#c68642] text-2xl">{isOpen ? '✕' : '☰'}</button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 pb-2 px-2">
          {links.map(link => (
            <Link key={link.href} href={link.href} className="text-[#fdf6ec] text-base" onClick={() => setIsOpen(false)}>{link.label}</Link>
          ))}
          <a href="https://wa.me/919219265044" target="_blank" className="flex items-center justify-center gap-2 bg-[#25d366] text-white px-5 py-3 rounded-full text-base font-bold">
            <img src={waIcon} alt="WhatsApp" style={{ width: '20px', height: '20px' }} />
            Order on WhatsApp
          </a>
        </div>
      )}
    </nav>
  )
}

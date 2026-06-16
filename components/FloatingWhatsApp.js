'use client'

export default function FloatingWhatsApp() {
  return (
    <a href="https://wa.me/919219265044?text=Hello! I am interested in Vandana Crafts wooden clocks." target="_blank" style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 1000, backgroundColor: '#25d366', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(37,211,102,0.5)', textDecoration: 'none' }}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style={{ width: '36px', height: '36px' }} />
    </a>
  )
}

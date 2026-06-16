import Navbar from '../../components/Navbar'

export default function About() {
  const features = [
    { icon: '🤲', title: '100% Handmade', desc: 'Every clock is crafted by hand with love and precision.' },
    { icon: '🌳', title: 'Real Sagwan Wood', desc: 'Genuine Sagwan and Teak wood — premium quality that lasts.' },
    { icon: '🔨', title: 'No Nails Required', desc: 'Special mounting system, zero wall damage.' },
    { icon: '🔇', title: 'Silent Mechanism', desc: 'No ticking noise — just peace and elegance.' },
    { icon: '🍃', title: 'Nature Friendly', desc: 'Sustainably sourced wood, eco-conscious craft.' },
    { icon: '✏️', title: 'Custom Orders', desc: 'Anniversary, wedding, corporate gifts — personalized for you.' },
  ]

  const customers = [
    'https://qvibrfhnpcksbzdokxik.supabase.co/storage/v1/object/public/product-images/customer/C1.jpeg',
    'https://qvibrfhnpcksbzdokxik.supabase.co/storage/v1/object/public/product-images/customer/C2.1.jpeg',
    'https://qvibrfhnpcksbzdokxik.supabase.co/storage/v1/object/public/product-images/customer/C3%20(1).jpeg',
    'https://qvibrfhnpcksbzdokxik.supabase.co/storage/v1/object/public/product-images/customer/C4%20(1).jpeg',
    'https://qvibrfhnpcksbzdokxik.supabase.co/storage/v1/object/public/product-images/customer/C5%20(1).jpeg',
    'https://qvibrfhnpcksbzdokxik.supabase.co/storage/v1/object/public/product-images/customer/C6.jpeg',
  ]

  return (
    <main style={{ fontFamily: 'sans-serif', backgroundColor: '#fdf6ec' }}>
      <Navbar />

      <section style={{ backgroundColor: '#3d2b1f', padding: '50px 20px', textAlign: 'center' }}>
        <h1 style={{ color: '#c68642', fontSize: '40px', fontFamily: 'Georgia, serif', marginBottom: '10px' }}>About Vandana Crafts</h1>
        <p style={{ color: '#d4b896', fontSize: '16px' }}>Timeless By Nature</p>
      </section>

      <section style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ color: '#3d2b1f', fontSize: '28px', marginBottom: '20px', fontFamily: 'Georgia, serif' }}>Our Story</h2>
        <p style={{ color: '#6b4226', fontSize: '16px', lineHeight: 1.9, marginBottom: '20px' }}>Vandana Crafts was born from a passion for natural wood and timeless design. Every clock we make is handcrafted with real Sagwan and Teak wood — no two pieces are alike.</p>
        <p style={{ color: '#6b4226', fontSize: '16px', lineHeight: 1.9 }}>From a small workshop to homes across India — our mission is simple: bring nature inside your home, one clock at a time.</p>
      </section>

      <section style={{ backgroundColor: '#f5ebe0', padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '32px', color: '#3d2b1f', marginBottom: '40px', fontFamily: 'Georgia, serif' }}>Why Choose Us</h2>
        <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '1000px', margin: '0 auto' }}>
          {features.map((item, i) => (
            <div key={i} style={{ backgroundColor: 'white', padding: '30px 25px', borderRadius: '15px', width: '280px', textAlign: 'center', boxShadow: '0 4px 15px rgba(61,43,31,0.1)' }}>
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>{item.icon}</div>
              <h3 style={{ color: '#3d2b1f', fontSize: '18px', marginBottom: '10px', fontFamily: 'Georgia, serif' }}>{item.title}</h3>
              <p style={{ color: '#6b4226', fontSize: '14px', lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: '#fdf6ec', padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '32px', color: '#3d2b1f', marginBottom: '10px', fontFamily: 'Georgia, serif' }}>Happy Customers</h2>
        <p style={{ textAlign: 'center', color: '#6b4226', fontSize: '16px', marginBottom: '40px' }}>Real moments, real smiles — our family is growing!</p>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '1100px', margin: '0 auto' }}>
          {customers.map((url, i) => (
            <div key={i} style={{ width: '320px', height: '240px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(61,43,31,0.15)' }}>
              <img src={url} alt={'Happy Customer ' + (i + 1)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#3d2b1f', fontSize: '28px', marginBottom: '30px', fontFamily: 'Georgia, serif' }}>Contact Us</h2>
        <div style={{ maxWidth: '500px', margin: '0 auto', backgroundColor: 'white', borderRadius: '20px', padding: '40px', boxShadow: '0 4px 20px rgba(61,43,31,0.1)' }}>
          <p style={{ color: '#6b4226', fontSize: '14px', marginBottom: '5px' }}>WhatsApp</p>
          <a href="https://wa.me/919219265044" target="_blank" style={{ color: '#25d366', fontSize: '22px', fontWeight: 'bold', textDecoration: 'none', display: 'block', marginBottom: '20px' }}>+91 92192 65044</a>
          <p style={{ color: '#6b4226', fontSize: '14px', marginBottom: '5px' }}>Email</p>
          <a href="mailto:Craftsvandana@gmail.com" style={{ color: '#3d2b1f', fontSize: '16px', textDecoration: 'none', display: 'block', marginBottom: '20px' }}>Craftsvandana@gmail.com</a>
          <p style={{ color: '#6b4226', fontSize: '14px', marginBottom: '5px' }}>Instagram</p>
          <a href="https://instagram.com/vandanacrafts" target="_blank" style={{ color: '#c68642', fontSize: '16px', textDecoration: 'none', display: 'block', marginBottom: '25px' }}>@vandanacrafts</a>
          <a href="https://wa.me/919219265044?text=Hello! I want to know more about Vandana Crafts." target="_blank" style={{ backgroundColor: '#25d366', color: 'white', padding: '15px 40px', borderRadius: '30px', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold' }}>Chat on WhatsApp</a>
        </div>
      </section>

      <footer style={{ backgroundColor: '#3d2b1f', color: '#d4b896', padding: '30px 20px', textAlign: 'center' }}>
        <p style={{ fontSize: '20px', color: '#c68642', marginBottom: '10px', fontFamily: 'Georgia, serif' }}>Vandana Crafts</p>
        <p style={{ fontSize: '14px' }}>Handmade Sagwan Wood Clocks — Timeless By Nature</p>
      </footer>
    </main>
  )
}

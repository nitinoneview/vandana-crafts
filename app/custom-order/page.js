'use client'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import { supabase } from '../../lib/supabase'

export default function CustomOrder() {
  const [form, setForm] = useState({ name: '', phone: '', clock_type: 'wall_clock', size: '', custom_text: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')

    const { error } = await supabase.from('custom_orders').insert([{
      customer_name: form.name,
      customer_phone: form.phone,
      clock_type: form.clock_type,
      size: form.size,
      custom_text: form.custom_text,
      message: form.message
    }])

    if (error) {
      setErrorMsg('Something went wrong. Please try again or contact us on WhatsApp directly.')
      setLoading(false)
      return
    }

    setSubmitted(true)
    const msg = 'Hello! I want a custom clock order.%0AName: ' + form.name + '%0APhone: ' + form.phone + '%0AType: ' + form.clock_type + '%0ASize: ' + form.size + '%0ACustom Text: ' + form.custom_text + '%0AMessage: ' + form.message
    window.open('https://wa.me/919219265044?text=' + msg, '_blank')
    setLoading(false)
  }

  if (submitted) {
    return (
      <main>
        <Navbar />
        <section style={{ backgroundColor: '#fdf6ec', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
          <div style={{ textAlign: 'center', maxWidth: '500px' }}>
            <div style={{ fontSize: '80px', marginBottom: '20px' }}>✅</div>
            <h2 style={{ color: '#3d2b1f', fontSize: '28px', fontFamily: 'Georgia, serif', marginBottom: '15px' }}>Order Received!</h2>
            <p style={{ color: '#6b4226', fontSize: '16px', marginBottom: '30px' }}>Thank you! We have received your custom order request. WhatsApp chat bhi open ho gaya hai.</p>
            <a href="/" style={{ backgroundColor: '#3d2b1f', color: '#c68642', padding: '12px 30px', borderRadius: '25px', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold' }}>Back to Home</a>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      <Navbar />
      <section style={{ backgroundColor: '#3d2b1f', padding: '50px 20px', textAlign: 'center' }}>
        <h1 style={{ color: '#c68642', fontSize: '40px', fontFamily: 'Georgia, serif', marginBottom: '10px' }}>Custom Clock Order</h1>
        <p style={{ color: '#d4b896', fontSize: '16px' }}>Anniversary, Wedding, Corporate — we make it personal</p>
      </section>

      <section style={{ backgroundColor: '#fdf6ec', padding: '60px 20px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: 'white', borderRadius: '20px', padding: '40px', boxShadow: '0 4px 20px rgba(61,43,31,0.15)' }}>

          {errorMsg && <p style={{ backgroundColor: '#fde2e2', color: '#b91c1c', padding: '12px', borderRadius: '10px', marginBottom: '20px', fontSize: '14px' }}>{errorMsg}</p>}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', color: '#3d2b1f', fontWeight: 'bold', marginBottom: '8px' }}>Your Name *</label>
              <input name="name" value={form.name} onChange={handleChange} required placeholder="Enter your name" style={{ width: '100%', padding: '12px 15px', borderRadius: '10px', border: '2px solid #e8d5c0', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }} />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', color: '#3d2b1f', fontWeight: 'bold', marginBottom: '8px' }}>Phone Number *</label>
              <input name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" style={{ width: '100%', padding: '12px 15px', borderRadius: '10px', border: '2px solid #e8d5c0', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }} />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', color: '#3d2b1f', fontWeight: 'bold', marginBottom: '8px' }}>Clock Type *</label>
              <select name="clock_type" value={form.clock_type} onChange={handleChange} style={{ width: '100%', padding: '12px 15px', borderRadius: '10px', border: '2px solid #e8d5c0', fontSize: '15px', outline: 'none', boxSizing: 'border-box', backgroundColor: 'white' }}>
                <option value="wall_clock">Wall Clock</option>
                <option value="table_clock">Table Clock</option>
              </select>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', color: '#3d2b1f', fontWeight: 'bold', marginBottom: '8px' }}>Size Preference</label>
              <select name="size" value={form.size} onChange={handleChange} style={{ width: '100%', padding: '12px 15px', borderRadius: '10px', border: '2px solid #e8d5c0', fontSize: '15px', outline: 'none', boxSizing: 'border-box', backgroundColor: 'white' }}>
                <option value="">Select size</option>
                <option value="small">Small (30x30 cm)</option>
                <option value="medium">Medium (45x45 cm)</option>
                <option value="large">Large (60x60 cm)</option>
              </select>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', color: '#3d2b1f', fontWeight: 'bold', marginBottom: '8px' }}>Custom Text / Name to Engrave</label>
              <input name="custom_text" value={form.custom_text} onChange={handleChange} placeholder="e.g. Happy Anniversary, Raj and Priya" style={{ width: '100%', padding: '12px 15px', borderRadius: '10px', border: '2px solid #e8d5c0', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }} />
            </div>

            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'block', color: '#3d2b1f', fontWeight: 'bold', marginBottom: '8px' }}>Additional Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Any special requirements, occasion details, delivery date..." rows={4} style={{ width: '100%', padding: '12px 15px', borderRadius: '10px', border: '2px solid #e8d5c0', fontSize: '15px', outline: 'none', boxSizing: 'border-box', resize: 'vertical' }} />
            </div>

            <button type="submit" disabled={loading} style={{ width: '100%', backgroundColor: '#25d366', color: 'white', padding: '15px', borderRadius: '30px', border: 'none', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' }}>
              {loading ? 'Submitting...' : 'Submit and Open WhatsApp'}
            </button>
          </form>

          <div style={{ marginTop: '20px', textAlign: 'center', padding: '20px', backgroundColor: '#f5ebe0', borderRadius: '10px' }}>
            <p style={{ color: '#6b4226', fontSize: '14px' }}>Or directly contact us:</p>
            <a href="https://wa.me/919219265044" target="_blank" style={{ color: '#25d366', fontWeight: 'bold', fontSize: '16px' }}>+91 92192 65044</a>
            <span style={{ color: '#6b4226', margin: '0 10px' }}>|</span>
            <a href="mailto:Craftsvandana@gmail.com" style={{ color: '#6b4226', fontSize: '14px' }}>Craftsvandana@gmail.com</a>
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: '#3d2b1f', color: '#d4b896', padding: '30px 20px', textAlign: 'center' }}>
        <p style={{ fontSize: '20px', color: '#c68642', fontFamily: 'Georgia, serif', marginBottom: '10px' }}>Vandana Crafts</p>
        <p style={{ fontSize: '14px' }}>Handmade Sagwan Wood Clocks — Timeless By Nature</p>
      </footer>
    </main>
  )
}

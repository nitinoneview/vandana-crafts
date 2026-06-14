import './globals.css'
import FloatingWhatsApp from '../components/FloatingWhatsApp'

export const metadata = {
  title: 'Vandana Crafts — Handmade Sagwan Wood Clocks',
  description: 'Handmade Sagwan wood clocks. Silent. Nail-free. Pure elegance.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  )
}

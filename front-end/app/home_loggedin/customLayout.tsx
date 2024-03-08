import type { Metadata } from 'next'

import '@/app/globals.css'
import Navbar from '@/components/Navbar_loggedin.jsx'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Recycled',
  description: 'Recycled Luck 13',
}

export default function CustomLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  )
}
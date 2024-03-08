
'use client'
import { motion } from 'framer-motion'

import './globals.css'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer'

// export const metadata: Metadata = {
//   title: 'RecyclED',
//   description: 'RecyclED Lucky 13',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <motion.main className="relative overflow-hidden">
          {children}
        </motion.main>
        <Footer />
      </body>
    </html>
  )
}
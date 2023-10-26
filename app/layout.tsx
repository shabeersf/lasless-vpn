import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lasless VPN',
  description: 'Stay secure and anonymous online with our top-rated VPN service. Browse the web privately, access geo-restricted content, and protect your data. Try our VPN now!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}

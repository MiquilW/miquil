import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'

export const metadata: Metadata = {
  title: 'Michael Welsome',
  description: 'Created by Michael Welsome',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-sunset2">
        <Navbar />
        {children}
      </body>
    </html>
  )
}

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import SplitScreen from './components/SplitScreen'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <Navbar />
        <SplitScreen />
      </body>
    </html>
  )
}

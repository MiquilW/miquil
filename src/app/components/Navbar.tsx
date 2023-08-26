import React from 'react'
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className='bg-slate-500/90 p-3 sticky top-0 drop-shadow-xl z-10 rounded-b-lg'>
      <div className='mx-auto flex justify-between flex-col sm:flex-row'>
        <Link href='/' className='text-white/60 no-underline hover:text-white'>
          Home
        </Link>
      </div>
    </nav>
  )
}

import React from 'react'
import Posts from './Posts'
import Link from 'next/link'

export default function SplitScreen() {
  return (
    <div className='mx-auto'>
      <div>
        <div className='h-screen w-1/2 bg-sunset2 fixed'>
          <h1 className='text-sunset4 mt-6 font-bold text-4xl grid place-content-center mb-0'>Projects</h1>
          <Link className='text-sunset4/70 no-underline hover:text-sunset4 mb-1 font-bold duration-300 grid place-content-center' href='/projects'>
            View All
          </Link>
        </div>
      </div>
      <div className='mx-auto'>
        <div className='h-screen w-1/2 bg-sunset3 left-1/2 fixed'>
          <h1 className='text-sunset1/70 mt-6 font-bold text-4xl grid place-content-center mb-0'>Blog</h1>
          <Posts />
          <Link className='text-sunset1/70 no-underline hover:text-sunset1 mb-1 font-bold duration-300 grid place-content-center' href='/projects'>
            View All
          </Link>
        </div>
      </div>
    </div>
  )
}

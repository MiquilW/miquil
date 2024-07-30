import React from 'react'
import Posts from './Posts'
import Projects from './Projects'
import Link from 'next/link'

export default function SplitScreen() {
  return (
    <div className='mx-auto'>
      <div>    
        <h1 className='text-accent mt-6 font-bold text-4xl grid place-content-center mb-0'>Projects</h1>
        <Projects />
        <div className='mx-auto  grid place-content-center clear-both'>
          <Link className='text-sunset5/50 no-underline hover:text-sunset5 mt-4 font-bold duration-300' href='/projects'>
            View All
          </Link>
        </div>
      </div>
      <div className='mx-auto'>
        <h1 className='text-accent mt-6 font-bold text-4xl grid place-content-center mb-0'>Blog</h1>
        <Posts />
        <div className='mx-auto grid place-content-center clear-both'>
          <Link className='text-sunset5/50 no-underline hover:text-sunset5 mt-4 font-bold duration-300' href='/projects'>
            View All
          </Link>
        </div>
      </div>
      <br/>
    </div>
  )
}

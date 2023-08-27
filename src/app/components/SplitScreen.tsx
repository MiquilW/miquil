import React from 'react'

export default function SplitScreen() {
  return (
    <div className='mx-auto'>
      <div>
        <div className='h-screen w-1/2 bg-sunset2 fixed'>
        <h1 className='text-sunset4 mt-6 font-bold text-3xl grid place-content-center mb-0'>Projects</h1>
        </div>
      </div>
      <div className='mx-auto'>
        <div className='h-screen w-1/2 bg-sunset3 left-1/2 fixed'>
          <h1 className='text-sunset1/70 mt-6 font-bold text-3xl grid place-content-center mb-0'>Blog</h1>
        </div>
      </div>
    </div>
  )
}

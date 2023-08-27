import React from 'react'
import Image from 'next/image'

export default function ProfilePic() {
  return (
    <section className='w-full mx-auto'>
      <Image className='border-4 border-black drop-shadow-xl mx-auto mt-8 rounded-full' 
        src="/images/alt.JPG"
        width={400}
        height={400}
        alt="Michael Welsome"
        priority={true}
      />
      <div className='absolute top-40 font-extrabold left-1/2 mx-auto'>Michael Welsome</div>
    </section>
  )
}

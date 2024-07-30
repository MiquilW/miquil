import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  project: Project
}

function Project({ project }: Props) {
  const { id, name, image, github, web, description, alt, tech } = project

  return (
    <li className='mt-4' key={id}>
      <div className='bg-sunset4 p-3 rounded-xl w-[30%] float-left mb-2 mx-3'>
        <p className='text-sunset5/90 hover:text-sunset5 duration-300 text-2xl'>
          {name}
        </p>
        <Image 
          src={image}
          width={500}
          height={500}
          alt={alt}
          className='rounded-xl my-4 flex align-items'  
        />
        <p className='text-sunset5 text-s mb-10'>
          {description}
        </p>
        <p className='text-accent text-s mb-10'>
          {tech}
        </p>
        <Link className='text-sunset5/70 hover:text-sunset5 duration-300 text-s' href={github} target="_blank">
          GitHub
        </Link>
        <Link className='text-sunset5/70 hover:text-sunset5 duration-300 float-right' href={web} target="_blank">
          Web-Playable
        </Link>
      </div>
    </li>
  )
}

export default Project

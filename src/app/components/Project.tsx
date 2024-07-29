import React from 'react'
import Link from 'next/link'

type Props = {
  project: Project
}

function Project({ project }: Props) {
  const { id, name, image, github, web } = project

  return (
    <li className='mt-4 text-2xl' key={id}>
      <div className='bg-sunset4 p-3 rounded-xl w-1/2'>
        <p className='text-sunset5/90 hover:text-sunset5 duration-300'>
          {name}
        </p>
        <Link className='text-sunset5/90 hover:text-sunset5 duration-300' href={github} target="_blank">
          Github
        </Link>
        <Link className='text-sunset5/90 hover:text-sunset5 duration-300' href={web} target="_blank">
          Web-Playable
        </Link>
      </div>
    </li>
  )
}

export default Project

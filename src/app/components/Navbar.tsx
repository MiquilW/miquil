import React from 'react'
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Navbar() {
  return (
    <nav className='bg-sunset4/90 p-7 sticky top-0 drop-shadow-xl z-10'>
      <div className='mx-auto flex justify-between flex-col'>
        <h1 className='text-4xl text-black font-bold grid place-content-center mb-0'>
          <Link href='/' className='text-sunset1/70 no-underline hover:text-sunset1 mb-1 font-bold duration-300'>
            Michael Welsome
          </Link>
        </h1>
        <div className='flex flex-row justify-center'>
          <Link className='text-sunset1/70 hover:text-sunset1 duration-300 text-4xl' target='_blank' href="https://github.com/MiquilW">
            <FaGithub />
          </Link>
          <Link className='text-sunset1/70 hover:text-sunset1 duration-300 text-4xl ml-2' target='_blank' href="https://www.linkedin.com/in/michael-welsome-b989141a6/">
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </nav>
  )
}

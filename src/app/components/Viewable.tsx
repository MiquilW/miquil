"use client"

import React, { useState } from 'react'
import Image from 'next/image';

export default function Viewable() {

  const [project, setProject] = useState()

  return (
    <div className='bg-black p-52 w-1/2 mt-36 mx-auto flex justify-between flex-col'>
      <h1>Project</h1>
    </div>
  )
}

import React from 'react'
import Link from 'next/link'
import getFormattedDate from '../../../lib/getFormattedDate'

type Props = {
  post: BlogPost
}

export default function Item({ post }: Props) {
  const { id, title, date } = post 

  const newDate = getFormattedDate(date)

  return (
    <li className='mt-4 text-2xl' key={id}>
      <div className='mb-2 mx-3 bg-sunset4 p-3 rounded-xl w-[48%] float-left'>
        <Link className='text-sunset5/90 hover:text-sunset5 duration-300' href={`/entries/${id}`}>
          {title}
        </Link>
        <br />
        <p className='text-sm text-sunset5/70'>{newDate}</p>
      </div>
    </li>
  )
}
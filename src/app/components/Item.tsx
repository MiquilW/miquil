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
      <Link className='hover:text-sunset1 duration-300' href={`/entries/${id}`}>
        {title}
      </Link>
      <br />
      <p className='text-sm'>{newDate}</p>
    </li>
  )
}
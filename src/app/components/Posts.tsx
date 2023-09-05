import React from 'react'
import { getSortedPostsData } from '../../../lib/posts'
import Item from './Item'

export default function Posts() {
  const posts = getSortedPostsData()

  return (
    <section className='mt-6 mx-auto max-w-2xl'>
      <ul className='mx-5 w-full'>
        {posts.map(post => (
          <Item key={post.id} post={post} />
        ))}
      </ul>
    </section>
  )
}

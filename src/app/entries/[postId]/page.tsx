import React from 'react'
import { getPostData, getSortedPostsData } from '../../../../lib/posts'
import { notFound } from 'next/navigation'
import getFormattedDate from '../../../../lib/getFormattedDate'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

export function generateStaticParams() {
  const posts = getSortedPostsData()

  return posts.map((post) => ({
    postId: post.id,
  }))
}

export function generateMetadata({ params }: { params: { postId: string }}) {
  const posts = getSortedPostsData()
  const { postId } = params

  const post = posts.find(post => post.id === postId)

  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: post.title,
  }
}

export default async function Post({ params }: { params: { postId: string }}) {
  const posts = getSortedPostsData()
  const { postId } = params

  if (!posts.find(post => post.id === postId)) {
    return notFound()
  }

  const { title, date, contentHtml } = await getPostData(postId)

  const newDate = getFormattedDate(date)

  return (
    <main className='mx-auto prose prose-xl text-black'>
      <p className='mt-7'>
        <Link href="/" className='text-sunset5/70 hover:text-sunset1 duration-300'>
          <FaArrowLeft />
        </Link>
      </p>
      <h1 className='text-5xl mt-4 mb-0 text-sunset5'>
        {title}
      </h1>
      <p className='mt-0 text-sunset5'>
        {newDate}
      </p>
      <article className='text-sunset5'>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }}/>
      </article>
    </main>
  )
}

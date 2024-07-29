import React from 'react'
import { projects } from '../../../lib/projects'
import Project from './Project'

export default function Posts() {

  return (
    <section className='mt-6 mx-auto max-w-7xl'>
      <ul className='mx-5 w-full'>
        {projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </ul>
    </section>
  )
}
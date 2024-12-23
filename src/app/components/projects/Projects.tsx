'use client'
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'
import { projectsData } from '../../store/data'

const Projects = () => {
  const [tag, setTag] = useState('All')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handleTagChange = (newTag: string) => {
    setTag(newTag)
  }

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag),
  )

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <section id='projects'>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
        My Projects
      </h2>
      <div className='text-white gap-4 sm:gap-2 py-6 sm:flex justify-center items-center grid grid-cols-2 grid-rows-2'>
        <ProjectTag
          onClick={handleTagChange}
          name='All'
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Commercial'
          isSelected={tag === 'Commercial'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Frontend'
          isSelected={tag === 'Frontend'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Backend'
          isSelected={tag === 'Backend'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Front+Back'
          isSelected={tag === 'Front+Back'}
        />
      </div>
      <ul ref={ref} className='grid md:grid-cols-3 gap-16 md:gap-12'>
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial='initial'
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default Projects

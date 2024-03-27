'use client'
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'

const projectsData = [
  {
    id: 1,
    title: 'Project: Music Service',
    description:
      'Created a Home Library Service! Users can create, read, update, delete data about Artists, Tracks and Albums, add them to Favorites in their own Home Library!',
    image: '/projects/1.png',
    tag: ['All', 'Backend'],
    gitUrl: 'https://github.com/conservativ007/nodejs2022Q4-service',
    previewUrl: '/',
  },
  {
    id: 2,
    title: 'Project: Chat Service',
    description:
      'The chat Service, you can create a user and communicate with another people. Send messages, send emoticons, like messages, edit and delete messages, there is a general chat and a private chat',
    image: '/projects/2.png',
    tag: ['All', 'Front+Back'],
    gitUrl: 'https://github.com/conservativ007/chat-server',
    previewUrl: 'http://chat-app.by/',
  },
  {
    id: 3,
    title: 'Learning english words',
    description: 'Learn English words with flashcards',
    image: '/projects/3.png',
    tag: ['All', 'Frontend'],
    gitUrl: 'https://github.com/conservativ007/learn-english',
    previewUrl: 'https://learn-english-by-conservative.netlify.app/',
  },
  {
    id: 4,
    title: 'Shelter',
    description: 'Shelter not only people need a house',
    image: '/projects/4.png',
    tag: ['All', 'Frontend'],
    gitUrl: 'https://github.com/conservativ007/shelter',
    previewUrl: 'https://conservativ007.github.io/shelter/',
  },
  {
    id: 5,
    title: 'Puzzle',
    description: 'Lich king theme puzzle',
    image: '/projects/5.png',
    tag: ['All', 'Frontend'],
    gitUrl: 'https://github.com/rolling-scopes-school/conservativ007-JS2020Q3',
    previewUrl:
      'https://rolling-scopes-school.github.io/conservativ007-JS2020Q3/game-puzzle/',
  },
  {
    id: 6,
    title: 'Momentum',
    description: 'Clone of the application of the same name',
    image: '/projects/6.png',
    tag: ['All', 'Frontend'],
    gitUrl: 'https://github.com/conservativ007/momentum',
    previewUrl: 'https://momentumbyconservativ.netlify.app/',
  },
  {
    id: 7,
    title: 'Web dev',
    description: 'Layout',
    image: '/projects/7.png',
    tag: ['All', 'Frontend'],
    gitUrl: 'https://github.com/conservativ007/webdev',
    previewUrl: 'https://conservativ007.github.io/webdev/',
  },
  {
    id: 8,
    title: 'English for kids',
    description: 'Learning some English words for little ones',
    image: '/projects/8.png',
    tag: ['All', 'Frontend'],
    gitUrl: 'https://github.com/conservativ007/english-for-kids',
    previewUrl: 'https://conservativ007.github.io/english-for-kids/',
  },
  {
    id: 9,
    title: 'Tic Tac Toe',
    description: 'Tic Tac Toe game',
    image: '/projects/9.png',
    tag: ['All', 'Frontend'],
    gitUrl: 'https://github.com/conservativ007/react-game',
    previewUrl: 'https://tic-tac-toe-conservative.netlify.app/',
  },
  {
    id: 10,
    title: 'Blade runner',
    description: 'Blade runner game',
    image: '/projects/10.png',
    tag: ['All', 'Frontend'],
    gitUrl: 'https://github.com/conservativ007/rsclone',
    previewUrl: 'https://blade-runner-2021.netlify.app/',
  },
]

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
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
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

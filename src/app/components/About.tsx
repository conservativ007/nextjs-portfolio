'use client'
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import Skills from './Skills'

const About = () => {
  const [tab, setTab] = useState('skills')
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className='text-white'>
      <div className='min-h-[772px] md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16 xl:px-16'>
        <Image
          src='/about-image.png'
          alt='about-image'
          width={500}
          height={500}
        />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full' id='about'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            {/* I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications. */}
            Владею широким спектром современных технологий веб-разработки,
            включая JavaScript (React, Redux toolkit, React Query), Next,
            Tailwind, и знания в области backend с использованием Node.js, Nest,
            и баз данных Postgres. Опыт работы с инструментами контроля версий,
            развертывания и автоматизации процессов (Git, Docker, CI/CD).
            Постоянно стремлюсь к изучению новых языков и технологий для
            повышения своей экспертизы в области программирования.
          </p>
          <div
            className='flex flex-row justify-start mt-8 space-x-2'
            id='skills'
          >
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              {' '}
              Skills{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('work')}
              active={tab === 'work'}
            >
              {' '}
              Work{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              {' '}
              Education{' '}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange('certifications')}
              active={tab === 'certifications'}
            >
              {' '}
              Certifications{' '}
            </TabButton> */}
          </div>
          <Skills tab={tab} />
        </div>
      </div>
    </section>
  )
}

export default About

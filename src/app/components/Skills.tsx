import Link from 'next/link'
import React from 'react'

interface ISkills {
  tab: string
}

const Skills = ({ tab }: ISkills) => {
  const TAB_DATA = [
    {
      title: 'Skills',
      id: 'skills',
      content: (
        <ul className='list-disc pl-2'>
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux/Redux Toolkit</li>
          <li>Node.js</li>
          <li>Nest</li>
          <li>TypeScript</li>
          <li>PostgreSQL</li>
          <li>Prisma</li>
          <li>JWT</li>
          <li>Jest</li>
          <li>Git</li>
        </ul>
      ),
    },
    {
      title: 'Education',
      id: 'education',
      content: (
        <ul className='list-disc pl-2'>
          <li>The Rolling Scopes School</li>
          <li>Self education</li>
          <li>Codewars</li>
        </ul>
      ),
    },
    {
      title: 'Certifications',
      id: 'certifications',
      content: (
        <ul className='list-disc pl-2'>
          <li>
            <Link
              className='text-blue-500'
              target='_blank'
              href='https://app.rs.school/certificate/q8gv8p3w'
            >
              JavaScript
            </Link>
          </li>
          <li>
            <Link
              className='text-blue-500'
              target='_blank'
              href='https://app.rs.school/certificate/bedir6l9'
            >
              React
            </Link>
          </li>
        </ul>
      ),
    },
  ]

  return (
    <div className='mt-8 min-h-[270px]'>
      {TAB_DATA.find((t) => t.id === tab)?.content}
    </div>
  )
}

export default Skills

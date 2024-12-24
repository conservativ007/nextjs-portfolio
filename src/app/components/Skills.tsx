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
        <ul className='list-disc pl-4'>
          <li>JavaScript / React</li>
          <li>Redux / Redux Toolkit</li>
          <li>Node.js / Nest</li>
          <li>Next</li>
          <li>Tailwind</li>
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
        <div className='grid grid-cols-1 gap-2'>
          <p className='text-[18px]'>The Rolling Scopes School</p>

          <p>Certifications</p>
          <ul className='list-disc pl-4'>
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
        </div>
      ),
    },
    // {
    //   title: 'Certifications',
    //   id: 'certifications',
    //   content: (
    //     <ul className='list-disc pl-2'>
    //       <li>
    //         <Link
    //           className='text-blue-500'
    //           target='_blank'
    //           href='https://app.rs.school/certificate/q8gv8p3w'
    //         >
    //           JavaScript
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           className='text-blue-500'
    //           target='_blank'
    //           href='https://app.rs.school/certificate/bedir6l9'
    //         >
    //           React
    //         </Link>
    //       </li>
    //     </ul>
    //   ),
    // },
    {
      title: 'Work',
      id: 'work',
      content: (
        <div className=''>
          <span>Currently working at </span>
          <Link
            className='text-blue-500'
            target='_blank'
            href='https://paxcore.agency/'
          >
            paxcore
          </Link>
          <span> since 07.03.2024</span>
        </div>
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

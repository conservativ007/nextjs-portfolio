'use client'
import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'

const Email = () => {
  return (
    <section
      id='contact'
      className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'
    >
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
      <div className='z-10'>
        <h5 className='text-xl font-bold text-white my-2'>
          Let&apos;s Connect
        </h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          {' '}
          {/* I&apos;m currently looking for new opportunities. Whether you have a
          question or just want to say hi, I&apos;ll try my best to get back to
          you! */}
          Я в поиске новых задач и интересных проектов, готов к сотрудничеству и
          новым вызовам, буду рад новым знакомствам!
        </p>
        <p className='text-[#ADB7BE] mb-4'>+375296705208</p>
        <div className='socials flex flex-row gap-3'>
          <Link href='https://github.com/conservativ007'>
            <FaGithub size={30} />
          </Link>
          <Link href='https://www.linkedin.com/in/maksim-kisialiou/'>
            <FaLinkedin size={30} />
          </Link>
          <Link href='https://t.me/+375296705208'>
            <FaTelegram size={30} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Email

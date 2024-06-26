'use client'

import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { downloadCV } from '../api/downloadCV'

import { languageStore } from '@/app/store/zustand-store'

const Hero = () => {
  // const { language, toggleLanguage } = languageStore((state) => state)

  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-3xl sm:text-4xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
              Hello, I'm{' '}
            </span>
            <br />
            <TypeAnimation
              sequence={['Max', 1000, 'Web developer', 1000]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#adb7be] text-base sm:text-lg sm:mt-10 mb-6 lg:text-xl'>
            {/* Hi, I'm a fullstack developer with experience in various
            technologies and stacks. My approach to development is to strive to
            create efficient, scalable and intuitive solutions for users. */}
            Опытный full-stack разработчик с комплексным подходом к созданию
            веб-приложений, обладающий знаниями и опытом работы с frontend и
            backend.
          </p>
          <div>
            <button
              onClick={downloadCV}
              className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'
            >
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[380px] lg:h-[380px] relative'>
            <Image
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={300}
              height={300}
              src='/4.png'
              alt='hero'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
function useStore<T>(): { count: any; increment: any; decrement: any } {
  throw new Error('Function not implemented.')
}

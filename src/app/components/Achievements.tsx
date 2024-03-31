'use client'
import React from 'react'
import dynamic from 'next/dynamic'

const AnimatedNumbers = dynamic(
  () => {
    return import('react-animated-numbers')
  },
  { ssr: false },
)

const achievementsList = [
  {
    metric: 'Проектов',
    value: '10+',
    postfix: '+',
  },
  // {
  //   prefix: '~',
  //   metric: 'Users',
  //   value: '100,000',
  // },
  // {
  //   metric: 'Awards',
  //   value: '7',
  // },
  {
    metric: 'Опыт',
    value: '1',
    postfix: '+',
  },
]

const Achievements = () => {
  return (
    <div className='flex py-8 xl:gap-16 sm:py-16'>
      <div className='border-[#33353F] border rounded-md sm:py-6 px-6 flex items-center justify-start gap-5'>
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className='flex flex-col items-center justify-center  mx-4 my-4 sm:my-0'
            >
              <h2 className='text-white text-4xl font-bold flex flex-row'>
                {/* {achievement.prefix} */}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale='en-US'
                  className='text-white text-4xl font-bold'
                  // configs={(_, index) => {
                  //   return {
                  //     mass: 1,
                  //     friction: 100,
                  //     tensions: 140 * (index + 1),
                  //   };
                  // }}
                />
                {achievement.postfix}
              </h2>
              <p className='text-[#ADB7BE] text-base'>{achievement.metric}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Achievements

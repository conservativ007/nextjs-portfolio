import React from 'react'
import NavLink from './NavLink'
import { INavLinks } from './types'

interface ILinks {
  links: INavLinks[]
}

const MenuOverlay = ({ links }: ILinks) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
      {links.map((link: INavLinks, index: number) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  )
}

export default MenuOverlay

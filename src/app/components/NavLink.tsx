import Link from 'next/link'

interface PropsNavLink {
  href: string
  title: string
}

const NavLink = ({ href, title }: PropsNavLink) => {
  return (
    <Link
      href={href}
      className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'
    >
      {title}
    </Link>
  )
}

export default NavLink

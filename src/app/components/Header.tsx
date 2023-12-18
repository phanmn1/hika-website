'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NavItem } from "../types/NavItem"


const navlinks: NavItem[]= [
  {
    name: 'home',
    link: '/'
  },
  {
    name: 'about',
    link: '/about'
  }, 
  {
    name: 'boys',
    link: '/boys'
  },
  {
    name: 'girls',
    link: '/girls'
  },
  {
    name: 'puppies',
    link: '/puppies'
  },
  {
    name: 'resources',
    link: '/resources'
  },
  {
    name: 'contact',
    link: '/contact'
  }
]

export default () => {
  const pathname = usePathname()
  return (
      <header>
      <div className="header-banner min-h-[350px]">
          </div>
          <nav className="bg-header">
              <div className="container flex items-center justify-center p-8 mx-auto capitalize text-sand font-bold">
                  {navlinks.map(({link, name}) => {
                    return <Link href={link} key={link} className={`${pathname === link ? 'border-b-2': ''} hover:border-b-2 mx-9`}>{name}</Link>
                  })}
              </div>
          </nav>
          </header>
  )
}
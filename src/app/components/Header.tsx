'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NavItem } from "../types/NavItem"
import { useState } from "react"
import MobileNav from "./MobileNav"
import burger from '../../../public/svg/burger-menu-svgrepo-com.svg'
import Image from "next/image"


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

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState<boolean>(false)
  return (
      <header>
      <div className="header-banner min-h-[350px]">
          </div>
          <nav className="bg-header">
              <MobileNav open={open} setOpen={setOpen}/>
              <div className="w-9/12 flex justify-end items-center md:hidden" onClick={() => setOpen(!open)}>
                <Image src={burger} height={32} width={32} alt="Hamburger Icon"/>
              </div>
              <div className="hidden md:flex container items-center justify-center p-8 mx-auto capitalize text-sand font-bold">
                  {navlinks.map(({link, name}) => {
                    return <Link href={link} key={link} className={`${pathname === link ? 'border-b-2': ''} hover:border-b-2 mx-9`}>{name}</Link>
                  })}
              </div>
          </nav>
          </header>
  )
}
'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NavItem } from "../types/NavItem"
import { useState } from "react"
import MobileNav from "./MobileNav"
import burger from '../../../public/svg/burger-menu-svgrepo-com.svg'
import close from '../../../public/svg/close-icon.svg'
import Image from "next/image"


const navlinks: NavItem[] = [
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
    link: '/our-dogs/boys'
  },
  {
    name: 'girls',
    link: '/our-dogs/girls'
  },
  {
    name: 'Puppy Application',
    link: '/application'
  },
  {
    name: 'resources',
    link: '/resources'
  },
  {
    name: 'Affiliate Links',
    link: '/affiliate-links'
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
      <div className="header-banner max-h-min flex justify-center bg-background py-5">
        <Image
          src="/logo.png"
          width={300}
          height={300}
          alt="logo"
          className="opacity-85" />
      </div>
      <nav className="bg-header">
        <div className="flex justify-end items-center md:hidden p-8" onClick={() => setOpen(!open)}>
          {!open && <Image src={burger} height={32} width={32} alt="Hamburger Icon" />}
          {open && <Image src={close} height={31} width={31} alt="Close Button" />}
        </div>
        <MobileNav open={open} setOpen={setOpen} links={navlinks} pathname={pathname} />

        <div className="hidden md:flex container items-center justify-center p-8 mx-auto capitalize text-sand font-bold">
          {navlinks.map(({ link, name }) => {
            return <Link href={link} key={link} className={`${pathname === link ? 'border-b-2' : ''} hover:border-b-2 mx-9`}>{name}</Link>
          })}
        </div>
      </nav>
    </header>
  )
}

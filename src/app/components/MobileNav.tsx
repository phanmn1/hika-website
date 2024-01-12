import React, { Dispatch, SetStateAction } from "react";
import { NavItem } from "../types/NavItem";
import Link from "next/link";

export default function MobileNav ({open, setOpen, links} : {open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, links: NavItem[]}) {

  const onClickNavigation = () => {
    setTimeout(() => {
      setOpen(false)
    }, 200);
  }

  return(
    <div className={`md:hidden ${open ? "visible" : "invisible h-0"} flex justify-center`}>
      <div className="flex flex-auto flex-col mx-3 my-2 text-sand font-bold capitalize">
          {links.map(({link, name}, index) => {
            return <Link href={link} key={index} className={`py-3 hover:bg-sand hover:rounded-lg hover:text-header text-center`} onClick={onClickNavigation}>{name}</Link>
          })}
      </div>
    </div>
  )
}
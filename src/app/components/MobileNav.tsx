import React, { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import { NavItem } from "../types/NavItem";

export default function MobileNav ({open, setOpen, jsxNavlinks} : {open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, jsxNavlinks: JSX.Element[]}) {

  return(
    <div className={`md:hidden ${open ? "visible" : "invisible h-0"} flex justify-center `}>
      <div className="flex flex-col items-center justify-center p-8 mx-auto capitalize text-sand font-bold text-lg">
        {jsxNavlinks}
      </div>
    </div>
  )
}
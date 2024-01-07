import React, { Dispatch, FunctionComponent, SetStateAction, useState } from "react";

export default function MobileNav ({open, setOpen} : {open: boolean, setOpen: Dispatch<SetStateAction<boolean>>}) {

  return(
    <div className={`${open ? "block" : "hidden"} flex justify-center`}>
      <div className="flex flex-col">
        <a className="text-xl font-medium my-4" href="/">Link 1</a>
        <a className="text-xl font-medium my-4" href="/">Link 2</a>
      </div>
    </div>
  )
}
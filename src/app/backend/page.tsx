import { puppyApplicationSubmit } from "@/server/application-submit"
import ApplicationForm from "./ApplicationForm"
import { oleo } from "@/global/fonts"
import { Fragment } from "react"
import Image from "next/image"

export default function BackendTest () {
  return (
    <Fragment>
      
      <div className="flex justify-center py-5 flex-col">  
        <Image src='/logo.png' 
          className="my-4 self-center"
          height={350}
          width={350}
          alt='logo'
          placeholder="blur"
          blurDataURL="/blur-image.jpg"
        />
        <div className={`py-5 text-3xl title-shadow text-sand ${oleo.className} self-center`}>Alohana Cavaliers Puppy Application Form</div>
        
        <ApplicationForm className="basis-3/4" handleSubmit={puppyApplicationSubmit}/>
      </div>
    </Fragment>
  )
}
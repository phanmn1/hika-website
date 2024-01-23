import Image from "next/image"
import InstagramIcon from "../../../public/svg/instagram-svgrepo-com.svg"
import FacebookIcon from "../../../public/svg/facebook-svgrepo-com.svg"
import { oleo } from "../global/fonts"

export default function Contact () {
  return (<div className="py-7 px-5 text-sand">
    
    <div className={`text-center text-3xl title-shadow ${oleo.className}`}><h1>Contact Page</h1></div>
    <div className="flex justify-center m-5">
      <div>
        <div className="my-5 text-xl">E-Mail: <a className="text-header hover:text-headerLight" href="mailto:alohanaCavaliers@gmail.com">AlohanaCavaliers@gmail.com</a></div>
        <div className="flex justify-start gap-2">
          <div className="my-5 text-xl">Facebook: </div> 
          <a href="https://www.facebook.com/AlohanaCavaliers" className="transition ease-in-out hover:-translate-y-1 h-[32px] w-[32px] hover:scale-110 self-center" target="_blank">
            <Image 
              src={FacebookIcon}
              width={32}
              height={32}
              alt="Follow us on Facebook"/>
          </a>
        </div>

        <div className="flex justify-start gap-2">
          <div className="my-5 text-xl">Instagram: </div>
          <a href="https://www.instagram.com/alohana_cavaliers/" className="transition ease-in-out hover:-translate-y-1 h-[32px] w-[32px] hover:scale-110 self-center" target="_blank">
            <Image 
              src={InstagramIcon}
              width={32}
              height={32}
              alt="Follow us on Instagram"/>
            </a>
        </div>
       
      </div>
      
    </div>
  </div>)
}
import Image from "next/image"
import InstagramIcon from "../../../public/svg/instagram-svgrepo-com.svg"
import FacebookIcon from "../../../public/svg/facebook-svgrepo-com.svg"

export default function Footer() {
  return (
    <footer className="bg-footer px-10 py-7">
                 <div className="container mx-auto pl-6">
                    <div className="pr-6 flex gap-x-5 justify-center">
                        <Image 
                            src={InstagramIcon}
                            width={32}
                            height={32}
                            alt="Follow us on Instagram"/>
                        
                        <Image 
                            src={FacebookIcon}
                            width={32}
                            height={32}
                            alt="Follow us on Facebook"/>
                        
                        <div>Copyright &copy; 2023 Alohana Cavaliers</div>
                    </div>
                 </div>
            </footer>
  )
}
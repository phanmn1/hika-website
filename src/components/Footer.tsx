import Image from "next/image"
import InstagramIcon from "../../public/svg/instagram-svgrepo-com.svg"
import FacebookIcon from "../../public/svg/facebook-svgrepo-com.svg"

export default function Footer() {
  return (
    <footer className="bg-footer px-10 py-7">
                 <div className="container mx-auto pl-6">
                    <div className="pr-6 flex gap-x-5 justify-center">
                    <a href="https://www.instagram.com/alohana_cavaliers/" className="transition ease-in-out hover:-translate-y-1 h-[32px] w-[32px] hover:scale-110 self-center" target="_blank">
                          <Image 
                            src={InstagramIcon}
                            width={32}
                            height={32}
                            alt="Follow us on Instagram"/>
                          </a>
                        
                        <a href="https://www.facebook.com/AlohanaCavaliers" className="transition ease-in-out hover:-translate-y-1 h-[32px] w-[32px] hover:scale-110 self-center" target="_blank">
                          <Image 
                            src={FacebookIcon}
                            width={32}
                            height={32}
                            alt="Follow us on Facebook"/>
                        </a>
                        
                        <div>Copyright &copy; 2023 Alohana Cavaliers</div>
                    </div>
                 </div>
            </footer>
  )
}
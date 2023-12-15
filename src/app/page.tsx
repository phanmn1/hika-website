import Image from "next/image"
import InstagramIcon from "../../public/svg/instagram-svgrepo-com.svg"
import FacebookIcon from "../../public/svg/facebook-svgrepo-com.svg"
import PuppyCulture from "../../public/puppy_culture.jpg"
import ENS_ESI from "../../public/ens_esi.png"
import OFA from "../../public/ofa.png"
import BreedersBootcamp from "../../public/breeders_bootcamp.png"
import CKCS from "../../public/ckcs.png"
import CKCS_Heart from "../../public/ckcs_heart.jpg"

const imageStyle = {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '1rem'
}
 
const ensStyle = {
    marginLeft: 'auto', 
    marginRight: 'auto',
    borderRadius: '50%',
    marginBottom: '1rem'
}


export default function Home() {
    return (
        
        <main>
            <div className="header-banner min-h-[350px]">
            </div>
            <nav className="bg-header">
                <div className="container flex items-center justify-center p-8 mx-auto capitalize text-sand font-bold">
                    <a href="#" className="border-b-2 border-blue-500 mx-9">home</a>
                    <a href="#" className="border-b-2 border-transparent hover:text-gray-200 hover:border-blue-500 mx-9">about</a>
                    <a href="#" className="border-b-2 border-transparent hover:text-gray-200 hover:border-blue-500 mx-9 ">boys</a>
                    <a href="#" className="border-b-2 border-transparent hover:text-gray-200 hover:border-blue-500 mx-9 ">girls</a>
                    <a href="#" className="border-b-2 border-transparent hover:text-gray-200 hover:border-blue-500 mx-9 ">puppies</a>
                    <a href="#" className="border-b-2 border-transparent hover:text-gray-200 hover:border-blue-500 mx-9 ">resources</a>
                    <a href="#" className="border-b-2 border-transparent hover:text-gray-200 hover:border-blue-500 mx-9 ">contact</a>
                </div>
            </nav>
            <div className="bg-background">
            <div className="container mx-auto">
            <div className="py-4 px-3 text-center text-sand">
                <p className="mb-5 text-3xl font-bold">Welcome to Alohana cavaliers located in Honolulu, Hawaii on the Island of Oahu!</p>
                <p className="mb-5 mt-12">This particular breed, the Cavalier King Charles Spaniel had stolen my heart & I naturally became passionate in learning every possible thing I could about this amazing breed; which is a bountiful journey. After I got my first Cavalier, I knew I found my soulmate dog breed & wanted to work with them through out the rest of my life, & share to others the deep love that this breed is capable of.</p>
                <p className="mb-5">I do all the proper OFA health testing on breeding adults along with making sure I only breed the best quality in conformation, health, and temperament which is closest to the standard of the breed as it should be. Educating yourself thoroughly in the breed you want is the first step to finding the right puppy and choosing a reputable breeder who truly cares for the breed they focus on.</p>
                <p className="mb-5">Alohana Cavaliers reports to performing the health tests below on their breeding dogs. Ask your breeder about the tests performed on the parents of your litter. Learn more about health testing for Cavalier King Charles Spaniels.</p>
                <p className="mb-5">Please read through the entire page before filling out a puppy application which can also be submitted through our system.</p>
                <p className="mb-5">Thank you</p>
            </div>
            <hr/>
            <br/>
            <div className="text-center mb-10">
                <div className="text-sand text-3xl text-bold">Breeding Program & Certifications</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-x-5 gap-y-12">
                <div className="p-6">
                    <figure className="min-h-[230px]">
                        <Image 
                            src={ENS_ESI}
                            alt="ENS ESI Image"
                            width={216}
                            height={217}
                            style={ensStyle}
                        />
                    </figure>
                    <div>
                        <p className="text-sand">Early Neurological Stimulation (ENS) and Early Scent Introduction (ESI) are daily exercises to which puppies are exposed to from days 3-16 to get them a headstart in development, resilience, and coping mechanisms. Benefits include: boosted brain development, improved cardiovascular performance, and stronger immune system (greater resistance to disease) to list a few.</p>
                        <p/>
                        <p></p>
                    </div>
                </div>
                <div className="p-6">
                    <figure className="min-h-[230px]">
                        <Image 
                            src={OFA}
                            alt="OFA"
                            width={216}
                            height={217}
                            style={imageStyle}
                        />
                    </figure>
                    <div>
                        <p className="text-sand">OFA health testing on breeding adults is of paramount importance to make sure only the best quality in health are passed on in generations to come.</p>
                        <p/>
                        <p></p>
                    </div>
                </div>
                <div className="p-6">
                    <figure className="min-h-[230px]">
                        <Image 
                            src={BreedersBootcamp}
                            alt="good do image"
                            width={216}
                            height={217}
                            style={imageStyle}
                        />
                    </figure>
                    <div>
                        <p className="text-sand">Breeders Bootcamp was created with the intention of educating, empowering, and supporting breeders of all experience levels as we recognize the <b>CRITICAL</b> role we play in a puppy's life.</p>
                        <p/>
                        <p></p>
                    </div>
                </div>
                <div className="p-6">
                    <figure className="min-h-[230px]">
                        <Image 
                            src={PuppyCulture}
                            alt="Puppy Culture"
                            width={216}
                            height={217}
                            style={imageStyle}
                        />
                    </figure>
                    <div>
                        <p className="text-sand">Puppy Culture is a socialization & training program specifically developed for puppies, from birth through the end of their critical socialization period which is 12 weeks old.</p>
                        <p/>
                        <div className="mx-auto flex justify-center">
                            <button className="rounded-full bg-header text-sand p-3 m-3 hover:bg-sand hover:text-header"><a href="#">More Info</a></button>  
                        </div>
                        
                    </div>
                </div>
                
                <div className="p-6">
                    <figure className="min-h-[230px]">
                        <Image 
                            src={CKCS}
                            alt="CKCS"
                            width={216}
                            height={217}
                            style={imageStyle}
                        />
                    </figure>
                    <div>
                        <p className="text-sand">Our Cavaliers are registered in AKC and CKCSC-USA which are the two only legitimate registries in the U.S. for cavaliers.  The CKCSC-USA has a code of ethics which each member must follow.</p>
                        <p/>
                        <p></p>
                    </div>
                </div>
                
                <div className="p-6">
                    <figure className="min-h-[230px]">
                        <Image 
                            src={CKCS_Heart}
                            alt="CKCS Heart Image"
                            width={216}
                            height={217}
                            sizes="(min-height: 217px)"
                            style={imageStyle}
                        />
                    </figure>
                    <div>
                        <p className="text-sand"></p>
                        <p/>
                        <p></p>
                    </div>
                </div>
            </div>
            <hr/>
           
            </div>
            
            </div>
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
            
            
        </main>
    )
}
import Image from "next/image"


export default function Home() {
    return (
        
        <main>
            <div className="header-banner min-h-[300px]">
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
            <div className="flex flex-wrap justify-between gap-x-4">
                <div className="max-w-[30%]">
                    <figure>
                        <Image 
                            src="/05CEFE52-DEFE-4F67-8B70-7927DE8BBDE7-PhotoRoom.png-PhotoRoom.png"
                            alt="good do image"
                            width={216}
                            height={217}
                        />
                    </figure>
                    <div>
                        <p className="text-sand">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus nec feugiat in fermentum posuere. A iaculis at erat pellentesque adipiscing commodo. Varius quam quisque id diam. Sem nulla pharetra diam sit amet. Libero nunc consequat interdum varius. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Quam pellentesque nec nam aliquam sem et. Mi proin sed libero enim sed faucibus. Curabitur gravida arcu ac tortor dignissim convallis. Quam id leo in vitae turpis.</p>
                        <p/>
                        <p></p>
                    </div>
                </div>
                <div className="max-w-[30%]">
                    <figure>
                        <Image 
                            src="/05CEFE52-DEFE-4F67-8B70-7927DE8BBDE7-PhotoRoom.png-PhotoRoom.png"
                            alt="good do image"
                            width={216}
                            height={217}
                        />
                    </figure>
                    <div>
                        <p className="text-sand">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus nec feugiat in fermentum posuere. A iaculis at erat pellentesque adipiscing commodo. Varius quam quisque id diam. Sem nulla pharetra diam sit amet. Libero nunc consequat interdum varius. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Quam pellentesque nec nam aliquam sem et. Mi proin sed libero enim sed faucibus. Curabitur gravida arcu ac tortor dignissim convallis. Quam id leo in vitae turpis.</p>
                        <p/>
                        <p></p>
                    </div>
                </div>
                <div className="max-w-[30%]">
                    <figure>
                        <Image 
                            src="/05CEFE52-DEFE-4F67-8B70-7927DE8BBDE7-PhotoRoom.png-PhotoRoom.png"
                            alt="good do image"
                            width={216}
                            height={217}
                        />
                    </figure>
                    <div>
                        <p className="text-sand">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus nec feugiat in fermentum posuere. A iaculis at erat pellentesque adipiscing commodo. Varius quam quisque id diam. Sem nulla pharetra diam sit amet. Libero nunc consequat interdum varius. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Quam pellentesque nec nam aliquam sem et. Mi proin sed libero enim sed faucibus. Curabitur gravida arcu ac tortor dignissim convallis. Quam id leo in vitae turpis.</p>
                        <p/>
                        <p></p>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <footer></footer>
        </main>
    )
}
import CertificationList from "./components/CertificationList"
import Image from "next/image"


export default function Home() {
    return (
        <main>
            <div className="py-4 px-3 text-sand">
                <h1 className="mb-3 text-3xl text-center font-bold">Welcome to Alohana Cavaliers</h1>
                <p className="text-center mb-5">located in Honolulu, Hawaii on the Island of Oahu!!</p>
                <Image
                    src="/photos/IMG_0990.jpg"
                    height={200}
                    width={300}
                    alt="test image"
                    className="md:float-left rounded-md md:mr-5 md:mt-5 sm:mx-auto"
                />
                <p className="mb-5 mt-12">Our program is built on a foundation of excellence, focusing on the highest standards of care, health, and attention to detail. As responsible Cavalier fanciers and hobby breeders, we adhere to ethical breeding practices and follow all applicable regulations and guidelines to promote the health and longevity of the Cavalier breed. We carefully select our breeding dogs, ensuring they possess the desirable traits that define the Cavalier breed, including their gentle nature and affectionate disposition.  We also prioritize early socialization, exposing our puppies to various stimuli and experiences to help them grow into confident and well-adjusted companions who will bring years of happiness & cherished memories.

                {/* <Image 
                    src="/photos/IMG_0992.jpg"
                    height={200}
                    width={300}
                    alt="test image 2"
                    className="md:float-left rounded-md md:mr-5 md:mt-5 sm:mx-auto sm:my-5"
                /> */}
                <br/><br/>
                We understand that bringing a new puppy into your life is a significant decision. That's why we provide ongoing support and guidance to our puppy owners. We are here to answer any questions you may have and offer advice on training, nutrition, and general care. Our commitment to you and your puppy extends beyond the adoption process – we are dedicated to fostering a lifelong bond between you and your Cavalier. 
                </p>
            </div> 
            <div className="flex flex-wrap my-5 gap-4 justify-center ">
                <Image 
                    src="/photos/D40F9B60-AC88-4877-A1CA-412965A113B0.jpg"
                    alt="test 2"
                    height={300}
                    width={300}
                    className="rounded-md"
                />
                <Image
                    src="/photos/IMG_0858.jpg"
                    alt="group photo"
                    height={300}
                    width={400}
                    className="rounded-md"
                />
                <Image
                    src="/photos/IMG_0991.jpg"
                    alt="group photo"
                    height={300}
                    width={400}
                    className="rounded-md"
                />
            </div>
            <hr/>
            <br/>
            <div className="text-center mb-10">
                <p className="text-sand text-3xl text-bold">Breeding Program & Certifications</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-x-5 gap-y-12">
               <CertificationList/> 
            </div>
            <hr/>
        </main>
    )
}
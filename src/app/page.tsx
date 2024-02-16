import CertificationList from "./components/CertificationList"
import Image from "next/image"
import LineSeparator from "./components/LineSeparator"



const Home = () => {
    return (
        <main>
            <div className="py-4 px-3 text-sand">
                <h1 className="mb-3 text-3xl text-center font-bold">Welcome to Alohana Cavaliers</h1>
                <p className="text-center mb-5">located in Honolulu, Hawaii on the Island of Oahu!!</p>
                <div className="flex">
                <p className="my-5 text-center">Our program is built on a foundation of excellence, focusing on the highest standards of care, health, and attention to detail. As responsible Cavalier fanciers and hobby breeders, we adhere to ethical breeding practices and follow all applicable regulations and guidelines to promote the health and longevity of the Cavalier breed. We carefully select our breeding dogs, ensuring they possess the desirable traits that define the Cavalier breed, , including their gentle nature, affectionate disposition, and so much more which takes a lot of time of gaining knowledge and experience to understand.  Therefore, we only sell puppies as pets with a spay/neuter contract and will keep back some of our own puppies who may continue to improve our program to reach the goals we have for the breed.  We prioritize early socialization, exposing our puppies to various stimuli and experiences to help them grow into confident and well-adjusted companions who will bring years of happiness & cherished memories.
               <br/><br/>
                We understand that bringing a new puppy into your life is a significant decision. That&#39;s why we provide ongoing support and guidance to our puppy owners. We are here to answer any questions you may have and offer advice on training, nutrition, and general care. Our commitment to you and your puppy extends beyond the adoption process – we are dedicated to fostering a lifelong bond between you and your Cavalier. 
                </p>
                </div>
                
            </div> 
            <div className="flex justify-center my-5 gap-4">    
                <Image
                    src="/photos/IMG_0990.jpg"
                    height={200}
                    width={500}
                    alt="test image"
                    className="rounded-md"
                    placeholder="blur"
                    blurDataURL="/blur-image.jpg"
                    />
            </div>
            <LineSeparator/>
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

export default Home

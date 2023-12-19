import CertificationList from "./components/CertificationList"
import Image from "next/image"
import test from "../../public/photos/D40F9B60-AC88-4877-A1CA-412965A113B0.jpg"
import { CSSProperties } from 'react'


export default function Home() {
    return (
        <main>
            <div className="py-4 px-3 text-sand">
                <h1 className="mb-5 text-3xl text-center font-bold">Welcome to Alohana Cavaliers located in Honolulu, Hawaii on the Island of Oahu!!</h1>
                
                <Image
                    src="/photos/IMG_0990.jpg"
                    height={200}
                    width={400}
                    alt="test image"
                    className="float-right rounded-md ml-5 mt-5"
                />
                
                <p className="mb-5 mt-12">
                At Alohana Cavaliers, we take great pride in our passion for showing and raising exceptional Cavalier King Charles Spaniels. As dedicated professionals in the dog fancier community, we strive to provide you with healthy, well-socialized, and beautiful Cavalier puppies that will bring joy and companionship to your life.
                <br/><br/>
                Our program is built on a foundation of excellence, focusing on the highest standards of care, health, and attention to detail. We carefully select our breeding dogs, ensuring they possess the desirable traits that define the Cavalier breed, including their gentle nature and affectionate disposition. Through extensive research and proper health testing, we aim to produce puppies of exceptional quality, both in terms of physical attributes and temperament.
                <br/><br/>
                The well-being of our dogs is of utmost importance to us. Our Cavaliers are raised in a loving and nurturing environment, receiving the highest quality care, nutrition, and veterinary attention. We prioritize early socialization, exposing our puppies to various stimuli and experiences to help them grow into confident and well-adjusted companions.
                <br/><br/>
                <Image 
                    src="/photos/IMG_0992.jpg"
                    height={200}
                    width={300}
                    alt="test image 2"
                    className="float-left rounded-md mr-5 mt-5"
                />
                As responsible Cavalier fanciers and hobby breeders, we adhere to ethical breeding practices and follow all applicable regulations and guidelines. We are committed to promoting the health and longevity of the Cavalier breed. Our goal is to contribute to the betterment of the breed and produce healthy puppies that will thrive in their new homes. 
                <br/><br/>

                We understand that bringing a new puppy into your life is a significant decision. That's why we provide ongoing support and guidance to our puppy owners. We are here to answer any questions you may have and offer advice on training, nutrition, and general care. Our commitment to you and your puppy extends beyond the adoption process – we are dedicated to fostering a lifelong bond between you and your Cavalier.
                <br/><br/>
                
                We invite you to explore our website and learn more about our breeding program, our occasionally available puppies, and our commitment to excellence. If you're interested in adding a loving and loyal Cavalier companion to your family, please don't hesitate to reach out to us. We would be delighted to assist you in finding the perfect puppy that will bring years of happiness and cherished memories.
                <br/><br/>
                Thank you for visiting our Website. 
                <br/><br/>
                We look forward to helping you find your perfect furry companion!
                        
                </p>
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
import CertificationList from "./components/CertificationList"

export default function Home() {
    return (
        <main>
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
                <p className="text-sand text-3xl text-bold">Breeding Program & Certifications</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-x-5 gap-y-12">
               <CertificationList/> 
            </div>
            <hr/>
           
            </div>
            
            </div>

        </main>
    )
}
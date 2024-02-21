import Image from "next/image"
import LineSeparator from "@/components/LineSeparator"

export default function AboutPage () {
  return (
      <div className="text-sand py-9 mx-5">
        <div>
        <p className="text-3xl text-center text-bold">Breeder Information</p>
        <p className="text-center">“I don’t like dogs. I LOVE dogs.” </p>
        <br/>
        <Image 
          src='/photos/IMG_7492.jpg'
          height={200}
          width={300}
          alt="Halloween Pic"
          className="md:float-left rounded-md md:mr-5 md:mt-5 sm:mx-auto sm:my-5"
          placeholder="blur"
          blurDataURL="/blur-image.jpg"
        />
        <p className="my-3">Aloha! I am Hikari Watanabe, and I am thrilled to share my story as a passionate dog lover. Born in Japan, raised in Oahu, educated in California, and lived a few years in Oregon, my life took an unexpected turn when my mother faced a cancer diagnosis back in Hawaii. Determined to support her during this challenging time, I made the heartfelt decision to return to my home state.</p>
        <p className="my-3">Returning to Hawaii not only allowed me to be there for my mother but also redirected my path towards following my true passion: dogs.  Since I can remember, my love for dogs has been an integral part of my life. From pouring over dog textbooks to creating an art business inspired by dogs, collecting dog-related items, attending dog events, and engaging in conversations about dogs, I have immersed myself in the world of man&#39;s best friend.</p>
        <Image
            src="/photos/IMG_8508.jpg"
            height={200}
            width={300}
            alt="Lady and Amaro"
            className="md:float-right rounded-md md:ml-5 md:mt-5 sm:mx-auto"
            placeholder="blur"
            blurDataURL="/blur-image.jpg"
          />
        <p className="my-3">As an avid animal enthusiast, I have cared for various creatures throughout my life; from kabutomushi, fish, hermit crabs, a lovebird, cats, dogs, and the list goes on. I have also fostered neonate kittens and cats at a rescue shelter in California for many years. However, it is my profound dedication to dogs that has shaped my journey as a Cavalier fancier and hobby breeder. I am committed to providing this extraordinary breed to others in a manner that reflects the utmost care and responsibility. I understand the difficulty in finding a breeder who checks all the boxes, as I experienced the same challenge when searching for a Cavalier.</p>
        <p className="my-3">That is why I am determined to be the breeder I wished to find during my own quest. My breeding program prioritizes thorough effort and diligent attention to detail, ensuring the well-being of my dogs, their puppies, and their future owners. While finding someone who meets all the criteria may be rare, I strive to surpass those expectations. Your trust and satisfaction in our breeding practices are of the utmost importance to me. My family and life partner makes it all possible to reach these goals and am also in full appreciation of them. </p>
        <p className="my-3">Thank you for considering our breeding program. We eagerly anticipate the opportunity to provide you with an exceptional dog and a rewarding experience that exceeds your expectations.</p>
        </div>

        <br/><br/>
        <LineSeparator/>
        <div className="mt-9 text-left">
          <p className="text-3xl text-bold text-center">About Breeding Program</p>
          <p className="text-center">Health details in our Cavaliers are of utmost importance. This includes having all of our dogs professionally tested for their:</p>
        <br/>
        <br/>
        <ul className="list-disc parent-marker">
          <li>
            Heart (for MVD or mitral valve disease)
            <ul className="ps-5 py-1 list-disc child-marker">
              <li>Heart testing reduces the chance of passing down congenital heart disease, which can cause a range of symptoms ranging from trouble exercising to heart failure.</li>
            </ul>
          </li> 
          <li>
            Eyes (for eye disorders)
            <ul className="ps-5 py-1 list-disc child-marker">
              <li>Eye testing reduces the chance of passing down a wide range of hereditary eye illnesses including retinal dysplasia, lens luxation, and glaucoma, which can cause impaired vision or blindness.</li>
            </ul>
          </li>
          <li>
            Patellas (for patellar luxation or loose knees)
            <ul className="ps-5 py-1 list-disc child-marker">
              <li>Knee testing reduces the chance of passing down Patellar Luxation, which results in the kneecap becoming displaced or dislocated and can cause mild to severe joint pain.</li>
            </ul>
          </li>
        </ul>
        <br/>
        They are also DNA tested for:
        <br/>
        <br/>
        <ul className="list-disc parent-marker">
          <li>CC (Curly Coat)</li>
          <li>DE (Dry Eye Syndrome)</li>
          <li>EFS (Episodic Falling Syndrome)</li>
          <li>MD (Muscular Dystrophy)</li>
          <li>DM (Degenerative Myelopathy)</li>
          <li>MCADD (Medium Chain Acyl-CoA Dehydrogenase Deficiency)</li>
        </ul>
        <br/>
        which can be extremely harmful for them if not tested and educated properly on them. Please go to my resources page for more on these conditions and to understand why these are very important to know about before owning a Cavalier King Charles Spaniel. Educating yourself thoroughly in the breed you want is the first step to finding the right puppy and choosing a reputable breeder who truly cares for the breed they focus on. <br/><br/>
        The puppies we produce are well-bred and raised as family to be well-socialized, friendly, playful, and just overall amazing companions. I breed for quality in health, correct temperament, & conformation to the standard of the breed. Once you own a cavalier, you will understand and feel the difference of the immense love a cavalier can give you. I’ve owned a few different breeds but until I owned my first cavalier, it felt like I found true love in a dog that I’ve never experienced. Something about how their adorable “melty” eyes reflect your gaze and can soothe your soul is definitely a super-power I believe they have.

      </div>
        </div>
  )
}


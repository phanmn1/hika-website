import { CertItem } from "../types/CertItem"
import CertificationItem from "./CertificationItem"
import { CSSProperties } from 'react'
import PuppyCulture from "../../../public/puppy_culture.jpg"
import ENS_ESI from "../../../public/ens_esi.png"
import OFA from "../../../public/ofa.png"
import BreedersBootcamp from "../../../public/breeders_bootcamp.png"
import CKCS from "../../../public/ckcs.png"
import CKCS_Heart from "../../../public/ckcs_heart.jpg"


const imageStyle: CSSProperties = {
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '1rem'
}

const ensStyle: CSSProperties = {
  marginLeft: 'auto', 
  marginRight: 'auto',
  borderRadius: '50%',
  marginBottom: '1rem'
}

const certifications: CertItem[] = [
  // ENS ESI
  {
    imageSrc: ENS_ESI,
    imageStyle: ensStyle,
    text: "Early Neurological Stimulation (ENS) and Early Scent Introduction (ESI) are daily exercises to which puppies are exposed to from days 3-16 to get them a headstart in development, resilience, and coping mechanisms. Benefits include: boosted brain development, improved cardiovascular performance, and stronger immune system (greater resistance to disease) to list a few.",
    link: "https://www.akc.org/expert-advice/dog-breeding/breeder-puppy-socialization-early-neurological-stimulation/"
  }, 
  // OFA
  {
    imageSrc: OFA,
    imageStyle: imageStyle,
    text: "OFA health testing on breeding adults is of paramount importance to make sure only the best quality in health are passed on in generations to come.",
    link: "https://ofa.org/"
  },
  // Breeders Bootcamp
  {
    imageSrc: BreedersBootcamp,
    imageStyle: imageStyle,
    text: "Breeders Bootcamp was created with the intention of educating, empowering, and supporting breeders of all experience levels as we recognize the <b>CRITICAL</b> role we play in a puppy's life.",
    link: "https://www.breedersbootcamp.com/"
  },
  // Puppy Culture
  {
    imageSrc: PuppyCulture,
    imageStyle: imageStyle, 
    text: "Puppy Culture is a socialization & training program specifically developed for puppies, from birth through the end of their critical socialization period which is 12 weeks old.",
    link: "https://shoppuppyculture.com/pages/about-puppy-culture"
  },
  // CKCS 
  {
    imageSrc: CKCS,
    imageStyle: imageStyle,
    text: "Our Cavaliers are registered in AKC and CKCSC-USA which are the two only legitimate registries in the U.S. for cavaliers. The CKCSC-USA has a code of ethics which each member must follow.",
    link: "https://ckcsc.org/code-ethics"
  }, 
  // CKCS Heart
  {
    imageSrc: CKCS_Heart,
    imageStyle: imageStyle,
    text: `<p>A century long-commitment to advance the health & welfare of all dogs & uphold the following principles:</p>
    <br/>
    <ul className="list-disc">
        <li>HEALTH: Breeding stock is health tested to their breed’s AKC Breed Parent Club.</li>
        <li>EDUCATION: Stay educated on best breeding practices & advances in canine health.</li>
        <li>ACCOUNTABILITY: Agreeing to comply with the AKC Care & Conditions Policy.</li>
        <li>RESPONSIBILITY: Responsibility for the health & well-being of all puppies produced & complying with all laws regarding the ownership & maintenance of dogs.</li>
        <li>TRADITION: Upholding AKC’s tradition of breeding happy & healthy purebred dogs.</li>
    </ul>`,
    link: "https://ckcsc.org/code-ethics"
  }

]

export default () => {
  return (
    certifications.map((cert: CertItem) => {
      return <CertificationItem {...cert}/>
    })
  )
}
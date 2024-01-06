import DogDetail from "../components/DogDetail"
import { DogInfo } from "../types/DogInfo"

const girls: DogInfo[] = [
    {
        name: 'Lady Cinnamon', 
        callName: 'Lady', 
        coat: 'Blenheim',
        personality: 'The sweetest little angel who loves to hug people and give sweet peck-kisses',
        hobby: 'Chasing reflections from mirrors, sleeping on pawrents pillows.',
        fact: 'She absolutely loves when the vacuum comes out and loves to follow it around wagging her tail.',
        src: '/photos/LADY.jpg'
    }, 
    {
        name: 'Elizabeth Magnolia Passco', 
        callName: 'Ellie',
        coat: 'Tricolor',
        personality: 'Definition of being a couch potato but has spurts of energy just for a short bit!',
        hobby: 'Eating! Snacks! Cuddles for hours on end.',
        fact: 'Half-sister to Amaro as they are both from Slovakia!',
        src: '/photos/F6DD0C0E-7EA7-49E6-B3E8-6A02B2AE4A89.jpg'
    }
]
export default function GirlsPage() {
    return (
        <div className="text-sand py-9 mx-auto max-w-3xl"> 
               {girls.map((item) => <DogDetail key={item.callName} {...item}/>)} 
        </div>

    )
}
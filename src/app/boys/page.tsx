import DogDetail from "../components/DogDetail"
import { DogInfo } from "../types/DogInfo"

const boys: DogInfo[] = [
    {
        name: 'Magnificent Amaro Magnolia Passco',
        callName: 'Amaro',
        coat: 'Tricolor', 
        personality: 'Lower energy cuddle bug who would rather get attention than play with toys',
        hobby: 'Cuddling on the sofa, watching disney movies, & kissing anyone who wants it',
        fact: 'He is half-brother to Ellie as they are both from Slovakia!',
        src: '/photos/AMARO2.jpg'
    },
    {
        name: 'Monkey D. Luffy',
        callName: 'Luffy',
        coat: 'Blenheim',
        personality: 'The most balanced out of the lot and is right in the middle of energetic & chill!',
        hobby: 'Getting attention & playing with everyone in the house.',
        fact: 'He is a Poland boy and has a blenheim mark on his head.  He is the most excited wigglebutt out of the crew. His best friend here is Amaro.',
        src: '/photos/IMG_7764.jpg'
    },
    {
        name: 'Midori’s Flowers Mark',
        callName: 'Mark', 
        coat: 'Tricolor',
        personality: 'Toy-lover with the most energy and the most fearless out of the crew',
        hobby: 'Toys, toys, playing catch, and getting cuddles',
        fact: 'Came all the way from Italy!',
        src: '/photos/EC109919-80E1-4F47-AB90-54D01D690A35.jpg'
    }
]

const markLastItem = (dogs: DogInfo[]) => {
    let lastElement = dogs[dogs.length - 1] // get last element
    lastElement.isLast = true
    return dogs
}

export default function BoysPage()  {
    
    const markedArray = markLastItem(boys)

    return (
        <div className="text-sand py-9 md:mx-auto max-w-3xl mx-5"> 
               {markedArray.map((item) => <DogDetail key={item.callName} {...item}/>)} 
        </div>

    )
}
import DogDetail from "./DogDetail"
import { DogInfo } from "../types/DogInfo"

const dogs: DogInfo[] = [
  {
      name: 'Magnificent Amaro Magnolia Passco',
      callName: 'Amaro',
      coat: 'Tricolor', 
      sex: 'M',
      personality: 'Lower energy cuddle bug who would rather get attention than play with toys',
      hobby: 'Cuddling on the sofa, watching disney movies, & kissing anyone who wants it',
      fact: 'He is half-brother to Ellie as they are both from Slovakia!',
      src: '/photos/AMARO2.jpg'
  },
  {
      name: 'Monkey D. Luffy',
      callName: 'Luffy',
      coat: 'Blenheim',
      sex: 'M',
      personality: 'The most balanced out of the lot and is right in the middle of energetic & chill!',
      hobby: 'Getting attention & playing with everyone in the house.',
      fact: 'He is a Poland boy and has a blenheim mark on his head.  He is the most excited wigglebutt out of the crew. His best friend here is Amaro.',
      src: '/photos/IMG_7764.jpg'
  },
  {
      name: 'Midori’s Flowers Mark',
      callName: 'Mark', 
      coat: 'Tricolor',
      sex: 'M',
      personality: 'Toy-lover with the most energy and the most fearless out of the crew',
      hobby: 'Toys, toys, playing catch, and getting cuddles',
      fact: 'Came all the way from Italy!',
      src: '/photos/EC109919-80E1-4F47-AB90-54D01D690A35.jpg'
  }, 
  {
      name: 'Lady Cinnamon', 
      callName: 'Lady', 
      coat: 'Blenheim',
      sex: 'F',
      personality: 'The sweetest little angel who loves to hug people and give sweet peck-kisses',
      hobby: 'Chasing reflections from mirrors, sleeping on pawrents pillows.',
      fact: 'She absolutely loves when the vacuum comes out and loves to follow it around wagging her tail.',
      src: '/photos/lady.jpg'
  }, 
  {
      name: 'Elizabeth Magnolia Passco', 
      callName: 'Ellie',
      coat: 'Tricolor',   
      sex: 'F',
      personality: 'Definition of being a couch potato but has spurts of energy just for a short bit!',
      hobby: 'Eating! Snacks! Cuddles for hours on end.',
      fact: 'Half-sister to Amaro as they are both from Slovakia!',
      src: '/photos/F6DD0C0E-7EA7-49E6-B3E8-6A02B2AE4A89.jpg'
  }
]
const markLastItem = (dogs: DogInfo[]) => {
  let lastElement = dogs[dogs.length - 1] // get last element
  lastElement.isLast = true
  return dogs
}

export default function DogsPage({sex}: { sex: string})  {
  
  const filteredDogs = dogs.filter((item) => item.sex === sex)
  const markedArray = markLastItem(filteredDogs)

  return (
      <div className="text-sand py-9 md:mx-auto max-w-3xl mx-5"> 
             {markedArray.map((item) => <DogDetail key={item.callName} {...item}/>)} 
      </div>

  )
}
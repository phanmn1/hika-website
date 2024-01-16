import { PhotoAlbumProps } from "react-photo-album";
import { DogInfo } from "../types/DogInfo"
import { Photo } from "../types/Photo";
const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

export const dogs: DogInfo[] = [
  {
      name: 'Magnificent Amaro Magnolia Passco',
      callName: 'Amaro',
      coat: 'Tricolor', 
      sex: 'M',
      personality: 'Lower energy cuddle bug who would rather get attention than play with toys',
      hobby: 'Cuddling on the sofa, watching disney movies, & kissing anyone who wants it',
      fact: 'He is half-brother to Ellie as they are both from Slovakia!',
      src: '/photos/AMARO2.jpg',
      photos: [
        {
          key: '1',
          src: '/gallery/IMG_2081.jpg',
          height: 4032,
          width: 2257
        },
        {
          key: '2',
          src: '/gallery/IMG_2133.jpg',
          height: 4032,
          width: 3024
        }
      ]
  },
  {
      name: 'Monkey D. Luffy',
      callName: 'Luffy',
      coat: 'Blenheim',
      sex: 'M',
      personality: 'The most balanced out of the lot and is right in the middle of energetic & chill!',
      hobby: 'Getting attention & playing with everyone in the house.',
      fact: 'He is a Poland boy and has a blenheim mark on his head.  He is the most excited wigglebutt out of the crew. His best friend here is Amaro.',
      src: '/photos/IMG_7764.jpg',
      photos: [
        {
          key: '3',
          src: '/gallery/IMG_'
        }
      ]
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

const photos = (callname: string) => {
  const dogPhotos = dogs.find(dog => dog.callName.toLowerCase() === callname.toLowerCase())

  if(!dogPhotos)
    return []

  if(!dogPhotos.photos)
    return []

  const exportPhotos: Photo[] = dogPhotos.photos.map((photo) => {
    const width = breakpoints[0]
    const height = (photo.height / photo.width) * width

    return {
      src: photo.src,
      width, 
      height,
      srcSet: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.height/ photo.width)) * breakpoint
        return {
          src: photo.src,
          width: breakpoint,
          height: height
        }
      })
    }
  })

  console.log(exportPhotos)
  return exportPhotos
}

export { photos }

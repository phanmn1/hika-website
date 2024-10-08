import { PhotoAlbumProps } from "react-photo-album";
import { DogInfo } from "../types/DogInfo"
import { Photo } from "../types/Photo";
import { link } from "fs";
const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

export const dogs: DogInfo[] = [
  {
    name: 'Magnificent Amaro Magnolia Passco',
    callName: 'Amaro',
    linkRef: 'amaro',
    coat: 'Tricolor',
    sex: 'M',
    personality: 'Lower energy cuddle bug who would rather get attention than play with toys',
    hobby: 'Cuddling on the sofa, watching disney movies, & kissing anyone who wants it',
    fact: 'He is half-brother to Ellie as they are both from Slovakia!',
    src: '/gallery/amaro/AMARO2.jpg',
    photos: [
      {
        key: '0',
        src: '/gallery/amaro/AMARO1.jpg',
        height: 1066,
        width: 1600
      },
      {
        key: '1',
        src: '/gallery/amaro/2FE079CC-DED4-4096-8FE3-8478FF8B0AB5.jpg',
        height: 1800,
        width: 1440
      },
      {
        key: '2',
        src: '/gallery/amaro/B5C81F26-599F-4018-9B25-14042590CBD8.jpg',
        height: 2000,
        width: 1125
      },
      {
        key: '3',
        src: '/gallery/amaro/IMG_0266.jpg',
        height: 4032,
        width: 3024
      },
      {
        key: '4',
        src: '/gallery/amaro/IMG_0784.jpg',
        width: 1740,
        height: 1711
      },
      {
        key: '5',
        src: '/gallery/amaro/IMG_2081.jpg',
        height: 4032,
        width: 2257
      },
      {
        key: '6',
        src: '/gallery/amaro/IMG_2125.jpg',
        height: 3286,
        width: 2281
      },
      {
        key: '7',
        src: '/gallery/amaro/IMG_2133.jpg',
        height: 4032,
        width: 3024
      },
      {
        key: '8',
        src: '/gallery/amaro/IMG_2419.jpg',
        height: 4032,
        width: 3024
      },
      {
        key: '9',
        src: '/gallery/amaro/IMG_9166.jpg',
        height: 4032,
        width: 3024
      }
    ]
  },
  {
    name: 'CH Midori’s Flowers Mark',
    callName: 'Mark',
    linkRef: 'mark',
    coat: 'Tricolor',
    sex: 'M',
    personality: 'Toy-lover with the most energy and the most fearless out of the crew',
    hobby: 'Toys, toys, playing catch, and getting cuddles',
    fact: 'Came all the way from Italy!',
    src: '/gallery/mark/mark_profile.png',
    photos: [
      {
        key: '1',
        src: '/gallery/mark/EC109919-80E1-4F47-AB90-54D01D690A35.jpg',
        width: 1125,
        height: 1504
      },
      {
        key: '2',
        src: '/gallery/mark/IMG_0166.jpg',
        width: 3024,
        height: 4032
      },
      {
        key: '3',
        src: '/gallery/mark/IMG_1644.jpg',
        width: 896,
        height: 1117
      },
      {
        key: '4',
        src: '/gallery/mark/IMG_2420.jpg',
        width: 3024,
        height: 4032
      },
      {
        key: '5',
        src: '/gallery/mark/IMG_2421.jpg',
        width: 2099,
        height: 4032
      },
      {
        key: '6',
        src: '/gallery/mark/IMG_4314.jpg',
        width: 2571,
        height: 4032
      },
      {
        key: '7',
        src: '/gallery/mark/IMG_8396.jpg',
        width: 3024,
        height: 4032
      },
      {
        key: '8',
        src: '/gallery/mark/mark_profile.png',
        width: 990,
        height: 1362
      },
      {
        key: '9',
        src: '/gallery/mark/IMG_0938.jpeg',
        width: 1125,
        height: 1474
      },
      {
        key: '9',
        src: '/gallery/mark/IMG_0937.jpeg',
        width: 860,
        height: 1281
      },
      {
        key: '10',
        src: '/gallery/mark/IMG_0936.jpeg',
        width: 1051,
        height: 1206
      },
      {
        key: '11',
        src: '/gallery/mark/IMG_0935.jpeg',
        width: 967,
        height: 1172
      },
      {
        key: '12',
        src: '/gallery/mark/IMG_0934.jpeg',
        width: 809,
        height: 1002
      },
      {
        key: '13',
        src: '/gallery/mark/IMG_0933.jpeg',
        width: 1125,
        height: 1268
      },
      {
        key: '14',
        src: '/gallery/mark/CHMark1.JPG',
        width: 4095,
        height: 2730
      },
      {
        key: '15',
        src: '/gallery/mark/CHMark3.JPG',
        width: 4095,
        height: 2730
      }
    ]
  },
  {
    name: 'Lady Cinnamon CGC',
    callName: 'Lady',
    linkRef: 'lady',
    coat: 'Blenheim',
    sex: 'F',
    personality: 'The sweetest little angel who loves to hug people and give sweet peck-kisses',
    hobby: 'Chasing reflections from mirrors, sleeping on pawrents pillows.',
    fact: 'She absolutely loves when the vacuum comes out and loves to follow it around wagging her tail.',
    src: '/gallery/lady/lady.jpg',
    photos: [
      {
        key: '1',
        src: '/gallery/lady/3A2A1C1E-B9A1-49E5-ACB7-8DD9146B8F2E.jpg',
        width: 1440,
        height: 1800
      },
      {
        key: '2',
        src: '/gallery/lady/28A91BC3-D067-4329-9C69-1664352B0F78.jpg',
        width: 1044,
        height: 1471
      },
      {
        key: '3',
        src: '/gallery/lady/119836B6-6BA5-419F-B440-EF14D9AA613A.jpg',
        width: 1440,
        height: 1800
      },
      {
        key: '4',
        src: '/gallery/lady/A11E53DB-1ABA-40AD-A411-0FBCE03994BE.jpg',
        width: 1440,
        height: 1794
      },
      {
        key: '5',
        src: '/gallery/lady/AE36A8B7-5DA0-4930-B215-F01471676818.jpg',
        width: 1183,
        height: 1173
      },
      {
        key: '6',
        src: '/gallery/lady/CB83A1E4-DECF-40FF-A335-6046B89DBDCA.jpg',
        width: 1439,
        height: 1093
      },
      {
        key: '7',
        src: '/gallery/lady/IMG_1302.jpg',
        width: 3024,
        height: 4032
      },
      {
        key: '8',
        src: '/gallery/lady/IMG_1728.jpg',
        width: 1125,
        height: 1283
      },
      {
        key: '9',
        src: '/gallery/lady/IMG_2156.jpg',
        width: 1125,
        height: 1387
      },
      {
        key: '10',
        src: '/gallery/lady/IMG_2157.jpg',
        width: 908,
        height: 1238
      },
      {
        key: '11',
        src: '/gallery/lady/IMG_2413.jpg',
        width: 2499,
        height: 3546
      },
      {
        key: '12',
        src: '/gallery/lady/IMG_4623.jpg',
        width: 1125,
        height: 853
      },
      {
        key: '13',
        src: '/gallery/lady/IMG_4685.jpg',
        width: 1125,
        height: 2000
      },
      {
        key: '14',
        src: '/gallery/lady/IMG_6196.jpg',
        width: 2632,
        height: 3354
      },
      {
        key: '15',
        src: '/gallery/lady/IMG_6259.jpg',
        width: 1972,
        height: 2577
      },
      {
        key: '16',
        src: '/gallery/lady/IMG_6810.jpg',
        width: 2031,
        height: 2773
      },
      {
        key: '17',
        src: '/gallery/lady/IMG_8280.jpg',
        width: 1125,
        height: 1779
      },
      {
        key: '18',
        src: '/gallery/lady/IMG_9076.jpg',
        width: 2397,
        height: 4032
      },
      {
        key: '19',
        src: '/gallery/lady/IMG_0709.jpeg',
        width: 1575,
        height: 2100
      },
      {
        key: '20',
        src: '/gallery/lady/IMG_3370.jpeg',
        width: 2632,
        height: 3787
      },
      {
        key: '21',
        src: '/gallery/lady/IMG_4314.jpeg',
        width: 1575,
        height: 2100
      },
      {
        key: '22',
        src: '/gallery/lady/IMG_4735.jpeg',
        width: 4268,
        height: 6396
      },
      {
        key: '23',
        src: '/gallery/lady/IMG_4736.jpeg',
        width: 4075,
        height: 6112
      }
    ]
  },
  {
    name: 'Elizabeth Magnolia Passco',
    callName: 'Ellie',
    linkRef: 'ellie',
    coat: 'Tricolor',
    sex: 'F',
    personality: 'Definition of being a couch potato but has spurts of energy just for a short bit!',
    hobby: 'Eating! Snacks! Cuddles for hours on end.',
    fact: 'Half-sister to Amaro as they are both from Slovakia!',
    src: '/photos/F6DD0C0E-7EA7-49E6-B3E8-6A02B2AE4A89.jpg',
    photos: [
      {
        key: '1',
        src: '/gallery/ellie/284389DB-EAA0-4926-9FD5-FA392F08C9FC.jpg',
        width: 725,
        height: 1111
      },
      {
        key: '2',
        src: '/gallery/ellie/IMG_0762.jpg',
        width: 789,
        height: 1322
      },
      {
        key: '3',
        src: '/gallery/ellie/IMG_9439.jpg',
        width: 3024,
        height: 4032
      },
      {
        key: '4',
        src: '/gallery/ellie/IMG_9531.jpg',
        width: 3024,
        height: 4032
      },
      {
        key: '5',
        src: '/gallery/ellie/IMG_9644.jpg',
        width: 3024,
        height: 4032
      },
      {
        key: '5',
        src: '/gallery/ellie/IMG_9682.jpg',
        width: 2964,
        height: 4032
      },
    ]
  },
  {
    name: 'Vincent Van Goh Magnolia Passco (pending 2yr health testing)',
    callName: 'Vincent',
    linkRef: 'vincent',
    sex: "M",
    coat: 'Ruby',
    personality: 'Sensitive baby but energetic; constantly moving like the energizer bunny.',
    hobby: 'Loves to bother his older brothers and rub against their face just for fun.',
    fact: 'He is my 3rd furbaby from Magnolia Passco.',
    src: '/gallery/vincent/IMG_0713.jpeg',
    photos: [
      {
        key: '1',
        src: '/gallery/vincent/IMG_0265.jpeg',
        width: 1575,
        height: 2100
      },
      {
        key: '2',
        src: '/gallery/vincent/IMG_0440.jpeg',
        width: 1280,
        height: 1533
      },
      {
        key: '3',
        src: '/gallery/vincent/IMG_3443.jpeg',
        width: 2048,
        height: 1436
      }
    ]
  },
  {
    name: 'Cherry Blossom ze Souhvezdi Lyry (pending 2yr health testing)',
    callName: 'Cherry (pronounced like how Stevie Wonder sings “Cherie Amour”)',
    linkRef: 'cherry',
    sex: 'F',
    coat: 'Black & Tan',
    personality: 'The most friendly, cheerful, and most athletic out of my crew.',
    hobby: 'Cuddling up to just about anyone and making everyone her best friend!',
    fact: 'She is from Czechia & she holds the NEBL3 gene (N/mvdd) which is a huge hope to better the heart health of this precious breed by continuing research & monitoring for many upcoming years.',
    src: '/gallery/cherry/IMG_0849.jpeg',
    photos: [
      {
        key: '1',
        src: '/gallery/cherry/IMG_7582.jpeg',
        width: 658,
        height: 640
      },
      {
        key: '2',
        src: '/gallery/cherry/IMG_8321.jpeg',
        width: 1228,
        height: 1792
      },
      {
        key: '3',
        src: '/gallery/cherry/IMG_0847.jpeg',
        width: 1575,
        height: 2100
      },
      {
        key: '4',
        src: '/gallery/cherry/IMG_0835.jpeg',
        width: 1554,
        height: 2051
      },
      {
        key: '5',
        src: '/gallery/cherry/IMG_0776.jpeg',
        width: 1441,
        height: 2099
      },
      {
        key: '6',
        src: '/gallery/cherry/IMG_0671.jpeg',
        width: 1575,
        height: 2100
      },

    ]
  }
]

const photos = (linkRef: string) => {
  const dogPhotos = dogs.find(dog => dog.linkRef.toLowerCase() === linkRef.toLowerCase())

  if (!dogPhotos)
    return []

  if (!dogPhotos.photos)
    return []

  const exportPhotos: Photo[] = dogPhotos.photos.map((photo) => {
    const width = breakpoints[0]
    const height = (photo.height / photo.width) * width

    return {
      src: photo.src,
      width,
      height,
      srcSet: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.height / photo.width)) * breakpoint
        return {
          src: photo.src,
          width: breakpoint,
          height: height
        }
      })
    }
  })

  return exportPhotos
}

export { photos }

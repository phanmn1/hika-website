import { CSSProperties} from 'react'
import { StaticImageData } from 'next/image'

export type CertItem = {
  imageSrc: StaticImageData;
  altText?: string,
  imageStyle: CSSProperties; 
  text: string;
  link: string;
}


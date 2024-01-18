import { Photo } from './Photo'

export type DogInfo = {
    name: string
    callName: string
    coat: string
    personality: string
    hobby: string
    fact: string
    src: string
    sex: 'M' | 'F'
    isLast?: boolean
    photos?: Photo[]
}
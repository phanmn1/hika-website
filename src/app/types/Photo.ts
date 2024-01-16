export type Photo = {
  key?: string
  src: string
  width: number
  height: number
  alt?: string
  title?: string
  srcSet?: {
    src: string
    width: number
    height: number
  }[]
}
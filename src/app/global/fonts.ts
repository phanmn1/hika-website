import { Oleo_Script_Swash_Caps } from 'next/font/google'
import { PT_Serif } from 'next/font/google';

const oleo = Oleo_Script_Swash_Caps({
  weight: ['400', '700'],
  subsets: ['latin']
})

const pt_serif = PT_Serif({
  weight: ['400', '700'], 
  subsets: ['latin']
})

export  { oleo, pt_serif }
import { Fragment } from "react"
import Image from "next/image"
import { CSSProperties } from "react"
import { Oleo_Script_Swash_Caps } from 'next/font/google'

const oleo = Oleo_Script_Swash_Caps({
    weight: ['400', '700'],
    subsets: ['latin']
})

export default () => {
    return (
        <div className="text-sand py-9 mx-auto max-w-3xl">
            {/* <h1 className="text-3xl text-center text-bold">Our Boys</h1> */}
            <div className="py-5 flex flex-row gap-x-5">
                <div>
                    <Image
                        src="/photos/IMG_0266.jpg" 
                        className="rounded-md"
                        height={450}
                        width={350}
                        alt="Amaro"
                    />
                </div>
                <div className="">
                    <div className={`my-5 text-3xl title-shadow ${oleo.className}`}>Magnificent Amaro Magnolia Passco</div>
                    <div className="my-3">Call name: Amaro</div>
                    <div className="my-3">Coat color: Tricolor</div>
                    <div className="my-3">Personality: Lower energy cuddle bug who would rather get attention than play with toys</div>
                    <div className="my-3">Favorite hobby: Cuddling on the sofa, watching disney movies, & kissing anyone who wants it</div>
                    <div className="my-3">Fun fact: He is half-brother to Ellie as they are both from Slovakia!</div>
                </div>

            </div>    
        </div>

    )
}
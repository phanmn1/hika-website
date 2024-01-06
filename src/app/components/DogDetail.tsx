import { Fragment } from "react"
import Image from "next/image"
import { oleo } from "../global/fonts"
import { DogInfo } from "../types/DogInfo"

export default function DogDetail(props: DogInfo) {
    return (
        <div className="py-5 flex flex-row gap-x-5">
                <Image
                    src={props.src}
                    className="rounded-md"
                    height={450}
                    width={350} 
                    alt={props.callName}
                />
                <div className="">
                    <div className={`my-5 text-3xl title-shadow ${oleo.className}`}>{props.name}</div>
                    <div className="my-3">Call name: {props.callName}</div>
                    <div className="my-3">Coat color: {props.coat}</div>
                    <div className="my-3">Personality: {props.personality}</div>
                    <div className="my-3">Favorite hobby: {props.hobby}</div>
                    <div className="my-3">Fun fact: {props.fact}</div>
                </div>
        </div>
    )
}
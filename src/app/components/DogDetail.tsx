"use client"

import { Fragment } from "react"
import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image"
import { oleo } from "../global/fonts"
import { DogInfo } from "../types/DogInfo"
import LineSeparator from "./LineSeparator"

export default function DogDetail(props: DogInfo) {
    
    const { sex, dog } = useParams<{sex: string; dog: string;}>()

    return (
        <Fragment>
        <div className="py-5 flex flex-col md:flex-row gap-x-5">
                <Image
                    src={props.src}
                    className="rounded-md self-center"
                    height={450}
                    width={350} 
                    alt={props.callName}
                    placeholder="blur"
                    blurDataURL="/blur-image.jpg"
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
        <div className="flex justify-center">
                    <Link href={`${sex}/${props.callName.toLowerCase()}`}>
                        <button className="rounded-full bg-header text-sand p-3 m-3 hover:bg-sand hover:text-header">Image Gallery</button>  
                    </Link>
                </div>
        {!props.isLast && <LineSeparator/>}
        </Fragment>
    )
}
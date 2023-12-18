import { CertItem } from '../types/CertItem'
import Image from 'next/image'
import parser from 'html-react-parser'

export default (props: CertItem) => {
    return (
        <div className="p-6">
            <figure className="min-h-[230px]">
                <Image 
                    src={props.imageSrc}
                    alt="ENS ESI Image"
                    width={216}
                    height={217}
                    style={props.imageStyle}
                />
            </figure>
            <div>
                <p className="text-sand">{parser(props.text)}</p>
            </div>
            <div className="mx-auto flex justify-center mt-5">
                <a href={props.link} target="_blank">
                    <button className="rounded-full bg-header text-sand p-3 m-3 hover:bg-sand hover:text-header">More Info</button>  
                </a>
            </div>
        </div>
    )
}



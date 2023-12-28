import Image from "next/image"

export default () => {
    return (
        <div className="flex place-content-center">
            <div>
                <Image
                    src="/photos/MagicEraser_231217_164527.png"
                    alt="Koro Sorry"
                    height={300}
                    width={200}
                    />
                <h1 className="text-3xl text-center font-bold text-sand">Coming Soon</h1>
            </div>
        </div>
    )
}
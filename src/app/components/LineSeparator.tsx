import Image from "next/image";

export default function LineSeparator () {
  return (
  <div className="flex justify-center">
  <Image
    src='/line-separator.png'
    alt="line separator"
    width={1000}
    height={75}
    />
  </div>
    )

}
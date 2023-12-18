import Image from "next/image"
import Link from "next/link"
export default () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find page</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}
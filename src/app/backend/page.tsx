import { testPost } from "@/lib/server"

export default function BackendTest () {
  return (
    <div>
      <form action={testPost}>
        <input type="text" placeholder="title" name="title"/>
        <button>Submit</button>
      </form>
    </div>)
}
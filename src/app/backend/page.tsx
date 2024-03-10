import { testPost } from "@/lib/server"
import ApplicationForm from "./ApplicationForm"

export default function BackendTest () {
  return (<ApplicationForm testPost={testPost}/>)
}
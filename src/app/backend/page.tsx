import { testPost } from "@/lib/server"
import ApplicationForm from "./ApplicationForm"

export default function BackendTest () {
  return (
    <div className="flex justify-center py-5">
      <ApplicationForm className="basis-3/4" testPost={testPost}/>
    </div>
  )
}
'use server'
import { Eta } from "eta";
import  { buildContext } from './context'
import runPuppetier from "./puppetier";
import questions from "@/data/questions"


const testPost = async (formData: any) => {

  const eta = new Eta({views: "src/lib/views", defaultExtension: '.html' })
  
  const context = buildContext(formData, questions, 'public/logo.png')
 
  try {
    const res = await eta.renderAsync("./partials/index", context)
    //await fs.writeFile('test.html', res, 'utf-8')
    await runPuppetier(res)

    
  } catch (ex) {
    console.log(ex)
  }


}




export { testPost }


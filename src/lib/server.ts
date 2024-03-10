'use server'
import { Eta } from "eta";
import context, { buildContext } from './context'
import runPuppetier from "./puppetier";


const testPost = async (formData: any) => {
  
  console.log(formData)

  const componentType = typeof window === 'undefined' ? 'server' : 'client'
  console.log(componentType)

  const eta = new Eta({views: "src/lib/views", defaultExtension: '.html' })
 
  try {
    const res = await eta.renderAsync("./partials/index", buildContext('public/logo.png'))
    //await fs.writeFile('test.html', res, 'utf-8')
    await runPuppetier(res)

    
  } catch (ex) {
    console.log(ex)
  }


}




export { testPost }


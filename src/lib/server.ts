'use server'
import { Eta } from "eta";
import context, { buildContext } from './context'
import runPuppetier from "./puppetier";


const testPost = async (formData: any) => {
  
  console.log(formData)

  const eta = new Eta({views: "src/lib/views", defaultExtension: '.html' })
  
  const context = buildContext(formData, 'public/logo.png')
 
  try {
    //const res = await eta.renderAsync("./partials/index", buildContext('public/logo.png'))
    //await fs.writeFile('test.html', res, 'utf-8')
    //await runPuppetier(res)

    
  } catch (ex) {
    console.log(ex)
  }


}




export { testPost }


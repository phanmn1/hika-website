'use server'
import { Eta } from "eta";
import  { buildContext } from './context'
import runPuppetier from "./puppetier";
import questions from "@/data/questions"
import { sendEmail } from "./mailer";

// Initalize template engine
const eta = new Eta({views: "src/server/views", defaultExtension: '.html' })

const puppyApplicationSubmit = async (formData: any) => {

  // Generate variables from form data passed in
  const context = buildContext(formData, questions, 'public/logo.png')
 
  try {
    // Generate string of html template to render to .pdf file
    const res = await eta.renderAsync("./partials/index", context)
    //await fs.writeFile('test.html', res, 'utf-8')    
    
    //await runPuppetier(res)
    await sendEmail()

  } catch (ex) {
    console.log(ex)
  }

}




export { puppyApplicationSubmit }


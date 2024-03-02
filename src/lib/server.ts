'use server'
import puppeteer from 'puppeteer';
import { Eta } from "eta";
import context, { buildContext } from './context'


const testPost = async (formData: FormData) => {
  const { title } = Object.fromEntries(formData)

  const eta = new Eta({views: "src/lib/views", defaultExtension: '.html' })
 
  try {
    const res = await eta.renderAsync("./partials/index", buildContext('public/logo.png'))
    //await fs.writeFile('test.html', res, 'utf-8')


    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage()

    await page.setContent(res, { waitUntil: "domcontentloaded"})

    const pdf = await page.pdf({
      format: 'a4',
      printBackground: true,
      preferCSSPageSize: true,
      displayHeaderFooter: false,
      margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
      path: './template-html.pdf'
    })

  
    await browser.close();
  } catch (ex) {
    console.log(ex)
  }


}




export { testPost }


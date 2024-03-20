'use server'
import puppeteer from 'puppeteer';

const runPuppetier = async (render: string) => {
  try {

    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage()

    await page.setContent(render, { waitUntil: "domcontentloaded"})

    const pdf = await page.pdf({
      format: 'a4',
      printBackground: true,
      preferCSSPageSize: true,
      displayHeaderFooter: false,
      margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
      path: './template-html.pdf'
    })

  
    //await browser.close();
  } catch (error) {
    console.log(error)
  }
}


export default runPuppetier
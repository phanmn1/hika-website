'use server'
import { Template, BLANK_PDF } from '@pdfme/common';
import { generate } from '@pdfme/generator';
import { readFileSync, writeFileSync } from 'fs';
import { promises as fs} from 'fs';
import * as cheerio from 'cheerio';
import Mustache from 'mustache'
import jsPDF from 'jspdf';
import puppeteer from 'puppeteer';
import logo from '../../public/logo.png'
//import template from './template.handlebars'
//const template = require('./template.handlebars')
import { Eta } from "eta";
import context, { buildContext } from './context'
import { Pathway_Extreme } from 'next/font/google';
//import img from '../../public/logo.png'

const ejsOptions = {
  async: true,
  views: "src/lib/templates",

}

const testPost = async (formData: FormData) => {
  const { title } = Object.fromEntries(formData)

  const eta = new Eta({views: "src/lib/views", defaultExtension: '.html' })
  



  const res = await eta.renderAsync("./partials/index", buildContext('public/logo.png'))

  //const res =  ejs.renderFile('layout', context)

  
  await fs.writeFile('test.html', res, 'utf-8')
  //console.log(res)
  //const res2 = await 
  
  

  
  //try {
    //const s = await fs.readFile('src/lib/template.html')
    //const $ =  cheerio.load(s)
    // const context = {
    //   "profile": {
    //     "todayDate": "1/1/1990",
    //     "name": "John Doe",
    //     "birthdate": "1/1/1990",
    //     "address": "1234 street",
    //     "city": "Portland",
    //     "state": "Oregon",
    //     "zip": "12345",
    //     "phone": "555-555-5555",
    //     "email": "test@email.com",
    //     "profession": "Test Profession",
    //     "partnerProfession": "Test Partner Profession"
    //   }, 
    //   "questions" : [
    //     { "question" : "Have you ever owned a cavalier or currently have one now? If not, do you know of any cavaliers?",
    //       "response" : "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
    //     } 
    //   ], 
    //   "logo": logo
    // }

    //const template = $("#test-handlebars").html()
    //if(template != null) {
      //const output = Mustache.render(template, context)
      //console.log($.html())
      //console.log($("#test-handlebars").html())

      //$("#test-handlebars").replaceWith(output)

      //const newTemplate = $("#test-handlebars-finished").html()
      //console.log(newTemplate)

      const browser = await puppeteer.launch({headless: true})
      const page = await browser.newPage()

      //const html = await `<style> ${readFileSync('src/lib/template.css', 'utf-8')} </style> ${res}`
      await page.setContent(res, { waitUntil: "networkidle2"})
      await page.emulateMediaType('screen')

      // console.log(html)

      const pdf = await page.pdf({
        format: 'a4',
        printBackground: true,
        preferCSSPageSize: true,
        displayHeaderFooter: false,
        margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
        path: './template-html.pdf'
      })

      //await writeFileSync(pdf, 'template-html.pdf')
      
      //console.log(newTemplate)
      await browser.close();
    
    //}
    

    //console.log(data.toString())
  // } catch (error) {
  //   console.error(error)
  //}

  
  
}




export { testPost }


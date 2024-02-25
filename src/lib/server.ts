'use server'
import { Template, BLANK_PDF } from '@pdfme/common';
import { generate } from '@pdfme/generator';
import { readFileSync, writeFileSync } from 'fs';
import { promises as fs} from 'fs';
import * as cheerio from 'cheerio';
import Mustache from 'mustache'
import jsPDF from 'jspdf';
import puppeteer from 'puppeteer';

const testPost = async (formData: FormData) => {
  const { title } = Object.fromEntries(formData)

  try {
    const s = await fs.readFile('src/lib/template-html.html')
    const $ =  cheerio.load(s)
    const context = { 'test': title}

    const template = $("#test-handlebars").html()
    if(template != null) {
      const output = Mustache.render(template, context)
      $('#test-handlebars').replaceWith(output)

      const newTemplate = $("#test-handlebars-finished").html()
      //console.log(newTemplate)

      const browser = await puppeteer.launch({headless: true})
      const page = await browser.newPage()

      const html = await `<style> ${readFileSync('src/lib/template-html.css', 'utf-8')} </style> ${newTemplate}`
      await page.setContent(html, { waitUntil: "domcontentloaded"})

      console.log(html)

      const pdf = await page.pdf({
        format: 'a4',
        printBackground: false,
        preferCSSPageSize: true,
        displayHeaderFooter: false,
        path: './template-html.pdf'
      })

      //await writeFileSync(pdf, 'template-html.pdf')
      
      //console.log(newTemplate)
    
    }
    

    //console.log(data.toString())
  } catch (error) {
    console.error(error)
  }
  
}

export { testPost }


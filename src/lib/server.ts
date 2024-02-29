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
import ejs from "ejs"
import path from 'path';

const ejsOptions = {
  async: true,
  views: "src/lib/templates",

}

const testPost = async (formData: FormData) => {
  const { title } = Object.fromEntries(formData)

  const eta = new Eta({views: "src/lib/templates", defaultExtension: '.html' })
  

  const context = {
    "profile": [
      { "question": "Today's date: ", "response": "1/1/1990"},
      { "question": "First and Last name: ", "response": "John Doe"}, 
      { "question": "Your birthdate: ", "response": "1/1/1990" },
      { "question": "Street address: ", "response": "1234 street"},
      { "question": "City: ", "response": "Portland" },
      { "question": "State: ", "response": "Oregon" },
      { "question": "Zipcode: ", "response": "12345" },
      { "question": "Phone #:", "response": "555-555-5555" },
      { "question": "E-mail address: ", "response": "test@email.com" },
      { "question": "Profession: ", "response": "Test Profession" },
      { "question": "Your partners profession: ", "response": "Test Partner Profession" }
    ], 
    "questions": [
      { 
        "question" : "Have you ever owned a cavalier or currently have one now? If not, do you know of any cavaliers?",
        "response" : "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      },
      {
        "question": "Have you owned and/or raised a puppy before? If so, please tell me about your past or current dog(s) or any other pet you have owned? If not, please discuss with me what your plans to train a young puppy and know what to expect. If you haven't owned or raised a puppy before I'd be happy to help.", 
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      },
      {
        "question": "Who will be the primary caregiver?", 
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      },
      {
        "question": "What do you expect from your breeder?", 
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      }, 
      {
        "question": "What kind of property do you reside in and since when have you resided there?", 
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      }, 
      {
        "question": "If you are renting can you show proof of permission from owner?", 
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      },
      {
        "question": "Do you have a garden? Is it properly fenced? (If you don't have a yard, that's fine too!)",
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      },
      {
        "question": "How long daily will the Cavalier be left alone at home?", 
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      }, 
      {
        "question": "How many adults and kids are in the household and what are kids ages?",
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      },
      {
        "question": "Do they all agree to have a cavalier?",
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      }, 
      {
        "question": "Explain your home schedules and routines:",
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      }, 
      {
        "question": "On holidays, how are you planning to care for your Cavalier? *<a href='#boarding'>[1]</a>",
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      },
      {
        "question": "Have you ever returned a pet to the breeder, given a pet away, or taken to a shelter? If so, please explain.",
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      },
      {
        "question": "Who will be your permanent veterinarian? (You will need to take the puppy to one in the first 48 hours you bring the puppy home).",
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      }, 
      {
        "question": "How would you manage if there is a behavior problem with your puppy?",
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      }, 
      {
        "question": "What do you expect from your companion dog?", 
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      }, 
      {
        "question": "Are you planning to take your puppy to training classes and give much of your time into training your new puppy? What are your plans to train your Cavalier?",
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      },
      {
        "question": "Do you understand that a Cavalier King Charles Spaniel is a companion dog and is to be kept as primarily indoor dogs and are not fit as outdoor guard dogs?",
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      },
      {
        "question": "Are you willing to pay the higher cost for a good-quality food for your cavalier? (This is essential to keep this specific breed healthy and live a longer life).",
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      },
      {
        "question": "Pet dogs are not allowed to breed. Does this cause a problem?",
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      },
      {
        "question": "Do you understand that puppies from my program will be on a spay/neuter contract and sold with a limited AKC registration? *<a href='#akc'>[2]</a>",
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      },
      {
        "question": "Please note here anything else you want to share that hasn't been covered already:",
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      }
    ], 
    "preferences": {
      "gender": "m",
      "color": ["ruby", "bnt"]
    }
      
        
  }

  const res = await eta.renderAsync("./index", context)

  //const res =  ejs.renderFile('layout', context)

  
  await fs.writeFile('src/lib/test.html', res, 'utf-8')
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


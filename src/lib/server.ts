'use server'
import { Template, BLANK_PDF } from '@pdfme/common';
import { generate } from '@pdfme/generator';
import { writeFileSync } from 'fs';

const testPost = async (formData: FormData) => {
  const { title } = Object.fromEntries(formData)
   
  console.log(`Title ${title}`)

  // Define font files
  const template: Template = {
    basePdf: BLANK_PDF,
    schemas: [
      {
        a: {
          type: 'text',
          position: { x: 0, y: 0 },
          width: 10,
          height: 10,
        },
        b: {
          type: 'text',
          position: { x: 10, y: 10 },
          width: 10,
          height: 10,
        },
        c: {
          type: 'text',
          position: { x: 20, y: 20 },
          width: 10,
          height: 10,
        },
      },
    ],
  };

  const inputs = [{ a: 'a1', b: 'b1', c: 'c1' }];

  const pdfResult = await generate({ template, inputs })
  
  writeFileSync('src/lib/test.pdf', pdfResult)
  
}

export { testPost }


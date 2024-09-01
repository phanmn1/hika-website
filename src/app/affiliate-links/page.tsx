"use client"
import { AffiliateLink, AffiliateGrouping } from "../types/AffiliateTypes"
import { oleo } from "../global/fonts"
import { Accordion, AccordionBody, AccordionHeader } from "@material-tailwind/react"
import { useState } from "react"
import AffiliateLinkNoGroup from "../components/AffiliateLinkNoGroup"
import AffiliateLinkGroup from "../components/AffiliateLinkGroup"
/* Food Treats Data */
const generalTreats: AffiliateLink[] = [
  { 
    name: 'Current Puppy food (feed til about 10/12 months:',
    links: [
      { url: 'https://amzn.to/45NulbF' }
    ],
    displayType: 'NONE'
  }, 
  {
    name: 'Adult Food:', 
    links: [
      { url: 'https://amzn.to/45NulbF' },
      { url: 'https://amzn.to/45NulbF'}
    ],
    displayType: "OR"
  }, 
  {
    name: 'Most cost-effective for volume + easy on digestion:', 
    links: [
      { url: 'https://www.costco.com/kirkland-signature-adult-formula-lamb%2C-rice-and-vegetable-dog-food-40-lb..product.100334974.html'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Other recommended company (Open Farm:', 
    links: [
      { url: 'https://a.co/d/0AYyMeo '}
    ], 
    displayType: "NONE"
  }
]

const toppers: AffiliateGrouping = {
  groupName: 'Toppers', 
  affiliateLinks: [
    { 
      name: 'Orijen freeze-dried:',
      links: [
        { url: 'https://amzn.to/4cFfLVQ'}
      ], 
      displayType: "NONE"
    }, 
    {
      name: 'Instinct freeze-dried',
      links: [
        { url: 'https://amzn.to/3WK8sHB'}
      ], 
      displayType: "NONE"
    }
  ]
}

export default function Affiliates() {
  const [openFood, setOpenFood] = useState(false)
  console.log(openFood)
  //const handleOpen = <T,>(x: T) => x


  return (
    <div className="mx-5 px-2 py-5">
      <div className={`my-2 title-shadow text-sand text-3xl ${oleo.className}`}>My Favorite Products</div>
      <div>Disclosure: As an Amazon Associate I earn from qualifiying purchases</div>
      <Accordion open={openFood}>
        <AccordionHeader onClick={() => setOpenFood(!openFood)}>Food/Treats</AccordionHeader>
        <AccordionBody>
          <AffiliateLinkNoGroup links={generalTreats}/>
          <AffiliateLinkGroup links={toppers}/>
        </AccordionBody>

      </Accordion>

    </div>
  )
}
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
        { url: 'https://www.costco.com/kirkland-signature-adult-formula-lamb%2C-rice-and-vegetable-dog-food-40-lb..product.100334974.html'}
      ], 
      displayType: "NONE"
    }, 
    {
      name: 'Instinct freeze-dried',
      links: [
        { url: 'https://amzn.to/3WK8sHB'}
      ], 
      displayType: "NONE"
    }, 
    {
      name: 'Ziwi Peak Lamb',
      links: [
        { url: 'https://amzn.to/3K0s7M1'}
      ],
      displayType: "NONE"
    }, 
    {
      name: "Stella & Chewy's Magical Dinner Dust",
      links: [
        { url: 'https://amzn.to/464Vozo'}
      ],
      displayType: "NONE"
    }, 
    {
      name: "Dr. Harvey's Miracle Mix",
      links: [
        { url: 'https://amzn.to/4f7KhJV'}
      ], 
      displayType: "NONE"
    }
  ]
}

const treats: AffiliateGrouping = {
  groupName: "Treats",
  affiliateLinks: [
    {
      name: 'Belly Rub Kitchen',
      links: [
        { url: 'https://www.bellyrubkitchen.com'}
      ],
      displayType: "NONE"
    }, 
    {
      name: 'Goat milk cookies', 
      links: [
        { url: "https://a.co/d/g010qwX"}
      ], 
      displayType: "NONE"
    }, 
    { 
      name: 'Lamb & liver jerky from NZ', 
      links: [
        { url: 'https://a.co/d/1N0BRL6'}
      ], 
      displayType: "NONE"
    }, 
    {
      name: 'Freeze-dried quail egg yolks', 
      links: [
        { url: 'https://a.co/d/cTAoPss'}
      ], 
      displayType: "NONE"
    }, 
    {
      name: 'Blueberry cobler',
      links: [
        { url: 'https://a.co/d/fZrUmjT'}
      ], 
      displayType: "NONE"
    }, 
    { 
      name: 'Green-lipped mussels',
      links: [ 
        { url: 'https://amzn.to/4cmO9Fk'}
      ], 
      displayType: "NONE"
    }, 
    { 
      name: "Goat milk", 
      links: [
        { url: 'https://amzn.to/3yisxe3'}
      ], 
      displayType: "NONE"
    }
  ]
}

const puppyChews: AffiliateGrouping = { 
  groupName: "Puppy Chews",
  affiliateLinks: [
    { 
      name: 'NatureGnaws Small Bully Sticks',
      links: [
        { url: 'https://amzn.to/3UMdosY'}
      ], 
      displayType: 'NONE'
    }, 
    { 
      name: "Nothin’ to Hide Collagen Sticks",
      links: [
        { url: 'https://amzn.to/4bNKAqR'}
      ], 
      displayType: "NONE"
    }, 
    {
      name: "EcoKing Yak Chews", 
      links: [
        { url: 'https://amzn.to/3LpT10t'}
      ], 
      displayType: "NONE"
    },
    { 
      name: "Lamb Trachea",
      links: [
        { url: 'https://amzn.to/4bEApo8'}
      ],
      displayType: "NONE"
    }, 
    { 
      name: "Lamb Green Tripe", 
      links: [
        { url: 'https://amzn.to/4d5kkJp'}
      ], 
      displayType: "NONE"
    }, 
    {
      name: "Lamb Ears",
      links: [
        { url:'https://amzn.to/4d1wQtd'}
      ], 
      displayType: "NONE"
    }
  ]
}

const suppliments: AffiliateGrouping = {
  groupName: 'Suppliments', 
  affiliateLinks: [
    {
      name: "Salmon Oil", 
      links: [
        { url: 'https://amzn.to/3WyuFIt'}
      ], 
      displayType: "NONE"
    }, 
    { 
      name: "Probiotics (Add to food to promote good gut health)",
      links: [
        { url: 'https://amzn.to/3UVKOWg'}
      ], 
      displayType: "NONE"
    }, 
    { 
      name: "Pumpkin powder",
      links: [
        { url: 'https://a.co/d/asFYltM'}
      ], 
      displayType: "NONE"
    }, 
    { 
      name: "Cardio support", 
      links: [
        { url: 'https://a.co/d/8uysm9E'}
      ], 
      displayType: "NONE"
    }, 
    { 
      name: "10in1 multi-vitamin", 
      links: [
        { url: 'https://a.co/d/batpsfc'}
      ], 
      displayType: "NONE"
    }, 
    {
      name: "Joint Powder",
      links: [
        { url: 'https://a.co/d/bsNHTAd'}
      ], 
      displayType: "NONE"
    }
  ]
}


const miscFoodItems: AffiliateGrouping = {
  groupName: "Miscellaneous food items", 
  affiliateLinks: [
    {
      name: 'Zesty Paws Pill Wrap',
      links: [
        { url: 'https://amzn.to/3y63ivC'}
      ], 
      displayType: "NONE"
    }, 
    { 
      name: "Safety holder for chews",
      links: [
        { url: 'https://amzn.to/3UPWXf5'}
      ], 
      displayType: "NONE"
    }, 
    {
      name: 'Water bowl for Cavaliers', 
      links: [
        { url: "https://amzn.to/3zkYseu"}
      ], 
      displayType: "NONE"
    }, 
    { 
      name: 'Dog food bowl',
      links: [
        { url: 'https://amzn.to/3L3HCDc'}, 
        { url: 'https://amzn.to/3xAwz1r'}
      ], 
      displayType: "AND"
    }, 
    { 
      name: "Elevated dog bowl",
      links: [
        { url: 'https://a.co/d/bmGdkGR'}, 
        { url: 'https://amzn.to/3W37UMc'}
      ], 
      displayType: "AND"
    },
    {
      name: 'Dog Recipe book', 
      links: [
        { url: 'https://a.co/d/a9VDbDA'}
      ], 
      displayType: "NONE"
    }
  ]
}

const dogPuzzles: AffiliateGrouping = {
  groupName: "Dog Puzles", 
  affiliateLinks: [
    { 
      name: 'Lvl1-3 puzzle', 
      links: [
        { url: 'https://a.co/d/8wMxwx4'}
      ],
      displayType: "NONE"
    },
    { 
      name: 'Lvl2 puzzle',
      links: [
        { url: "https://a.co/d/9c2UCY3"}
      ], 
      displayType: "NONE"
    }, 
    { 
      name: "Lvl3in1 puzzle", 
      links: [
        { url: 'https://a.co/d/9c2UCY3'}
      ], 
      displayType: "NONE"
    }, 
    { 
      name: 'Lvl3 puzzle',
      links: [
        { url: 'https://a.co/d/1zCHn3N'}
      ], 
      displayType: "NONE"
    }, 
    { 
      name: 'Lvl4 puzzle',
      links: [
        { url: 'https://a.co/d/gh1JZKF'}
      ], 
      displayType: "NONE"
    }, 
    { 
      name: "Treat balls", 
      links: [
        { url: 'https://amzn.to/3zx91eg'}
      ], 
      displayType: "NONE"
    }, 
    {
      name: "Treat ball WOOF starter pack", 
      links: [
        { url: 'https://a.co/d/bmShF6P'}
      ], 
      displayType: "NONE"
    }, 
    {
      name: "Snuffle mat",
      links: [
        { url: 'https://amzn.to/3W1vaub'}, 
        { url: 'https://amzn.to/3wVB1HB'}
      ], 
      displayType: "AND"
    }, 
    { 
      name: 'Slow feeder for treats', 
      links: [
        { url: 'https://amzn.to/4cIeVrn'}
      ], 
      displayType: "AND"
    }, 
    {
      name: 'Treat ball dispenser', 
      links: [
        { url: 'https://amzn.to/3RKxQd9'}, 
        { url: 'https://a.co/d/h156h2M'}
      ], 
      displayType: "AND"
    },
    { 
      name: "Puzzle value-pack", 
      links: [
        { url: 'https://a.co/d/iOoJkfn'}
      ], 
      displayType: "NONE"
    }
  ]
}

export default function Affiliates() {
  const [openFood, setOpenFood] = useState(false)
  const [openEnrichment, setOpenEnrichment] = useState(false)
  const [openGrooming, setOpenGrooming] = useState(false)
  const [openBeds, setOpenBeds] = useState(false)
  const [openOutdoor, setOpenOutdoor] = useState(false)
  const [openPotty, setOpenPotty] = useState(false)
  const [openOthers, setOpenOthers] = useState(false)

  //console.log(openFood)
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
      <Accordion open={openEnrichment}>
        <AccordionHeader onClick={() => setOpenEnrichment(!openEnrichment)}>Enrichment</AccordionHeader>
        <AccordionBody></AccordionBody>
      </Accordion>


    </div>
  )
}
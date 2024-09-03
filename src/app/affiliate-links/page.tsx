"use client"
import { AffiliateLink, AffiliateGrouping } from "../types/AffiliateTypes"
import Image from "next/image"
import { oleo } from "../global/fonts"
import { Accordion, AccordionBody, AccordionHeader } from "@material-tailwind/react"
import { useState } from "react"
import AffiliateLinkNoGroup from "../components/AffiliateLinkNoGroup"
import AffiliateLinkGroup from "../components/AffiliateLinkGroup"
import MinusIcon from "../../../public/svg/minus-svgrepo-com.svg"
import PlusIcon from "../../../public/svg/plus-svgrepo-com.svg"
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

const toys: AffiliateGrouping = { 
  groupName: 'Toys', 
  affiliateLinks: [
    { 
      name: 'Squeeky Toys', 
      links: [
        { url: 'https://amzn.to/3wvqqmB'}, 
        { url: 'https://amzn.to/3QCTVcY'}
      ], 
      displayType: "AND"
    }, 
    {
      name: 'Plush hide toy', 
      links: [
        { url: 'https://a.co/d/025YrWwG'}
      ], 
      displayType: 'NONE'
    }
  ]
}

const grooming: AffiliateLink[] = [
  { 
    name: "Dog toothpaste & toothbrush", 
    links: [
      { url: 'https://amzn.to/4bBdP0b'}
    ], 
    displayType: "NONE"
  }, 
  { 
    name: "Toothpaste",
    links: [
      { url: 'https://amzn.to/3Lr9MZ4'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Puppy Shampoo', 
    links: [
      { url: 'https://amzn.to/4bIxLOF'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Dog Shampoo & Conditioner', 
    links: [
      { url: 'https://amzn.to/3zNJNZp'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Dog Shampoo', 
    links: [
      { url: 'https://amzn.to/464TzSW'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Face Shampoo', 
    links: [
      { url: 'https://amzn.to/3xWiYSg'}
    ], 
    displayType: "NONE"
  }, 
  { 
    name: 'Pet Grooming Gloves', 
    links: [
      { url: 'https://amzn.to/4f20FM5'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Tear stain remover', 
    links: [
      { url: 'https://amzn.to/3W2PhXH'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Dog brush', 
    links: [
      { url: 'https://www.petco.com/shop/en/petcostore/product/well-and-good-black-cushion-slicker-dog-brush'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Detangling Spray with brush', 
    links: [
      { url: 'https://amzn.to/4bEyfF2'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Detangling spray alone', 
    links: [
      { url: 'https://amzn.to/3W8loVI'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Ear cleaner', 
    links: [
      { url: 'https://amzn.to/4dPCyPZ'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Nail cutter for puppy (says for cats but perfect for pups too)', 
    links: [
      { url: 'https://amzn.to/4f4eg5y'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Nail cutter for adult dog', 
    links: [
      { url: 'https://amzn.to/4f7mEBw'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Nail buffing/shaving between paw pads', 
    links: [
      { url: 'https://a.co/d/g1T3SQ3'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Paw balm', 
    links: [
      { url: 'https://amzn.to/3Wo99pt'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Grooming table', 
    links: [
      { url: 'https://amzn.to/4f7HkJl'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Collapsible Bath Tub', 
    links: [
      { url: 'https://amzn.to/3zGqRfd'}
    ], 
    displayType: "NONE"
  }
]

const beds: AffiliateLink[] = [
  {
    name: 'Crate',
    links: [
      { url: 'https://amzn.to/3W66Q9t'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Bed for crate', 
    links: [
      { url: 'https://amzn.to/3L7Oek0'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Puppy blanket', 
    links: [
      { url: 'https://amzn.to/3XQdlQd'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Bed for lounging', 
    links: [
      { url: 'https://amzn.to/3zlfCZb'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Squishmallow bed', 
    links: [
      { url: 'https://amzn.to/3L55czz'}, 
      { url: 'https://amzn.to/4cJUg6u'}
    ], 
    displayType: "AND"
  }, 
  {
    name: 'Machine-washable carpet', 
    links: [
      { url: 'https://amzn.to/4bkXWKN'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Washable Puppy Pad for playpen', 
    links: [
      { url: 'https://amzn.to/3zHtu05'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Playpen', 
    links: [
      { url: 'https://amzn.to/3YnjkfF'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Flea/Tick prevention for bedding,carpets', 
    links: [
      { url: 'https://amzn.to/3WLdeEZ'}
    ], 
    displayType: "NONE"
  }
]

const outdoor: AffiliateLink[] = [
  { 
    name: 'Collar', 
    links: [
      { url: 'https://amzn.to/3zrCWoj'}
    ], 
    displayType: 'NONE'
  }, 
  {
    name: 'Leash', 
    links: [
      { url: 'https://amzn.to/3W2AkpD'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'All-weather leash', 
    links: [
      { url: 'https://amzn.to/4d2Mc0M'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Slip lead', 
    links: [
      { url: 'https://amzn.to/4eDuLpb'}, 
      { url: 'https://amzn.to/45KE42u'}
    ], 
    displayType: "AND"
  }, 
  {
    name: 'Long Lead', 
    links: [
      { url: 'https://amzn.to/3RRA8Hw'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Harness (measure first)', 
    links: [
      { url: 'https://amzn.to/3XHbkWb'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Stylish girl harness', 
    links: [
      { url: 'https://a.co/d/08sEC79y'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Puppy stroller', 
    links: [
      { url: 'https://a.co/d/0bcKd1FQ'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Car seatbelt to use with harness', 
    links: [
      { url: 'https://amzn.to/45L7g9q'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Car seat cover', 
    links: [
      { url: 'https://amzn.to/4cKQUQD'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Sling bag for your pup', 
    links: [
      { url: 'https://amzn.to/3UZPSJb'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'First aid kit for furbabies', 
    links: [
      { url: 'https://amzn.to/4e5AXGe'}
    ], 
    displayType: "NONE"
  }
]

const potty: AffiliateLink[] = [
  { 
    name: 'Puppy pads to fit pad cover', 
    links: [
      { url: 'https://a.co/d/0dJx4BYC'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Pad cover',
    links: [
      { url: 'https://a.co/d/0fLGlsOf'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Poop bags', 
    links: [
      { url: 'https://amzn.to/4bd72tI'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Puppy wipes', 
    links: [
      { url: 'https://amzn.to/44CdFTL'}
    ], 
    displayType: "NONE"
  }
]

const cleaning: AffiliateLink[] = [
  {
    name: 'Folex', 
    links: [
      { url: 'https://amzn.to/4bKlita'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'REScue pet wipes', 
    links: [
      { url: 'https://amzn.to/3y24bWb'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Pet odor elimiator', 
    links: [
      { url: 'https://amzn.to/3W87ZNL'}
    ], 
    displayType: "NONE"
  }
]

const others: AffiliateLink[] = [
  {
    name: 'Pet cam for when you’re away from home', 
    links: [
      { url: 'https://amzn.to/453Wx9K'}
    ], 
    displayType: "NONE"
  }, 
  {
    name: 'Cavalier hat', 
    links: [
      { url: 'https://amzn.to/3Wnm4Ib'}
    ], 
    displayType: "NONE"
  }
]

function Icon ({ openStatus} : { openStatus: boolean}) {
  if(openStatus === true) {
    return (<Image
      src={MinusIcon}
      width={32}
      height={32}
      alt="Minus Icon"
      className="transition duration-150"
      />)
  } else {
    return (<Image
      src={PlusIcon}
      width={32}
      height={32}
      alt="Plus Icon"
      className="transition duration-150 rotate-90"
      />)
  }
  
}

export default function Affiliates() {
  const [openFood, setOpenFood] = useState(false)
  const [openEnrichment, setOpenEnrichment] = useState(false)
  const [openGrooming, setOpenGrooming] = useState(false)
  const [openBeds, setOpenBeds] = useState(false)
  const [openOutdoor, setOpenOutdoor] = useState(false)
  const [openPotty, setOpenPotty] = useState(false)
  const [openCleaning, setOpenCleaning] = useState(false)
  const [openOthers, setOpenOthers] = useState(false)

  //console.log(openFood)
  //const handleOpen = <T,>(x: T) => x


  return (
    <div className="mx-5 px-2 py-5">
      <div className={`my-2 title-shadow text-sand text-3xl ${oleo.className}`}>My Favorite Products</div>
      <div>Disclosure: As an Amazon Associate I earn from qualifiying purchases</div>
      <Accordion open={openFood} icon={<Icon openStatus={openFood} />}>
        <AccordionHeader onClick={() => setOpenFood(!openFood)}>FOOD/TREATS</AccordionHeader>
        <AccordionBody>
          <AffiliateLinkNoGroup links={generalTreats}/>
          <AffiliateLinkGroup links={toppers}/>
          <AffiliateLinkGroup links={treats}/>
          <AffiliateLinkGroup links={puppyChews}/>
          <AffiliateLinkGroup links={suppliments}/>
          <AffiliateLinkGroup links={miscFoodItems}/>
        </AccordionBody>
      </Accordion>
      <Accordion open={openEnrichment} icon={<Icon openStatus={openEnrichment} />}>
        <AccordionHeader onClick={() => setOpenEnrichment(!openEnrichment)}>ENRICHMENT</AccordionHeader>
        <AccordionBody>
          <AffiliateLinkGroup links={dogPuzzles}/>
          <AffiliateLinkGroup links={toys}/>
        </AccordionBody>
      </Accordion>
      <Accordion open={openGrooming} icon={<Icon openStatus={openGrooming} />}>
        <AccordionHeader onClick={() => setOpenGrooming(!openGrooming)}>GROOMING/CARE</AccordionHeader>
        <AccordionBody>
          <AffiliateLinkNoGroup links={grooming}/>
        </AccordionBody>
      </Accordion>
      <Accordion open={openBeds} icon={<Icon openStatus={openFood} />}>
        <AccordionHeader onClick={() => setOpenBeds(!openBeds)}>BEDS/CARPET</AccordionHeader>
        <AccordionBody>
          <AffiliateLinkNoGroup links={beds}/>
        </AccordionBody>
      </Accordion>
      <Accordion open={openOutdoor} icon={<Icon openStatus={openOutdoor} />}>
        <AccordionHeader onClick={() => setOpenOutdoor(!openOutdoor)}>OUTDOOR GEAR/TOOLS</AccordionHeader>
        <AccordionBody>
          <AffiliateLinkNoGroup links={outdoor}/>
        </AccordionBody>
      </Accordion>
      <Accordion open={openPotty} icon={<Icon openStatus={openPotty} />}>
        <AccordionHeader onClick={() => setOpenPotty(!openPotty)}>POTTY</AccordionHeader>
        <AccordionBody>
          <AffiliateLinkNoGroup links={potty}/>
        </AccordionBody>
      </Accordion>
      <Accordion open={openCleaning} icon={<Icon openStatus={openCleaning}/>}>
        <AccordionHeader onClick={() => setOpenCleaning(!openCleaning)}>CLEANING</AccordionHeader>
        <AccordionBody>
          <AffiliateLinkNoGroup links={cleaning}/>
        </AccordionBody>
      </Accordion>
      <Accordion open={openOthers} icon={<Icon openStatus={openOthers}/>}>
        <AccordionHeader onClick={() => setOpenOthers(!openOthers)}>OTHERS</AccordionHeader>
        <AccordionBody>
          <AffiliateLinkNoGroup links={others}/>
        </AccordionBody>
      </Accordion>



    </div>
  )
}
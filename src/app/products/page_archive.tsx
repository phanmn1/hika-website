import AffiliateLinkCategory from "../components/AffiliateLinkCategory"
import ResourceSection from "../components/ResourceSection"
import { oleo } from "../global/fonts"
import { ResourceLinkItem } from "../types/Resource"
import { accordion } from "@material-tailwind/react"

const affiliate_links_1: ResourceLinkItem[] = [
  {
    sectionTitle: 'Crate',
    links: [
      { url: 'https://amzn.to/3W66Q9t'}
    ]
  }, 
  {
    sectionTitle: 'Bed for crate', 
    links: [
      { url: 'https://amzn.to/3L7Oek0'}
    ]
  },
  {
    sectionTitle: 'Puppy blanket',
    links: [
      { url: 'https://amzn.to/3XQdlQd'}
    ]
  }, 
  {
    sectionTitle: 'Bed for lounging',
    links: [
      { url: 'https://amzn.to/3zlfCZb'}
    ]
  }, 
  {
    sectionTitle: 'Squishmallow bed',
    links: [
      { url: 'https://amzn.to/3L55czz'}, 
      { url: 'https://amzn.to/4cJUg6u'}
    ]
  }, 
  {
    sectionTitle: 'Machine-washable carpet',
    links: [
      { url: 'https://amzn.to/4bkXWKN'}
    ]
  }, 
  {
    sectionTitle: 'Water bowl for Cavaliers',
    links: [
      { url: 'https://amzn.to/3zkYseu'}
    ]
  }, 
  {
    sectionTitle: 'Dog food bowl',
    links: [
      { url: 'https://amzn.to/3L3HCDc'}, 
      { url: 'https://amzn.to/3xAwz1r'}
    ]
  }, 
  {
    sectionTitle: 'Elevated dog bowls', 
    links: [
      { url: 'https://amzn.to/3W37UMc'}
    ]
  } 
]

const affiliate_links_2: ResourceLinkItem[] = [
  {
    sectionTitle: 'Collar',
    links: [
      { url: 'https://amzn.to/3zrCWoj' }
    ]
  },
  {
    sectionTitle: 'Lead',
    links: [
      { url: 'https://amzn.to/3W2AkpD' }
    ]
  }, 
  {
    sectionTitle: 'Slip lead', 
    links: [
      { url: 'https://amzn.to/4eDuLpb'}, 
      { url: 'https://amzn.to/45KE42u'}
    ]
  }, 
  {
    sectionTitle: 'Long lead', 
    links: [
      { url: 'https://amzn.to/3RRA8Hw'}
    ]
  }
]

const affiliate_links_3: ResourceLinkItem[] = [
  {
    sectionTitle: 'Stylish girl harness',
    links: [
      { url: 'https://amzn.to/3XHbkWb'}
    ]
  },
  {
    sectionTitle: 'Puppy stroller',
    links: [
      { url: 'https://a.co/d/0bcKd1FQ'}
    ]
  },
  {
    sectionTitle: 'Car seatbelt to use with harness',
    links: [
      { url: 'https://amzn.to/45L7g9q'}
    ]
  },
  {
    sectionTitle: 'Car seat conver',
    links: [
      { url: 'https://amzn.to/4cKQUQD'}
    ]
  }
]

const affiliate_links_4: ResourceLinkItem[] = [
  {
    sectionTitle: 'More active',
    links: [
      { url: 'https://amzn.to/4aaMZe4'}
    ]
  },
  {
    sectionTitle: 'My favorite all-around recommended adult food',
    links: [
      { url: 'https://amzn.to/3wYJb1S'}
    ]
  }
]

const affiliate_links_5: ResourceLinkItem[] = [
  {
    sectionTitle: 'Toys',
    links: [
      { url: 'https://amzn.to/3wvqqmB'},
      { url: 'https://amzn.to/3QCTVcY'},
      { url: 'https://a.co/d/025YrWwG'},
      { url: 'https://amzn.to/3L3N4WG'}
    ]
  },
  {
    sectionTitle: 'Puppy pads to fit pad cover:',
    links: [
      { url: 'https://a.co/d/0dJx4BYC'}
    ]
  },
  {
    sectionTitle: 'Pad cover:',
    links: [
      { url: 'https://amzn.to/4bd72tI'}
    ]
  },
  {
    sectionTitle: 'Poop bags:',
    links: [
      { url: 'https://amzn.to/4bd72tI'}
    ]
  },
  {
    sectionTitle: 'Puppy wipes:',
    links: [
      { url: 'https://amzn.to/44CdFTL'}
    ]
  },
  {
    sectionTitle: 'Dog toothpaste & toothbrush', 
    links: [
      { url: 'https://amzn.to/4bBdP0b'}
    ]
  }, 
  {
    sectionTitle: 'Puppy shampoo', 
    links: [
      { url: 'https://amzn.to/4bIxLOF'}
    ]
  },
  {
    sectionTitle: 'Dog brush:',
    links: [
      { url: 'https://www.petco.com/shop/en/petcostore/product/well-and-good-black-cushion-slicker-dog-brush'}
    ]
  }, 
  {
    sectionTitle: 'Ear cleaner',
    links: [
      { url: 'https://amzn.to/4dPCyPZ'}
    ]
  }
]

const affiliate_links_6: ResourceLinkItem[] = [
  {
    sectionTitle: 'Puppy chews (never rawhide):',
    links: [
      { url: 'https://amzn.to/3WJl5mt'},
      { url: 'https://amzn.to/3UMdosY'},
      { url: 'https://amzn.to/4bNKAqR'},
    ]
  },
  {
    sectionTitle: 'Probiotics to add to food for promising good gut health:',
    links: [
      { url: 'https://amzn.to/3UVKOWg'}
    ]
  }, 
  {
    sectionTitle: "Safety holder for chews (so puppy doesn't choke on small piece:", 
    links: [
      { url: 'https://amzn.to/3UPWXf5'}
    ]
  }, 
  {
    sectionTitle: 'Flea/Tick prevention for bedding, carpets:', 
    links: [
      { url: 'https://amzn.to/3WLdeEZ'}
    ]
  }, 
  {
    sectionTitle: 'Sling bag for your pup:',
    links: [
      { url: 'https://amzn.to/3UZPSJb'}
    ]
  }, 
  {
    sectionTitle: "Pet cam for when you're away from home:",
    links: [
      { url: 'https://amzn.to/453Wx9K'}
    ]
  }, 
  {
    sectionTitle: "First aid kit for furbabies:", 
    links: [
      { url: 'https://amzn.to/4e5AXGe'}
    ]
  }, 
  {
    sectionTitle: "Dog Recipie book:",
    links: [
      { url: 'https://a.co/d/a9VDbDA'}
    ]
  }
]




export default function Affiliates() {
  return (
    <div className="mx-5 px-2 py-5">
      <div className={`my-2 title-shadow text-sand text-3xl ${oleo.className}`}>My Favorite Products</div>
      <div>Disclosure: As an Amazon Associate I earn from qualifiying purchases</div>
      {/* Affiliate Links 1 */}
        { affiliate_links_1.map((item, index) => {
          return <AffiliateLinkCategory key={`1-${index}`} {...item}/>
      })}

      {/* Affiliate link toys with notes */}
      <div className={`my-2 title-shadow text-sand text-3xl ${oleo.className}`}>Dog puzzles for food/treats/enrichment:</div>
      <div>
        <span className={`my-2 title-shadow text-sand ${oleo.className}`}>Treat balls: </span> <a href="https://amzn.to/3zx91eg" target="_blank" className="text-header hover:text-headerLight hover:font-bold break-words">https://amzn.to/3zx91eg</a>
      </div>
      <div>
        <span className={`my-2 title-shadow text-sand ${oleo.className}`}>Snuffle mat: </span>
        <a href="https://amzn.to/3W1vaub" target="_blank" className="text-header hover:text-headerLight hover:font-bold break-words">https://amzn.to/3W1vaub</a>
      </div>
      <div><a href="https://amzn.to/3wVB1HB" target="_blank" className="text-header hover:text-headerLight hover:font-bold break-words">https://amzn.to/3wVB1HB</a></div>
     
      {/* Affiliate Links 2 */}
      { affiliate_links_2.map((item, index) => {
        return <AffiliateLinkCategory key={`2-${index}`} {...item}/>
        })
      }

      {/* Or Clause 1 */}
      <div className={`my-2 title-shadow text-sand ${oleo.className}`}>Harness (measure first): </div>
      <div>
        <a href='https://amzn.to/3XMowcE' target="_blank" className="text-header hover:text-headerLight hover:font-bold break-words">https://amzn.to/3XMowcE</a>
      </div>
      <div>or</div>
       <div>
        <a href='https://amzn.to/3XHbkWb' target="_blank" className="text-header hover:text-headerLight hover:font-bold break-words">https://amzn.to/3XHbkWb</a>
      </div>

      {/* Affiliate Links 3 */}
      { affiliate_links_3.map((item, index) => {
        return <AffiliateLinkCategory key={`3-${index}`} {...item}/>
      })}

      {/* Puppy Food Section */}
      
      <div className={`my-2 title-shadow text-sand ${oleo.className}`}>Puppy food up to 10-12 months old</div>
      <div className={`my-2 title-shadow text-sand ${oleo.className}`}>Current food; start with this:</div>
      <div>
        <a href='https://amzn.to/45NulbF' target="_blank" className="text-header hover:text-headerLight hover:font-bold break-words">https://amzn.to/45NulbF</a>
      </div>
      <div className={`my-2 title-shadow text-sand ${oleo.className}`}>Other recommended food options: </div>
      <div>
        <a href='https://amzn.to/3wyeMYa' target="_blank" className="text-header hover:text-headerLight hover:font-bold break-words">https://amzn.to/3wyeMYa</a>
      </div>
       <div>
        <a href='https://openfarmpet.com/en-us/products/ancient-grains-puppy-pack/' target="_blank" className="text-header hover:text-headerLight hover:font-bold break-words">https://openfarmpet.com/en-us/products/ancient-grains-puppy-pack/</a>
      </div>

      {/* Adult Food Section */}
      <div className={`my-2 title-shadow text-sand ${oleo.className}`}>Switch to adult food from 10-12 months old depending on growth and activity: </div>
      <div className={`my-2 title-shadow text-sand ${oleo.className}`}>Less active & most cost effective for volume: </div>
      <div>
        <a href="https://www.costco.com/kirkland-signature-adult-formula-lamb%2C-rice-and-vegetable-dog-food-40-lb..product.100334974.html" target="_blank" className="text-header hover:text-headerLight hover:font-bold break-words">https://www.costco.com/kirkland-signature-adult-formula-lamb%2C-rice-and-vegetable-dog-food-40-lb..product.100334974.html</a>
      </div>
      <div>or</div>
      <div>
        <a href="https://www.petco.com/shop/en/petcostore/product/wholehearted-lamb-and-brown-rice-recipe-with-whole-grains-dry-dog-food" target="_blank" className="text-header hover:text-headerLight hover:font-bold break-words">https://www.petco.com/shop/en/petcostore/product/wholehearted-lamb-and-brown-rice-recipe-with-whole-grains-dry-dog-food</a>
      </div>
      <div>or</div>
      <div>
        <a href="https://openfarmpet.com/en-us/products/ancient-grain-food-for-small-breeds/#" target="_blank" className="text-header hover:text-headerLight hover:font-bold break-words">https://openfarmpet.com/en-us/products/ancient-grain-food-for-small-breeds/#</a>
      </div>
      {/* Affiliate Links 3 */}
      { affiliate_links_4.map((item, index) => {
        return <AffiliateLinkCategory key={`4-${index}`} {...item}/>
      })}   

      {/* Toppers */}
      <div className={`my-2 title-shadow text-sand ${oleo.className}`}>Toppers to add kibble or fully feed:</div>
      <div>
        <span className={`my-2 title-shadow text-sand ${oleo.className}`}>Orijen freeze-dried: </span>
        <a href="https://amzn.to/4cFfLVQ" target="_blank" className="text-header hover:text-headerLight hover:font-bold break-words">https://amzn.to/4cFfLVQ</a>
      </div>
      <div>
        <span className={`my-2 title-shadow text-sand ${oleo.className}`}>Instinct freze dried: </span>
        <a href="https://amzn.to/3WK8sHB" target="_blank" className="text-header hover:text-headerLight hover:font-bold break-words">https://amzn.to/3WK8sHB</a>
      </div>
      <div>
        <span className={`my-2 title-shadow text-sand ${oleo.className}`}>Ziwi Peak Lamb: </span>
        <a href="https://amzn.to/3K0s7M1" target="_blank" className="text-header hover:text-headerLight hover:font-bold break-words">https://amzn.to/3K0s7M1</a>
      </div>
      
      {/* Affiliate Links 5 */}
      { affiliate_links_5.map((item, index) => {
        return <AffiliateLinkCategory key={`5-${index}`} {...item}/>
      })}   
      <div>Grooming Table: Missing link?</div>
      <div className={`my-2 title-shadow text-sand ${oleo.className}`}>Treats:</div>
      <div>
        <span className={`my-2 title-shadow text-sand ${oleo.className}`}>Top favorite: </span>
        <a href="https://www.bellyrubkitchen.com" target="_blank" className="text-header hover:text-headerLight hover:font-bold break-words">https://www.bellyrubkitchen.com</a>
      </div>
      <div className={`my-2 title-shadow text-sand ${oleo.className}`}>Other favs:</div>
      <div>
        <span className={`my-2 title-shadow text-sand ${oleo.className}`}>Goats milk cookies: </span>
        <a href="https://a.co/d/g010qwX" target="_blank" className="text-header hover:text-headerLight hover:font-bold break-words">https://a.co/d/g010qwX</a>
      </div>
      <div>
        <span className={`my-2 title-shadow text-sand ${oleo.className}`}>Lamb & liver jerky from NZ: </span>
        <a href="https://a.co/d/1N0BRL6" target="_blank" className="text-header hover:text-headerLight hover:font-bold break-words">https://a.co/d/1N0BRL6</a>
      </div>
      <div>
        <span className={`my-2 title-shadow text-sand ${oleo.className}`}>Freeze dried quail egg yolks: </span>
        <a href="https://a.co/d/cTAoPss" target="_blank" className="text-header hover:text-headerLight hover:font-bold break-words">https://a.co/d/cTAoPss</a>
      </div>
      <div>
        <span className={`my-2 title-shadow text-sand ${oleo.className}`}>Blueberry cobbler </span>
        <a href="https://a.co/d/fZrUmjT" target="_blank" className="text-header hover:text-headerLight hover:font-bold break-words">https://a.co/d/fZrUmjT</a>
      </div>
      <div>
        <span className={`my-2 title-shadow text-sand ${oleo.className}`}>Green-lipped mussels: </span>
        <a href="https://amzn.to/4cmO9Fk" target="_blank" className="text-header hover:text-headerLight hover:font-bold break-words">https://amzn.to/4cmO9Fk</a>
      </div>
      <div>
        <span className={`my-2 title-shadow text-sand ${oleo.className}`}>Goat milk: </span>
        <a href="https://amzn.to/3yisxe3" target="_blank" className="text-header hover:text-headerLight hover:font-bold break-words">https://amzn.to/3yisxe3</a>
      </div>

      {/* Affiliate Links 6 */}
      { affiliate_links_6.map((item, index) => {
        return <AffiliateLinkCategory key={`6-${index}`} {...item}/>
      })}   
    </div>

  )
}

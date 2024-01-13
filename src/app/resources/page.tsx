import { Fragment } from "react"
import { oleo } from "../global/fonts"
import ResourceLinks from "../components/ResourceLinks"
import ResourceSection from "../components/ResourceSection"

const resources = [
  {
    header: 'For puppy parents who want to do it right:',
    sections: [
      {
        sectionTitle: 'The Ideal daily puppy-training routine:',
        links: [
          { url: 'https://zigzag.dog/en-us/blog/new-puppy/getting-your-puppy/ideal-puppy-training-routine/' }
        ]
      }, 
      {
        sectionTitle: 'How to prepare for bringing puppy home (free mini course):',
        links: [
          { url: 'https://view.flodesk.com/pages/63659f6548f459d2f682dc54' }
        ]
      }, 
      {
        sectionTitle: 'Questions to ask yourself before getting a dog:', 
        links: [ 
          { url: 'https://www.gooddog.com/learning-center/questions-to-ask-yourself-before-getting-a-dog'}
        ]
      }, 
      { 
        sectionTitle: 'What to consider financially when getting a dog:',
        links: [
          { url: 'https://www.gooddog.com/learning-center/what-to-consider-financially-when-getting-a-new-dog'}
        ]
      }, 
      {
        sectionTitle: 'Understanding costs for responsible breeding (Hawaii prices are 2-3xs more):',
        links: [
          { url: 'https://www.gooddog.com/learning-center/cost-of-a-puppy-from-a-responsible-breeder'}
        ]
      },
      {
        sectionTitle: 'When to spay/neuter your Cavalier:', 
        links: [
          { url: 'https://petkeen.com/how-soon-do-i-spay-or-neuter-a-cavalier-king-charles-spaniel/'}, 
          { url: 'https://www.frontiersin.org/articles/10.3389/fvets.2020.00388/full'}
        ]
      }, 
      {
        sectionTitle: 'Vaccinations in Cavaliers:', 
        links: [
          { url: 'https://ckcsc.org/vaccinations' }
        ]
      }, 
      {
        sectionTitle: 'Limited registration:', 
        links: [
          { url: 'https://www.akc.org/register/information/limited-registration/'}
        ]
      }, 
      {
        sectionTitle: 'Organizations:', 
        links: [
          { url: 'https://ckcsc.org/'}, 
          { url: 'https://www.akc.org/'}, 
          { url: 'https://www.ackcsc.org/index.php'}
        ]
      }
    ]
  }, 
  {
    header: 'Cavalier genetics to know about:',
    sections: [
      {
        sectionTitle: 'Muscular Dystrophy (MD):', 
        links: [
          { url: 'https://embarkvet.com/products/dog-health/health-conditions/muscular-dystrophy/'}
        ]
      }, 
      {
        sectionTitle: 'Episodic Falling Syndrome (EFS):', 
        links: [
          { url: 'https://embarkvet.com/products/dog-health/health-conditions/episodic-falling-syndrome/' }
        ]
      }, 
      {
        sectionTitle: 'Medium Chain Acyl-CoA Dehydrogenase Deficiency (MCADD):', 
        links: [
          { url: 'https://www.gensoldx.com/tests/medium-chain-acyl-coa-dehydrogenase-deficiency-mcadd/'}
        ]
      }, 
      {
        sectionTitle: 'Degenerative Myelopathy (DM):', 
        links: [
          { url: 'https://embarkvet.com/products/dog-health/health-conditions/degenerative-myelopathy-dm/'}
        ]
      }, 
      {
        sectionTitle: 'Curly Coat Dry Eye Syndrome (CKCSID):', 
        links: [
          { url: 'https://embarkvet.com/products/dog-health/health-conditions/congenital-keratoconjunctivitis-sicca-and-ichthyosiform-dermatosis-dry-eye-curly-coat-syndrome-ckcsid/'}, 
          { url: 'https://www.gensoldx.com/tests/dry-eye-curly-coat-syndrome-ckcsid/'}
        ]
      }
    ]
  }
]

export default function Resources() {
  return (
    <div className="mx-5">
    <div className="py-5">
      <div className={`py-3 text-3xl title-shadow text-sand ${oleo.className}`}>About the Cavalier King Charles Spaniel:</div>
      <div>
        <a href="https://images.akc.org/pdf/judges/CKCS.pdf" target="_blank" className="text-header hover:text-headerLight hover:font-bold ">https://images.akc.org/pdf/judges/CKCS.pdf</a>
      </div>
      <div>
        <a href="https://www.akc.org/dog-breeds/cavalier-king-charles-spaniel/" target="_blank" className="text-header hover:text-headerLight hover:font-bold">https://www.akc.org/dog-breeds/cavalier-king-charles-spaniel/</a>
      </div>
    </div>
    <div>
      { resources.map((resource, index) => {
          return (
            <Fragment key={index}>
              <div className={`my-5 text-3xl title-shadow text-sand ${oleo.className}`}>{resource.header}</div>
              <ResourceSection sections={resource.sections}/>
            </Fragment>)
          }
        )
      }
    </div>
    </div> 
  )
}
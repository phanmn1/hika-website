import { Fragment } from "react"
import { oleo, pt_serif } from "../global/fonts";
import { AffiliateGrouping } from "../types/AffiliateTypes";


export default function AffiliateLinkGroup(props: { links: AffiliateGrouping}) {
  return (
    <div className="mx-5">
      <div className={`text-sand text-3xl ${oleo.className}`}>{props.links.groupName}</div>
      { props.links.affiliateLinks.map((item, index) => {
        return (
          <div className="my-6" key={index}>
          <div className={`text-sand ${pt_serif.className} font-bold `}>{item.name}</div>
            <a href={item.links[0].url} target="_blank" className={`text-header hover:text-headerLight hover:font-bold break-words ${pt_serif.className}`}>{item.links[0].url}</a>
          </div>
        )
      })}
    </div>
  )
}
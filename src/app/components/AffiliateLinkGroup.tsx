import { Fragment } from "react"
import { oleo, pt_serif } from "../global/fonts";
import { AffiliateGrouping } from "../types/AffiliateTypes";
import { displayLinks } from "./AffiliateLinkNoGroup";

export default function AffiliateLinkGroup(props: { links: AffiliateGrouping}) {
  return (
    <div className="mx-5">
      <div className={`text-sand text-3xl ${oleo.className} text-center title-shadow`}>{props.links.groupName}</div>
      { props.links.affiliateLinks.map((item, index) => {
        return (
          <div className="my-6" key={index}>
          <div className={`text-sand ${pt_serif.className} font-bold `}>{item.name}</div>
            {displayLinks(item.displayType, item, index)}
          </div>
        )
      })}
    </div>
  )
}
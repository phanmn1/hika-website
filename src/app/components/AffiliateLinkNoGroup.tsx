import { Fragment } from "react";
import { oleo, pt_serif } from "../global/fonts";
import { AffiliateLink } from "../types/AffiliateTypes";
import parse from "html-react-parser"

export default function AffiliateLinkNoGroup(props: {links: AffiliateLink[]}) {
  return (
    <Fragment> 
      <div className="mx-5">
        { props.links.map((item, index) => {
            return (
              <div className="my-6" key={index}>
                <div className={`text-sand ${pt_serif.className} font-bold`}>{item.name}</div>
                {displayLinks(item.displayType, item, index)}
              </div>
            )
          }   
        )}
      </div>
    </Fragment>
  )
}

export const displayLinks = (displayType: string, item: AffiliateLink, index: number) => {
  let linkArray = null
  if(displayType === "OR") {
    linkArray = item.links.map((linkItem) => {
      return `<a href=${linkItem.url} target="_blank" className="text-header hover:text-headerLight hover:font-bold break-words">${linkItem.url}</a>`
    }).join("</br>Or</br>")
    return parse(linkArray)
  } 

  if (displayType === "AND") {
    linkArray = item.links.map((linkItem => {
      return `<a href=${linkItem.url} target="_blank" className="text-header hover:text-headerLight hover:font-bold break-words">${linkItem.url}</a>`
    })).join("<br/>")
    return parse(linkArray)
  }

  if(displayType === "NONE") {
    return (<a href={item.links[0].url} target="_blank" className="text-header hover:text-headerLight hover:font-bold break-words">{item.links[0].url}</a>)
  }
 
}


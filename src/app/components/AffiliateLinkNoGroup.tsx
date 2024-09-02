import { Fragment } from "react";
import { oleo } from "../global/fonts";
import { AffiliateLink } from "../types/AffiliateTypes";

export default function AffiliateLinkNoGroup(props: {links: AffiliateLink[]}) {
  return (
    <Fragment> 
      <div className="mx-5">
        { props.links.map((item, index) => {
            return (
              <div className="my-6" key={index}>
                <div className={`${oleo.className} text-sand text-xl`}>{item.name}</div>
                {displayLinks(item.displayType, item, index)}
              </div>
            )
          }   
        )}
      </div>
    </Fragment>
  )
}

const displayLinks = (displayType: string, item: AffiliateLink, index: number) => {
  if(displayType === "OR") {
    return (<div key={index}>
      <a href={item.links[0].url} target="_blank" className="text-header hover:text-headerLight hover:font-bold break-words">{item.links[0].url}</a><br/>
      Or<br/>
      <a href={item.links[1].url} target="_blank" className="text-header hover:text-headerLight hover:font-bold break-words">{item.links[1].url}</a>
    </div>)
  } 

  if(displayType === "NONE") {
    return (<a href={item.links[0].url} target="_blank" className="text-header hover:text-headerLight hover:font-bold break-words">{item.links[0].url}</a>)
  }
}


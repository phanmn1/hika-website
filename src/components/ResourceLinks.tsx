import { Fragment } from "react";
import { ResourceLinkItem } from "../types/Resource";

export default function ResourceLinks (props: ResourceLinkItem) {
  return (
    <div className="py-3">
      <div className="text-sand">{props.sectionTitle}</div>
      { props.links.map((link, index) => {
        return (
          <div key={index}><a href={link.url} target="_blank" className="text-header hover:text-headerLight hover:font-bold break-words">{link.url}</a></div>)
        })
      }
    </div> 
  )
}
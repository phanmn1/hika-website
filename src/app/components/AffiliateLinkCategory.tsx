import { Fragment } from 'react'
import { oleo } from "../global/fonts"
import { ResourceLinkItem } from "../types/Resource"

export default function AffiliateLinkCategory(props: ResourceLinkItem) {
  return (
    <Fragment>
        <div className={`my-2 title-shadow text-sand ${oleo.className}`}>{props.sectionTitle}</div>
        { props.links.map((link, index) => {
            return (<div key={index}><a href={link.url} target="_blank" className="text-header hover:text-headerLight hover:font-bold break-words">{link.url}</a></div>)
          })
        }
    </Fragment>
  )
}

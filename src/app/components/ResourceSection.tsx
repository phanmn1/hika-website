import { Fragment } from "react";
import { ResourceLinkItem, ResourceLinkSection } from "../types/Resource";
import ResourceLinks from "./ResourceLinks";

export default (props: ResourceLinkSection) => {
  return (
    <Fragment>
    { props.sections.map((resource, index) => {
      return <ResourceLinks key={index} {...resource}/>
    })}
  </Fragment>
  )
}
import { Fragment } from "react";
import { ResourceLinkSection } from "../types/Resource";
import ResourceLinks from "./ResourceLinks";

export default function ResourceSection (props: ResourceLinkSection) {
  return (
    <Fragment>
    { props.sections.map((resource, index) => {
      return <ResourceLinks key={index} {...resource}/>
    })}
  </Fragment>
  )
}
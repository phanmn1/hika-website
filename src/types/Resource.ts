type link = {
  url: string
}

export type ResourceLinkItem = {
  sectionTitle: string; 
  links: link[];
}

export type ResourceLinkSection = {
  sections: ResourceLinkItem[]
}
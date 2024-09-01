export type link = {
  url: string
}

export interface ResourceLinkItem {
  sectionTitle: string; 
  links: link[];
}

export type ResourceLinkSection = {
  sections: ResourceLinkItem[]
}

export interface AffiliateLinks extends ResourceLinkItem {
  displayType: "OR" | "AND" 
} 

export interface AffiliateGrouping { 
  
}



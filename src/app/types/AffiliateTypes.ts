import { link } from './Resource'

export type AffiliateLink = {
  name: string;
  links: link[];
  displayType: 'AND' | 'OR' | 'NONE'
}



export interface AffiliateGrouping { 
  groupName: string, 
  affiliateLinks: AffiliateLink[]
}
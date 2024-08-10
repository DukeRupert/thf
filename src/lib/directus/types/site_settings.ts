export interface Site_Settings {
  id: string
  status: string
  user_created: string
  date_created: string
  user_updated: string
  date_updated: string
  name: string
  logo?: string
  schema_type: string
  description: string
  email: string
  telephone: string
  street_address: string
  city: string
  state: string
  postal_code: string
  socials: Social[]
  logo_full?: string
}

export interface Social {
  name: string
  url: string
}

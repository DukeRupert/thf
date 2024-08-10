// block_logo_cloud
export interface Block_Logo_Cloud {
  collection: 'shcoc_block_logo_cloud'
  item: Logo_Cloud
}

export interface Logo_Cloud {
  id: string
  headline: string
  logos: Logo[]
}

export interface Logo {
  id: number
  name: string
  image: string
  href: string
  logo_cloud_id: string
}
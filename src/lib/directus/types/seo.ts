export interface Seo {
  id: string
  title: string
  meta_description: string
  canonical_url: string
  og_image: Og_Image
}

export interface Og_Image {
  id: string
  description: string
  height: number
  width: number
}
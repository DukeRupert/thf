// block_hero
import type { Button_Variants } from './button_variants'
export interface Block_Hero {
    collection: "shcoc_block_hero"
    item: Hero_Data 
}

export interface Hero_Data {
  id: string
  headline: string
  description: string
  buttons?: Button[]
  announcement?: boolean
  announcement_label?: string
  announcement_href?: string
  image: Image
}

export interface Button {
  label: string
  href: string
  variant: Button_Variants
}

export interface Image {
  id: string
  description: string
  height: string
  width: string
}
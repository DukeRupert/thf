import type { Seo } from "./seo"
import type { Block_Hero } from "./block_hero"
import type { Block_Card_Group } from "./block_card_group"
import type { Block_Grid_2x2 } from "./block_grid_2x2"
import type { Block_Logo_Cloud } from "./block_logo_cloud"
import type { Block_Richtext } from "./block_richtext"
import type { Block_Team } from "./block_team"

export interface Page {
  id: string
  status: string
  sort: null | string
  user_created: null | string
  date_created: null | string
  user_updated: null | string
  date_updated: null | string
  eyebrow?: string
  title: string
  description?: string
  slug: string
  seo: Seo
  blocks: Block[]
}

export type Block = 
  Block_Hero |
  Block_Grid_2x2 |
  Block_Card_Group |
  Block_Logo_Cloud |
  Block_Richtext |
  Block_Team
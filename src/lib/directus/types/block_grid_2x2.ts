// shcoc_block_grid_2x2

export interface Block_Grid_2x2 {
  collection: "shcoc_block_feature_grid_2x2"
  item: Grid_2x2_Data
}

export interface Grid_2x2_Data {
  id: string
  eyebrow: string
  headline: string
  description: string
  features: Feature[]
}

export interface Feature {
  title: string
  description: string
  icon: string
  button_label?: string
  button_href?: string;
}

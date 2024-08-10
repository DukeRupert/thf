// block_team
export interface Block_Team {
    collection: "shcoc_block_team"
    item: Team_Data
}

export interface Team_Data {
  id: string
  headline: string
  description: string
  members: []
}

export interface Member {
    name: string
    title: string
    description: string
    image: string
}
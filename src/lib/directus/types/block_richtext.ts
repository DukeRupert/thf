// block_richtext

export interface Block_Richtext {
    collection: "shcoc_block_richtext"
    item: RichText
}

export interface RichText {
    id: string
    content: string
}
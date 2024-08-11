// block features
export interface Block_Features {
	collection: 'block_features';
	item: Item;
}

export interface Item {
	id: string;
	headline: string;
	description: string;
	features: Feature[];
}

export interface Feature {
	headline: string;
	content: string;
	image: Image;
}

export interface Image {
	id: string;
	description: string;
	height: number;
	width: number;
}

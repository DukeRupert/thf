export interface Block_Reviews {
	collection: string;
	item: Item;
}

export interface Item {
	id: string;
	eyebrow?: string;
	headline?: string;
	reviews: Review[];
}

export interface Review {
	id: string;
	name: string;
	title: string;
	quote: string;
	image: Image;
}

export interface Image {
	id: string;
	description?: string;
	height: number;
	width: number;
}

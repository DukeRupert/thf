export interface Block_Gallery {
	collection: string;
	item: Item;
}

export interface Item {
	id: string;
	headline: string;
	gallery: Gallery[];
}

export interface Gallery {
	caption: string;
	image: Image;
}

export interface Image {
	id: string;
	description?: string;
	height: number;
	width: number;
}

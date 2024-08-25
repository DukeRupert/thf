export interface Block_Services {
	collection: string;
	item: Item;
}

export interface Item {
	id: string;
	headline: string;
	description: string;
	services: Service[];
}

export interface Service {
	id: string;
	title: string;
	description: string;
	action_label: string;
	action_url: string;
	services_id: string;
	image: Image;
}

export interface Image {
	id: string;
	height: number;
	description?: string;
	width: number;
}

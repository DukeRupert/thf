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
	title: string;
	icon: string;
	description: string;
	action_label: string;
	action_url: string;
}

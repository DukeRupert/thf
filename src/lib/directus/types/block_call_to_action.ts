export interface Block_Call_To_Action {
	collection: string;
	item: Item;
}

export interface Item {
	id: string;
	headline: string;
	actions: Action[];
}

export interface Action {
	label: string;
	variant: string;
	url: string;
}

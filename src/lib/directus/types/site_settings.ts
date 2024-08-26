export interface Site_Settings {
	id: string;
	status: string;
	user_created: string;
	date_created: string;
	user_updated: string;
	date_updated: string;
	name: string;
	schema_type: string;
	email: string;
	telephone: string;
	street_address: string;
	city: string;
	state: string;
	postal_code: string;
	logo: Logo;
}

export interface Logo {
	description: any;
	id: string;
	height: number;
	width: number;
}

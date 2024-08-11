export interface Church {
	name: string;
	short_name: string;
	slogan: string;
	address: Address;
	phone: Phone;
	email: string;
	url: string;
	social: SocialLink[];
	routes: Route[];
	logo: Logo;
}

export interface Address {
	address_1: string;
	address_2?: string; // Allow optional address line
	city: string;
	state: string;
	postal_code: string;
}

export interface Phone {
	pretty: string;
	country: number;
	area: number;
	prefix: number;
	number: number;
}

export interface SocialLink {
	id: string; // Likely 'facebook', 'youtube', etc.
	url: string;
}

export interface Route {
	id: string;
	url: string;
}

export interface Logo {
	url: string;
	alt: string;
}

export const SITE_DATA = {
	name: 'Traver Hardwood Floors',
	short_name: 'Traver Hardwood',
	slogan: 'Coming Soon',
	address: {
		address_1: '2294 Deerfield Lane',
		address_2: '',
		city: 'Helena',
		state: 'MT',
		postal_code: '59601'
	},
	phone: {
		pretty: '(406) 442-8950',
		country: 1,
		area: 406,
		prefix: 442,
		number: 8950
	},
	email: 'chris@traverhardwoodfloors.com',
	url: 'https://traverhardwoodfloors.com/',
	social: [
		{ id: 'facebook', url: 'https://www.facebook.com/' },
		{ id: 'youtube', url: 'https://www.youtube.com/' }
	],
	routes: [
		{ id: 'services', url: '/services' },
		{ id: 'about us', url: '/about-us' },
		{ id: 'contact us', url: '/contact-us' }
	],
	logo: {
		url: 'https://cms.thf.fireflysoftware.dev/assets/38806d82-c5b2-4bf6-af25-1349e5a82dea?w=40&h=40',
		alt: 'Traver Hardwood Floors logo'
	}
};

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
	name: 'South Hills Church of Christ',
	short_name: 'South Hills',
	slogan: 'Love God, Love Others',
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
	email: 'office@southhillscoc.org',
	url: 'https://southhillscoc.org/',
	social: [
		{ id: 'facebook', url: 'https://www.facebook.com/groups/101145653368' },
		{ id: 'youtube', url: 'https://www.youtube.com/channel/UC_5VLJi7bGkXK-FdIFkTMKw' }
	],
	routes: [
		{ id: 'about us', url: '/about-us' },
		{ id: 'ministries', url: '/ministries' },
		{ id: 'contact us', url: '/contact-us' },
		{ id: 'donate', url: '/donate' }
	],
	logo: {
		url: "https://res.cloudinary.com/rr-wholesale/image/upload/v1710183597/South%20Hills%20CoC/logo_hdpazk.png",
		alt: "South Hills Church of Christ logo"
	}
};

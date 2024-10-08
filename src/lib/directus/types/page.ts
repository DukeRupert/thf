import type { Seo } from './seo';
import type { Block_Hero } from './block_hero';
import type { Block_Card_Group } from './block_card_group';
import type { Block_Grid_2x2 } from './block_grid_2x2';
import type { Block_Logo_Cloud } from './block_logo_cloud';
import type { Block_Richtext } from './block_richtext';
import type { Block_Team } from './block_team';
import type { Block_Features } from './block_features';
import type { Block_Services } from './block_services';
import type { Block_Reviews } from './block_reviews';
import type { Block_Call_To_Action } from './block_call_to_action';
import type { Block_Page_Header } from './block_page_header';
import type { Block_Gallery } from '../components/Gallery';

export interface Page {
	id: string;
	status: string;
	sort: any;
	user_created: string;
	date_created: string;
	user_updated: string;
	date_updated: string;
	title: string;
	slug: string;
	blocks: Block[];
	seo: Seo;
}

export type Block =
	| Block_Hero
	| Block_Grid_2x2
	| Block_Card_Group
	| Block_Logo_Cloud
	| Block_Richtext
	| Block_Team
	| Block_Features
	| Block_Services
	| Block_Reviews
	| Block_Call_To_Action
	| Block_Page_Header
	| Block_Gallery;

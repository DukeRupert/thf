import type { Site_Settings } from './site_settings';
import type { Page } from './page';

export interface Schema {
	site_settings: Site_Settings;
	pages: Page[];
}

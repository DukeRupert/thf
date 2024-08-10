import { createDirectus, rest } from '@directus/sdk';
import { PUBLIC_DIRECTUS_ENDPOINT } from "$env/static/public"
import type { Schema } from './types';


const endpoint = PUBLIC_DIRECTUS_ENDPOINT || ''
if(!endpoint) console.log('ERROR: endpoint not provided for Directus instance')

// Client with REST support
const client = createDirectus<Schema>(endpoint).with(rest());

export default client;
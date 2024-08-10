import postmark from 'postmark';
import { POSTMARK_API_KEY } from '$env/static/private';

// Send an email:
export const client = new postmark.ServerClient(POSTMARK_API_KEY);
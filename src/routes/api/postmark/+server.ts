import { client } from '$lib/postmark.js';
import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { POSTMARK_CONTACT_TEMPLATE_ID, POSTMARK_FROM, POSTMARK_TO } from '$env/static/private';

const template_id = parseInt(POSTMARK_CONTACT_TEMPLATE_ID);
const from = POSTMARK_FROM;
const to = POSTMARK_TO;

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();
	const org_name = 'South Hills Church of Christ';
	const site_name = 'southhillscoc.org';
	const timestamp = new Date();
	const date = timestamp.toLocaleDateString('en-US');
	const model = { ...data, org_name, site_name, date };

	// Send message
	const res = await client.sendEmailWithTemplate({
		TemplateId: template_id,
		TemplateModel: model,
		From: from,
		To: to,
		MessageStream: 'outbound',
		TrackOpens: true
	});

	// Handle error
	if (res.ErrorCode == 0) {
		// let me know
		await client.sendEmail({
			From: from,
			To: from,
			Subject: site_name + 'contact form error',
			TextBody: JSON.stringify(res)
		});
		// let application know
        throw error(501, { message: 'Something went wrong. Please try calling us instead.'})
	}
	return json({ success: true });
};

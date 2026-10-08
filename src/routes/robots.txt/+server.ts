import { SITE } from '#lib/site.js';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = () =>
	new Response(`User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`, {
		headers: { 'Content-Type': 'text/plain' }
	});

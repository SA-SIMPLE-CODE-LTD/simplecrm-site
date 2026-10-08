import { LEGAL_DOCS, SITE } from '#lib/site.js';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = () => {
	const paths = ['/', ...LEGAL_DOCS.map(({ id }) => `/legal/${id}`)];
	const urls = paths
		.map((path) => `\t<url><loc>${SITE.url}${path === '/' ? '' : path}</loc></url>`)
		.join('\n');
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
	return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};

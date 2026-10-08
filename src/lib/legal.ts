/**
 * Legal pages are Markdown files in src/content/legal, rendered at build time.
 * Front matter holds `title` and `updated`; {{tokens}} are filled from SITE.
 */
import { marked } from 'marked';
import { SITE, type LegalDocId } from './site.js';

const sources = import.meta.glob<string>('/src/content/legal/*.md', {
	query: '?raw',
	import: 'default',
	eager: true
});

const TOKENS: Record<string, string> = {
	name: SITE.name,
	url: SITE.url,
	appUrl: SITE.appUrl,
	legalName: SITE.company.legalName,
	registrationNumber: SITE.company.registrationNumber,
	address: SITE.company.address,
	country: SITE.company.country,
	jurisdiction: SITE.company.jurisdiction,
	courts: SITE.company.courts,
	supportEmail: SITE.email.support,
	billingEmail: SITE.email.billing,
	privacyEmail: SITE.email.privacy,
	legalEmail: SITE.email.legal,
	securityEmail: SITE.email.security,
	abuseEmail: SITE.email.abuse
};

export interface LegalDoc {
	title: string;
	updated: string;
	html: string;
}

function parseFrontMatter(raw: string): { meta: Record<string, string>; body: string } {
	const match = /^---\n([\s\S]*?)\n---\n/.exec(raw);
	if (!match) return { meta: {}, body: raw };
	const meta: Record<string, string> = {};
	for (const line of match[1].split('\n')) {
		const i = line.indexOf(':');
		if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
	}
	return { meta, body: raw.slice(match[0].length) };
}

export function loadLegalDoc(id: LegalDocId): LegalDoc | null {
	const raw = sources[`/src/content/legal/${id}.md`];
	if (!raw) return null;
	const { meta, body } = parseFrontMatter(raw);
	const filled = body.replace(/\{\{(\w+)\}\}/g, (token, key: string) => {
		const value = TOKENS[key];
		if (value === undefined) throw new Error(`Unknown token ${token} in ${id}.md`);
		return value;
	});
	return {
		title: meta.title ?? id,
		updated: meta.updated ?? '',
		// Trusted input: the Markdown is ours and is rendered once at build time.
		html: marked.parse(filled, { async: false })
	};
}

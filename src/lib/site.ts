/**
 * Everything that changes when the domain or the company details are decided.
 * Values in [BRACKETS] are placeholders: replace them before going live.
 */
export const SITE = {
	name: 'Simple CRM',
	/** Marketing site (this repo). No trailing slash. */
	url: 'https://simplecrm.example',
	/** The platform itself. No trailing slash. */
	appUrl: 'https://app.simplecrm.example',
	tagline: 'The work OS your team already knows how to use.',
	description:
		'Simple CRM gives your team boards, views, dashboards, docs and automations in one place, with a monday.com-compatible API and an import from monday.com.',
	company: {
		legalName: '[COMPANY LEGAL NAME]',
		registrationNumber: '[COMPANY NUMBER]',
		address: '[REGISTERED ADDRESS]',
		country: '[COUNTRY]',
		/** Courts and law that govern the terms. */
		jurisdiction: '[JURISDICTION]'
	},
	email: {
		support: 'support@simplecrm.example',
		privacy: 'privacy@simplecrm.example',
		legal: 'legal@simplecrm.example'
	}
} as const;

export type LegalDocId = 'privacy' | 'terms' | 'dpa' | 'subprocessors';

export const LEGAL_DOCS: { id: LegalDocId; title: string }[] = [
	{ id: 'privacy', title: 'Privacy Policy' },
	{ id: 'terms', title: 'Terms of Service' },
	{ id: 'dpa', title: 'Data Processing Agreement' },
	{ id: 'subprocessors', title: 'Subprocessors' }
];

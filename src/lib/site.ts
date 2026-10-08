/**
 * Everything that changes when the domain or the company details are decided.
 * Values in [BRACKETS] are placeholders: replace them before going live.
 */

/**
 * One Gmail inbox for everything. Each purpose gets its own "+tag" address
 * (simplecodesa+support@gmail.com, ...): Gmail delivers them all to the same inbox,
 * and a filter on "to:" labels each one, so you can see what a message is about.
 */
const INBOX = { user: 'simplecodesa', domain: 'gmail.com' };
const inbox = (tag: string) => `${INBOX.user}+${tag}@${INBOX.domain}`;

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
		legalName: 'SA SIMPLE CODE LTD',
		registrationNumber: '516820560',
		address: '[REGISTERED ADDRESS]',
		country: 'Israel',
		/** Law that governs the terms. */
		jurisdiction: 'the State of Israel',
		/** Courts with exclusive jurisdiction over disputes. */
		courts: 'Tel Aviv-Jaffa, Israel'
	},
	email: {
		support: inbox('support'),
		billing: inbox('billing'),
		privacy: inbox('privacy'),
		legal: inbox('legal'),
		security: inbox('security'),
		/** Abuse and copyright reports. */
		abuse: inbox('abuse')
	}
} as const;

export type LegalDocId =
	| 'terms'
	| 'acceptable-use'
	| 'copyright'
	| 'privacy'
	| 'cookies'
	| 'dpa'
	| 'subprocessors'
	| 'security';

export const LEGAL_DOCS: { id: LegalDocId; title: string }[] = [
	{ id: 'terms', title: 'Terms of Service' },
	{ id: 'acceptable-use', title: 'Acceptable Use Policy' },
	{ id: 'copyright', title: 'Copyright Policy' },
	{ id: 'privacy', title: 'Privacy Policy' },
	{ id: 'cookies', title: 'Cookie Policy' },
	{ id: 'dpa', title: 'Data Processing Agreement' },
	{ id: 'subprocessors', title: 'Subprocessors' },
	{ id: 'security', title: 'Security' }
];

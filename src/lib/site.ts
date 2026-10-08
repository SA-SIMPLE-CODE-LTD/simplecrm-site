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

export interface LegalDocInfo {
	id: LegalDocId;
	title: string;
	/** One line for the legal hub. */
	summary: string;
}

/** Grouped the way monday.com's legal hub groups its documents. */
export const LEGAL_GROUPS: { title: string; docs: LegalDocInfo[] }[] = [
	{
		title: 'Terms & policies',
		docs: [
			{
				id: 'terms',
				title: 'Terms of Service',
				summary: 'The agreement between us and every workspace that uses Simple CRM.'
			},
			{
				id: 'acceptable-use',
				title: 'Acceptable Use Policy',
				summary: 'What you may not do with the Service, and how we enforce it.'
			},
			{
				id: 'copyright',
				title: 'Copyright Policy',
				summary: 'How to report content that infringes your rights, and how we respond.'
			}
		]
	},
	{
		title: 'Privacy',
		docs: [
			{
				id: 'privacy',
				title: 'Privacy Policy',
				summary: 'What personal data we collect, why, and the rights you have.'
			},
			{
				id: 'cookies',
				title: 'Cookie Policy',
				summary: 'Every cookie we set, what it is for and how long it lasts.'
			},
			{
				id: 'dpa',
				title: 'Data Processing Agreement',
				summary: 'How we process personal data that customers store in Simple CRM.'
			},
			{
				id: 'subprocessors',
				title: 'Subprocessors',
				summary: 'The providers that help us run the Service and where they are.'
			}
		]
	},
	{
		title: 'Security',
		docs: [
			{
				id: 'security',
				title: 'Security',
				summary: 'How we protect your data, and how to report a vulnerability.'
			}
		]
	}
];

export const LEGAL_DOCS: LegalDocInfo[] = LEGAL_GROUPS.flatMap(({ docs }) => docs);

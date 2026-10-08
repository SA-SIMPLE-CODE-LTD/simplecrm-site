import { error } from '@sveltejs/kit';
import { loadLegalDoc } from '#lib/legal.js';
import { LEGAL_DOCS, type LegalDocId } from '#lib/site.js';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => LEGAL_DOCS.map(({ id }) => ({ doc: id }));

export const load: PageLoad = ({ params }) => {
	const known = LEGAL_DOCS.find(({ id }) => id === params.doc);
	const doc = known ? loadLegalDoc(known.id as LegalDocId) : null;
	if (!doc) error(404, 'Not found');
	return { id: params.doc, ...doc };
};

import { type SchemaTypeDefinition } from 'sanity';
import caseStudies from './schema/case-studies';
import review from './schema/review';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [caseStudies, review],
};

import { type SchemaTypeDefinition } from 'sanity';
import caseStudies from './schema/case-studies';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [caseStudies],
};

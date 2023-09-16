import { client } from '@/sanity/lib/client';

export const getCaseStudies = async (type: 'all' | 'featured') => {
	try {
		let query: string;

		if (type === 'featured') {
			query = `*[_type == "caseStudies" && difficulty > 8][0..3]`;
		} else {
			query = `*[_type == "caseStudies"]`;
		}

		const res = await client.fetch(query);

		return res as Projects[];
	} catch (error) {
		throw error;
	}
};

export const getSingleCaseStudy = async (id: string) => {
	try {
		const res = await client.fetch(
			`*[_type == "caseStudies" && _id == "${id}"]`
		);
		return res[0] as Projects;
	} catch (error) {
		throw error;
	}
};

export const getSimilarCaseStudies = async (id: string) => {
	try {
		const diffProject = await client.fetch(
			`*[_type == "caseStudies" && _id != $id][0..1]`,
			{ id }
		);

		return diffProject as Projects[];
	} catch (error) {
		throw error;
	}
};

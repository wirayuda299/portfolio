import { client } from '@/sanity/lib/client';
import { Projects } from '@/types/project';

export const getCaseStudies = async (type: 'all' | 'featured') => {
	try {

		let query: string;

		if (type === 'featured') {
			query = `*[_type == "caseStudies" && difficulty > 8][0..3]{
				backgroundColor,
				 "techStacks":techStacks[0]{
      "frontend": frontend[] {
        name,
				_key,
        "icon": icon.asset->url
      },
      "backend": backend[] {
        name,
				_key,
        "icon": icon.asset->url
      }
    },
				'thumbnail':thumbnail.asset->url,
				title,
				_id,
				subTitle
			}`;
		} else {
			query = `*[_type == "caseStudies"]{
				 _id,
        title,
        subTitle,
        "mockup":mockup.asset->url,
				backgroundColor
			}`;
		}

		return await client.fetch(query) as Projects[];

	} catch (error) {
		throw error;
	}
};

export const getSingleCaseStudy = async (id: string) => {
	try {
		const params = { id };
		const res = await client.fetch(
			`*[_type == "caseStudies" && _id == $id]{
    _id,
    title,
    subTitle,
    "mockup":mockup.asset->url,
    demoSite,
    sourceCode,
    projectInfo,
    "techStacks":techStacks[0]{
      "frontend": frontend[] {
        name,
				_key,
        "icon": icon.asset->url
      },
      "backend": backend[] {
        name,
				_key,
        "icon": icon.asset->url
      }
    },
    descriptions,
    "problem":problem[0]{
      "image":image.asset->url,
      description
    },
    "design":design.asset->url,
    "process": process[]{
      _key,
      title,
      'icon':icon.asset->url
    },
    challenges,
    learnings
  }`,
			params
		);

		return res[0] as Projects;
	} catch (error) {
		throw error;
	}
};

export const getSimilarCaseStudies = async (id: string) => {
	try {
		const diffProject = await client.fetch(
			`*[_type == "caseStudies" && _id != $id]{
					backgroundColor,
					"mockup":mockup.asset->url,
					subTitle,
					title,
					_id,
					descriptions
				}`,
			{ id }
		);

		return diffProject as Projects[]
	} catch (error) {
		throw error;
	}
};

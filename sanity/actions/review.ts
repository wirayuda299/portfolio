import { client } from '@/sanity/lib/client';

export async function getReview() {
	try {
		const res = (await client.fetch(`*[_type == "review"]`)) as Review[];
		return res;
	} catch (error) {
		throw error;
	}
}

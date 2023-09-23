'use server';

import { client } from '@/sanity/lib/client';

export const postReview = async (data: FormData, image: ImageResult | null) => {
	try {
		const formData = {
			_type: 'review',
			star: Number(data.get('star')),
			comments: data.get('comments'),
			profile: image?.url,
			profileImageKey: image?.fileKey,
			name: data.get('name'),
			role: data.get('role'),
		};

		await client.create(formData, {
			token: process.env.NEXT_PUBLIC_SANITY_WRITE_TOKEN,
		});
	} catch (error) {
		throw error;
	}
};

export async function getReview() {
	try {
		const res = (await client.fetch(`*[_type == "review"]`)) as Review[];
		return res;
	} catch (error) {
		throw error;
	}
}

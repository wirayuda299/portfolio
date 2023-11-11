import { client } from '@/sanity/lib/client';

export const postReview = async (data: FormData, image: ImageResult | null) => {
	try {
		const datas = data.forEach((d) => {
			console.log(d);
		});
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
		console.log(error);

		throw error;
	}
};

export async function getReview() {
	try {
		const res = await client.fetch(`*[_type == "review"]`, {
			cache: 'no-store',
			next: {
				tags: ['review'],
			},
		});
		return res as Review[];
	} catch (error) {
		throw error;
	}
}

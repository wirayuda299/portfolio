import { client } from '@/sanity/lib/client';
import { revalidatePath } from 'next/cache';

export const postReview = async (data: FormData, image: ImageResult | null) => {
	try {
		await client.create(
			{
				_type: 'review',
				star: Number(data.get('star')),
				comments: data.get('comments'),
				profile: image?.url,
				profileImageKey: image?.fileKey,
				name: data.get('name'),
				role: data.get('role'),
			},
			{
				token: process.env.SANITY_WRITE_TOKEN,
			}
		);
		revalidatePath('/');
	} catch (error) {
		throw error;
	}
};

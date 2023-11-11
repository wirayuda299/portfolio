import { client } from '@/sanity/lib/client';
import { revalidatePath } from 'next/cache';

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
		revalidatePath('/');
	} catch (error) {
		throw error;
	}
};

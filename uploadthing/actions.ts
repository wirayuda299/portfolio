'use server';

import { utapi } from 'uploadthing/server';

export const deleteImage = async (key: string) => {
	try {
		await utapi.deleteFiles(key);
	} catch (error) {
		throw error;
	}
};

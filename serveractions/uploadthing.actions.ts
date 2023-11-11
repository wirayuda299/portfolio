import { UTApi } from 'uploadthing/server';

export const utapi = new UTApi();

export const deleteImage = async (key: string) => {
	try {
		if (key) {
			await utapi.deleteFiles(key);
		}
	} catch (error) {
		throw error;
	}
};

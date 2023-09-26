import { useState, useEffect } from 'react';
import { UploadFileResponse } from 'uploadthing/client';

import { deleteImage } from '@/serveractions/index';

export default function useBeforeUnload() {
	const [imagePreview, setImagePreview] = useState<UploadFileResponse | null>(
		null
	);

	useEffect(() => {
		if (imagePreview !== null) {
			window.addEventListener('beforeunload', () =>
				deleteImage(imagePreview.key)
			);
		}

		return () => {
			if (imagePreview !== null) {
				window.addEventListener('beforeunload', () =>
					deleteImage(imagePreview.key)
				);
			}
		};
	}, [imagePreview]);

	return { imagePreview, setImagePreview };
}

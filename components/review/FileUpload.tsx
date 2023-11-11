'use client';

import { UploadDropzone } from '@uploadthing/react';
import type { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';

import { toast } from '../ui/use-toast';
import { OurFileRouter } from '@/app/api/uploadthing/core';
import DeleteImageDialog from './Dialog';

type FileUploadProps = {
	imagePreview: ImageResult | null;
	setImage: Dispatch<SetStateAction<ImageResult | null>>;
};

export default function FileUpload({
	setImage,
	imagePreview,
}: FileUploadProps) {
	return (
		<div className='h-full w-full max-w-400 '>
			{imagePreview ? (
				<>
					<Image
						className='aspect-square max-h-450 max-w-400 object-cover'
						src={imagePreview.url}
						alt='image'
						width={500}
						height={500}
					/>
					<DeleteImageDialog
						key={imagePreview.fileKey ?? imagePreview.key}
						setImagePreview={setImage}
					/>
				</>
			) : (
				<UploadDropzone<OurFileRouter>
					className='min-h-400 w-full rounded-2xl border-0 text-black shadow-xl shadow-white-100 ut-button:mt-5 ut-button:rounded-md ut-button:bg-primary-light ut-button:px-5 ut-button:text-xs ut-button:text-white dark:shadow-black-100 ut-button:dark:bg-primary-dark ut-allowed-content:dark:text-white ut-label:dark:text-white ut-upload-icon:dark:text-white'
					endpoint='imageUploader'
					onClientUploadComplete={(res) => {
						setImage(res ? res[0] : null);
						toast({
							className: 'text-white font-normal bg-green-600',
							title: 'File uploaded',
						});
					}}
					onUploadError={(error: Error) => {
						toast({
							className: 'text-white',
							variant: 'destructive',
							title: error.message,
						});
					}}
				/>
			)}
		</div>
	);
}

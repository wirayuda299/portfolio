'use client';

import { UploadDropzone } from '@uploadthing/react';
import { useRef, type Dispatch, type SetStateAction } from 'react';
import Image from 'next/image';

import { toast } from '../ui/use-toast';
import { OurFileRouter } from '@/app/api/uploadthing/core';
import { DeleteImageDialog } from '../index';
import useIntersectionObserver from '@/hooks/useInterSectionObserver';

type FileUploadProps = {
	imagePreview: ImageResult | null;
	setImage: Dispatch<SetStateAction<ImageResult | null>>;
};

export default function FileUpload({
	setImage,
	imagePreview,
}: FileUploadProps) {
	const ref = useRef<HTMLDivElement>(null);

	useIntersectionObserver(ref, ['animate-fade-right']);
	return (
		<div ref={ref} className='h-full w-full max-w-[400px] opacity-0'>
			{imagePreview ? (
				<>
					<Image
						className='aspect-square max-h-[450px] max-w-[400px] object-cover'
						src={imagePreview.url}
						alt='image'
						width={500}
						height={500}
					/>
					<DeleteImageDialog
						key={imagePreview.key}
						setImagePreview={setImage}
					/>
				</>
			) : (
				<UploadDropzone<OurFileRouter>
					className='min-h-[400px] w-full rounded-2xl border-0 text-black shadow-xl shadow-white-100 ut-button:mt-5 ut-button:rounded-md ut-button:bg-primary-light ut-button:px-5 ut-button:text-xs ut-button:text-white dark:shadow-black-100 ut-button:dark:bg-primary-dark ut-allowed-content:dark:text-white ut-label:dark:text-white ut-upload-icon:dark:text-white'
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

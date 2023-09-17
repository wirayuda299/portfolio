'use client';

import Image from 'next/image';
import type { ChangeEvent, Dispatch, SetStateAction } from 'react';

type ImageUploadProps = {
	setImage: Dispatch<SetStateAction<string | null>>;
};

export default function ImageUpload({ setImage }: ImageUploadProps) {
	const handleInputImage = async (e: ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files?.[0];
		if (!selectedFile) return;

		const reader = new FileReader();

		reader.onload = async (event) => {
			if (event.target) {
				setImage(event.target.result as string);
			}
		};
		reader.readAsDataURL(selectedFile);
	};
	return (
		<div className='h-full w-full max-w-[500px]'>
			<div className={`flex w-full  items-center justify-center `}>
				<div className='mx-auto flex w-full  justify-center'>
					<label
						htmlFor='file'
						className='flex h-80 w-full cursor-pointer flex-col items-center justify-center rounded-2xl shadow-2xl dark:border  dark:border-gray-600 dark:border-opacity-10 dark:shadow-xl'
					>
						<div className='flex flex-col items-center justify-center pb-6 pt-5'>
							<div className='mb-2 text-sm text-black  dark:text-white'>
								<Image
									className='mx-auto my-2'
									src={'/assets/icons/upload.svg'}
									width={40}
									height={40}
									alt='upload icon'
								/>
								<span className='block text-center  font-semibold'>
									Click to upload
								</span>
							</div>
						</div>
						<input
							id='file'
							type='file'
							accept='image/*, .png, .jpg, .jpeg, .gif'
							required
							className='hidden'
							onChange={handleInputImage}
						/>
					</label>
				</div>
			</div>
		</div>
	);
}

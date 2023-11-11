'use client';

import type { Dispatch, SetStateAction } from 'react';
import { UploadFileResponse } from 'uploadthing/client';

import { Button } from '../ui/button';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { deleteImage } from '@/serveractions/index';

type DeleteImageDialogProps = {
	key: string;
	setImagePreview: Dispatch<SetStateAction<UploadFileResponse | null>>;
};

export default function DeleteImageDialog({
	key,
	setImagePreview,
}: DeleteImageDialogProps) {
	return (
		<Dialog>
			<DialogTrigger asChild className='mt-2 w-full'>
				<Button variant='destructive'>Delete</Button>
			</DialogTrigger>
			<DialogContent className='border-none dark:text-white'>
				<DialogHeader>
					<DialogTitle className='dark:text-white'>
						Are you sure to delete this image?
					</DialogTitle>
					<div className='flex w-full items-center justify-center gap-2 pt-3'>
						<Button
							className='w-full'
							variant={'destructive'}
							onClick={async () => {
								await deleteImage(key).then(() => {
									setImagePreview(null);
								});
							}}
						>
							Yes
						</Button>
						<Button className='w-full bg-green-600 text-white'>Cancel</Button>
					</div>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}

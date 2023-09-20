'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { toast } from '../ui/use-toast';
import { Input } from '../ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '../ui/textarea';
import { FileUpload } from '../index';
import { postReview } from '@/sanity/actions/review';
import { formReviewFields } from '@/constant';

export default function ReviewForm() {
	const [image, setImage] = useState<ImageResult | null>(null);
	const router = useRouter();

	const handleSubmit = async (data: FormData) => {
		try {
			if (image === null)
				return toast({
					className: 'text-white',
					variant: 'destructive',
					title: 'Please add profile image',
				});

			await postReview(data, image);

			toast({ title: 'Success' });
			router.push('/', { scroll: true });
		} catch (error) {
			toast({
				className: 'text-white',
				variant: 'destructive',
				title: 'Something went wrong, Please try again later',
			});
		}
	};

	return (
		<section className='mt-9 w-full'>
			<form
				action={handleSubmit}
				className='flex h-full w-full flex-wrap items-center justify-center gap-20 '
			>
				<FileUpload setImage={setImage} />
				<div className='h-full w-full  max-w-sm'>
					{formReviewFields.map((formField) => (
						<div key={formField.label} className='space-y-5'>
							<h2 className='pt-3 text-sm dark:text-white'>
								{formField.title}
							</h2>
							{formField.label === 'comments' ? (
								<Textarea
									required
									name='comments'
									className='resize-none !bg-white-800 !py-3 focus:!border-none focus:!ring-1 focus:!ring-primary-light dark:border-none dark:!bg-black-300 dark:text-white dark:focus:!ring-primary-dark'
								/>
							) : (
								<Input
									min={1}
									max={5}
									required
									name={formField.label}
									className='!bg-white-800 !py-3 focus:!ring-1 focus:!ring-primary-light dark:border-none dark:!bg-black-300 dark:text-white dark:focus:!ring-primary-dark'
									type={formField.label === 'star' ? 'number' : 'text'}
									autoComplete='off'
								/>
							)}
						</div>
					))}
					<Button
						type='submit'
						variant='primary'
						className='mt-5 w-full text-white'
					>
						Submit
					</Button>
				</div>
			</form>
		</section>
	);
}

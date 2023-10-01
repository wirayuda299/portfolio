'use client';

import { useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { toast } from '../ui/use-toast';
import { Input } from '../ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '../ui/textarea';
import { FileUpload } from '../index';
import { formReviewFields } from '@/constant';
import { postReview } from '@/serveractions';
import { cn } from '@/lib/utils';
import useIntersectionObserver from '@/hooks/useInterSectionObserver';

type ReviewFormProps = {
	textAreaStyles?: string;
	inputStyles?: string;
};

export default function ReviewForm({
	textAreaStyles,
	inputStyles,
}: ReviewFormProps) {
	const [image, setImage] = useState<ImageResult | null>(null);
	const { push, refresh } = useRouter();
	const pathname = usePathname();
	const ref = useRef<HTMLDivElement>(null);
	useIntersectionObserver(ref, ['animate-fade-left']);

	const handleSuccess = () => {
		if (pathname === '/') {
			refresh();
			return;
		}
		push('/#review');
		refresh();
	};

	const handleSubmit = async (data: FormData) => {
		try {
			if (image === null)
				return toast({
					className: 'text-white',
					variant: 'destructive',
					title: 'Please add profile image',
				});

			await postReview(data, image).then(() => {
				handleSuccess();
				toast({ title: 'Thank you for your feedback❤' });
			});
		} catch (error) {
			toast({
				className: 'text-white',
				variant: 'destructive',
				title: 'Something went wrong, Please try again later',
			});
		}
	};

	return (
		<div className='mt-9 w-full opacity-0' ref={ref}>
			<form
				action={handleSubmit}
				className='flex h-full w-full flex-wrap items-center justify-center gap-20 '
			>
				<FileUpload setImage={setImage} imagePreview={image} />
				<div className='h-full w-full max-w-sm'>
					{formReviewFields.map((formField) => (
						<div key={formField.label} className='space-y-5'>
							<h2 className='pt-3 text-sm dark:text-white'>
								{formField.title}
							</h2>
							{formField.label === 'comments' ? (
								<Textarea
									required
									name='comments'
									className={cn(
										'resize-none border border-white !bg-white-800 !py-3 focus:!ring-primary-light dark:!border-none dark:!bg-black-300  dark:text-white dark:focus:ring-primary-dark dark:focus-visible:!border-0 dark:focus-visible:!ring-offset-0',
										textAreaStyles
									)}
								/>
							) : (
								<Input
									min={1}
									max={5}
									accept={
										formField.label === 'star'
											? '[0-9]'
											: (['a-zA-Z'] as unknown as string)
									}
									required
									name={formField.label}
									className={cn(
										'border border-white !bg-white-800 !py-5 focus:!ring-primary-light dark:!border-none dark:!bg-black-300 dark:text-white dark:focus:ring-primary-dark dark:focus-visible:!border-0 dark:focus-visible:!ring-offset-0',
										inputStyles
									)}
									inputMode={formField.label === 'star' ? 'numeric' : 'text'}
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
		</div>
	);
}

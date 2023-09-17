'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';

import {
	Form,
	FormItem,
	FormLabel,
	FormField,
	FormControl,
	FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { toast } from '../ui/use-toast';
import { Button } from '@/components/ui/button';
import { client } from '@/sanity/lib/client';
import { ImageUpload } from '../index';

const formSchema = z.object({
	star: z.coerce.number().min(1).max(5),
	comments: z.string(),
	name: z.string(),
	role: z.string().optional(),
});

const formReviewFields = [
	{
		label: 'star',
		title: 'Rating',
	},

	{
		label: 'name',
		title: 'Your Name',
	},
	{
		label: 'role',
		title: 'Your Role',
	},
	{
		label: 'comments',
		title: 'Give your feedback',
	},
];

export default function ReviewForm() {
	const [image, setImage] = useState<string | null>(null);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		try {
			const formData = {
				_type: 'review',
				star: +data.star,
				comments: data.comments,
				profile: image,
				name: data.name,
				role: data.role,
			};

			await client.create(formData, {
				token: process.env.SANITY_WRITE_TOKEN,
			});
			toast({
				title: 'Success',
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
		<section className='mt-9 flex w-full flex-wrap items-center justify-center gap-20 '>
			{image ? (
				<Image
					className='aspect-square h-full w-full max-w-md object-cover'
					src={image}
					alt=''
					width={400}
					height={400}
				/>
			) : (
				<ImageUpload setImage={setImage} />
			)}
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='w-full max-w-[450px]'
				>
					{formReviewFields.map((formField) => (
						<FormField
							key={formField.label}
							control={form.control}
							name={formField.label as keyof z.infer<typeof formSchema>}
							render={({ field }) => (
								<FormItem>
									<FormLabel className='flex flex-wrap gap-x-2 py-3 text-base text-black-300 dark:text-white'>
										{formField.title}
									</FormLabel>
									<FormControl className='!bg-white-800  !py-3 focus:!ring-1 focus:!ring-primary-light dark:!bg-black-300 dark:text-white dark:focus:!ring-primary-dark'>
										{formField.label === 'comments' ? (
											<Textarea
												className='resize-none !bg-white-800 focus:!ring-1 focus:!ring-primary-light dark:!bg-black-300 dark:focus:!ring-primary-dark '
												{...field}
											/>
										) : (
											<Input
												min={1}
												max={5}
												type={formField.label === 'star' ? 'number' : 'text'}
												{...field}
												autoComplete='off'
											/>
										)}
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					))}
					<Button variant='primary' className='mt-5 w-full text-white'>
						Submit
					</Button>
				</form>
			</Form>
		</section>
	);
}

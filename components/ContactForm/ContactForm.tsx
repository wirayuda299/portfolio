'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import emailjs from '@emailjs/browser';

import { Button } from '@/components/ui/button';
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
import { formFields } from '@/constant';
import { toast } from '../ui/use-toast';

const formSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	messageText: z.string(),
	senderContact: z.string().email().or(z.string()),
});

export default function ContactForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		const { name, email, messageText, senderContact } = data;
		try {
			const templateParams = {
				to_name: name,
				to_email: email,
				to_message: messageText,
				to_contact: senderContact,
			};
			await emailjs.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
				templateParams,
				process.env.NEXT_PUBLIC_EMAILJS_API_KEY!
			);
			toast({
				title: 'Your message successfully sended',
			});
		} catch (error) {
			toast({
				variant: 'destructive',
				title: 'Something went wrong when send your message',
			});
		}
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className=' flex max-w-2xl flex-col space-y-8'
			>
				{formFields.map((formField) => (
					<FormField
						key={formField.label}
						control={form.control}
						name={formField.label as keyof z.infer<typeof formSchema>}
						render={({ field }) => (
							<FormItem>
								<FormLabel className='flex flex-wrap gap-x-2 text-base text-black-300 dark:text-white'>
									{formField.title}
									<span className='text-xs font-light text-white-500 md:text-sm'>
										{formField.subTitle}
									</span>
								</FormLabel>
								<FormControl className='!bg-white-800  !py-3 focus:!ring-1 focus:!ring-primary-light dark:!bg-black-300 dark:text-white dark:focus:!ring-primary-dark'>
									{formField.label === 'messageText' ? (
										<Textarea
											className='resize-none !bg-white-800 focus:!ring-1 focus:!ring-primary-light dark:!bg-black-300 dark:focus:!ring-primary-dark '
											{...field}
										/>
									) : (
										<Input {...field} autoComplete='off' />
									)}
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				))}
				<div className='flex justify-end'>
					<Button className='rounded-full bg-primary-light px-12 hover:bg-blue-600 dark:bg-primary-dark dark:text-white '>
						Send
					</Button>
				</div>
			</form>
		</Form>
	);
}

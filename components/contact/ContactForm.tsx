'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

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
import { FORM_FIELDS } from '@/constants/index';
import { toast } from 'sonner';

const formSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	messageText: z.string(),
	senderContact: z.string().email().or(z.string()),
});

export default function ContactForm() {
	const [pending, setPending] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		const { name, email, messageText, senderContact } = data;
		try {
			setPending(true);
			const templateParams = {
				to_name: name,
				to_email: email,
				to_message: messageText,
				to_contact: senderContact,
			};
			await emailjs.send(
				process.env.EMAILJS_SERVICE_ID!,
				process.env.EMAILJS_TEMPLATE_ID!,
				templateParams,
				process.env.EMAILJS_API_KEY
			);
      toast.success( 'Your message successfully sended')
		} catch (error) {
      toast.error( 'Something went wrong when send your message')
		} finally {
			setPending(false);
		}
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='flex max-w-2xl animate-fade-left flex-col space-y-8 opacity-0'
			>
				{FORM_FIELDS.map((form_field) => (
					<FormField
						key={form_field.label}
						control={form.control}
						name={form_field.label}
						render={({ field }) => (
							<FormItem>
								<FormLabel className='flex flex-wrap gap-x-2 text-base text-white'>
									{form_field.title}
									<span className='text-xs font-light text-white-800 md:text-sm'>
										{form_field.subTitle}
									</span>
								</FormLabel>
								<FormControl className='h-12  focus:!ring-1  !border-none !bg-black-300 text-white focus:!ring-primary-dark focus-visible:!border-0 focus-visible:!ring-offset-0'>
									{form_field.label === 'messageText' ? (
										<Textarea
											className='resize-none focus:!ring-1 !bg-black-300 focus:!ring-primary-dark '
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
					<Button
						disabled={pending}
						className='rounded-full px-12 hover:bg-blue-600 bg-primary-dark text-white '
					>
						{pending ? 'Sending...' : 'Send'}
					</Button>
				</div>
			</form>
		</Form>
	);
}

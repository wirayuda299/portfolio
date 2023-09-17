import { toast } from '../components/ui/use-toast';

export const copyText = (text: string) => {
	navigator.clipboard.writeText(text).then(() => {
		toast({
			title: 'Link copied to clipboard',
		});
	});
};

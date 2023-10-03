import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Wirayuda',
		short_name: 'Wirayuda',
		description: 'My Personal website',
		start_url: '/',
		display: 'standalone',
		background_color: '#fff',
		theme_color: '#fff',
		icons: [
			{
				src: '/favicon.ico',
				sizes: 'any',
				type: 'image/x-icon',
			},
		],
	};
}

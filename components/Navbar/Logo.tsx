import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
	return (
		<Link href='/'>
			<Image
				className='object-contain dark:invert'
				alt='wirayuda logo'
				src={'/logo.png'}
				width={60}
				height={60}
				priority
			/>
		</Link>
	);
}

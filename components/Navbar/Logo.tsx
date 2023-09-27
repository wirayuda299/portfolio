import Link from 'next/link';

export default function Logo() {
	return (
		<Link href='/'>
			<div className='inline-flex h-11 w-12 rotate-180 items-center justify-center rounded-full bg-conic-gradient text-center'>
				<span className='rotate-180 font-semibold text-white'>W</span>
			</div>
		</Link>
	);
}

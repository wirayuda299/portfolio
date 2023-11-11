import Image from 'next/image';

type ProcessProps = {
	title: string;
	_type: string;
	icon: string;
	_key: string;
}[];

export default function Process({ process }: { process: ProcessProps }) {
	return (
		<section className='bg-white py-10 dark:bg-black-200'>
			<div className='mx-auto mt-7 flex max-w-880 flex-col gap-5 px-3 py-10 sm:px-3'>
				<p className='text-sm font-semibold text-primary-light'>Way of work</p>
				<h2 className='pt-1 text-lg font-semibold text-black dark:text-white'>
					My Process
				</h2>
				<div className='flex flex-wrap justify-start gap-11 pt-8'>
					{process.map((p) => (
						<div key={p._key} className='flex flex-col items-center'>
							<div className=' flex h-16 w-16 items-center justify-center rounded-full bg-white-800 dark:bg-black-300'>
								<Image
									src={p.icon}
									className='mx-auto'
									width={40}
									height={40}
									alt={p.title}
								/>
							</div>
							<p className='py-2 text-center text-sm font-semibold text-black dark:text-white'>
								{p.title}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

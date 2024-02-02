import Loader from '@/components/shared/Loader';

export default function Loading() {
	return (
		<div className='mx-auto size-full max-w-600'>
			<div className='mx-auto h-5 max-w-150 rounded-full bg-gray-200 dark:bg-gray-800'></div>
			<div className='mx-auto mt-3 h-7 max-w-500 rounded-full bg-gray-200 dark:bg-gray-800'></div>
			<div className='inline-flex size-full justify-center pt-7'>
				<Loader />
			</div>
			<div className='mx-auto mt-4 flex max-w-600 justify-center gap-5 pt-6'>
				<div className='h-7 w-full max-w-200 animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-800'></div>
				<div className='h-7 w-full max-w-200 animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-800'></div>
			</div>
		</div>
	);
}

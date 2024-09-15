
export default function Loading() {
  return (
    <div className='mx-auto size-full max-w-600 min-h-svh overflow-hidden'>
      <div className='mx-auto h-5 max-w-150 rounded-full  bg-gray-800'></div>
      <div className='mx-auto mt-3 h-7 max-w-500 rounded-full bg-gray-800'></div>
      <div className='inline-flex size-full justify-center pt-7'>
        <div className='m-2 min-h-300 w-full max-w-350 animate-pulse rounded-2xl bg-gray-800'></div>
      </div>
      <div className='mx-auto mt-4 flex max-w-600 justify-center gap-5 pt-6'>
        <div className='h-7 w-full max-w-200 animate-pulse rounded-2xl bg-gray-800'></div>
        <div className='h-7 w-full max-w-200 animate-pulse rounded-2xl bg-gray-800'></div>
      </div>
    </div>
  );
}

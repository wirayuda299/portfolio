import Image from 'next/image'

export default function Loading() {
  return (
    <div className="flex bg-black-200  w-full min-h-svh justify-center items-center">
      <Image
        alt='logo'
        src='/logo.svg'
        width={50}
        height={50}

      />

    </div>
  )
}

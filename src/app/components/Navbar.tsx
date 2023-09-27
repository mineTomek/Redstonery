'use client'

import Image from 'next/image'

export default function Navbar() {
  return (
    <div className='inline-flex h-24 w-full items-center justify-center gap-4 border-b-2 border-black border-opacity-20 bg-slate-100 px-4 fixed'>
      <div className='flex'>
        <div className='text-[43.5px] font-black text-slate-900'>
          Redstone A
        </div>
        <Image
          alt=''
          className='h-12 w-12 [image-rendering:pixelated] -mx-5'
          src='/redstone_torch.png'
          width={16}
          height={16}
        />
      </div>
    </div>
  )
}

'use client'

import Image from 'next/image'

export default function Navbar() {
  return (
    <div className='inline-flex h-24 w-full items-center justify-center gap-4 border-b-2 border-black border-opacity-20 bg-white/40 backdrop-blur-lg px-4 fixed z-10'>
      <div className='flex'>
        <div className='text-[43.5px] font-black text-slate-950'>
          Redstone A
        </div>
        <Image
          alt=''
          className='h-12 w-12 [image-rendering:pixelated] -mx-5'
          width={16}
          height={16}
          src='/assets/textures/redstone_torch.png'
        />
      </div>
    </div>
  )
}

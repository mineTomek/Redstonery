'use client'

import { faCubes as simulationIcon } from '@fortawesome/free-solid-svg-icons'
import Button from './components/Button'
import Navbar from './components/Navbar'
import Simulator from './simulation/Simulator'

export default function Home() {
  return (
    <main className=''>
      <Navbar />

      <div className='px-6 grid h-[100dvh]'>
        <Simulator circuit='clock' className='relative after:absolute after:bg-gradient-to-t after:from-gray-950 after:to-transparent after:bottom-0 after:w-full after:h-16' />
        <div className='h-[50dvh] text-center flex flex-col gap-12'>
          <div className='tracking-wider text-lg font-bold'>
            Simulating redstone since... not yet.
          </div>
          <div className='tracking-wider text-lg'>
            A redstone simulator that helps you create better redstone
            contraptions
          </div>
          <Button
            color='primary'
            icon={simulationIcon}
            text='Start simulating'
            onClick={router => {
              router.push('/simulator')
            }}
          />
        </div>
      </div>
    </main>
  )
}

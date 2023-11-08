import {
  faRightToBracket as signUpIcon,
} from '@fortawesome/free-solid-svg-icons'
import Button from './components/Button'
import Navbar from './components/Navbar'
import Simulator from './simulation/Simulator'

export default function Home() {
  return (
    <main className='bg-white min-h-screen'>
      <Navbar />

      <div className='inline-flex flex-col items-center pb-6 gap-3 w-full h-screen justify-between'>
        <Simulator circuit='clock' className="[height:40rem!important;]"/>
        <div className='self-stretch text-center text-[28px] font-black text-slate-800 px-4'>
          Simulating redstone since... not yet.
        </div>
        <div className='w-[340px] text-center text-lg font-black text-slate-700'>
          A redstone simulator that helps you create better redstone contraptions
        </div>
        <Button
          color='primary'
          icon={signUpIcon}
          iconSize={36}
          href='/'
          text='Start simulating'
          // onClick={e => {
          //   console.log('Hi!')
          //   console.log(e)
          // }}
        />
      </div>
    </main>
  )
}

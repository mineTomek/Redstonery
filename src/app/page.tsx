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

      <div className='inline-flex flex-col items-center pb-6 w-full h-screen justify-between'>
        <Simulator circuit='clock' />
        <div className='self-stretch text-center text-[28px] font-black text-slate-800'>
          Create Amazing Redstone Contraptions with Ease
        </div>
        <div className='w-[340px] text-center text-base font-black text-slate-700'>
          A redstone simulator that helps you create better redstone contraptions
        </div>
        <Button
          color='primary'
          icon={signUpIcon}
          iconSize={36}
          href='/'
          // onClick={e => {
          //   console.log('Hi!')
          //   console.log(e)
          // }}
        />
      </div>
    </main>
  )
}

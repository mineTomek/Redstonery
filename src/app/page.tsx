import {
  faAnglesDown,
  faRightToBracket as signUpIcon,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
          Redstone AI is a powerful tool that can help you to create powerful
          redstone contraptions. Simply describe your contraption, and our tool
          will generate it for you.
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
        <div>
          <FontAwesomeIcon
            icon={faAnglesDown}
            className='text-slate-900'
            width={32}
            height={32}
          />
        </div>
      </div>
    </main>
  )
}

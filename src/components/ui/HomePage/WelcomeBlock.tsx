import Image from 'next/image'
import firstWelcomeImg from '@/public/firstWelcomeImg.png'
import {welcome} from '@/locales/en/welcome'

export function WelcomeBlock() {
  return (
    <div className='blockWithImg h-1/4 w-full relative flex'>
      <Image src={firstWelcomeImg} alt='img' className='firstImg w-1/2 object-cover'/>
      <div className='textBlock w-1/2 bg-[#fde3e5] flex flex-col justify-center content-evenly items-center gap-y-8'>
        <p className='title text-5xl font-light text-center'>{welcome.title}</p>
        <p className='description text-xl'>{welcome.description}</p>
        <button className='redirectBnt'>{welcome.btn}</button>
      </div>
    </div>
  )
}

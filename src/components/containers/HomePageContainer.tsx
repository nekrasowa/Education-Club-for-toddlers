import { Classes } from '../ui/HomePage/Classes'
import Image from 'next/image'
import { WelcomeBlock } from '../ui/HomePage/WelcomeBlock'
import secondWelcomeImg from '@/public/secondWelcomeImg.png'

export function HomePageContainer() {
  return (
    <>
      <WelcomeBlock />
      <Classes />
      <Image alt='' src={secondWelcomeImg} />
    </>
  )
}

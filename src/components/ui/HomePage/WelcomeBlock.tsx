import Image from 'next/image'
import firstWelcomeImg from '@/public/firstWelcomeImg.png'

export function WelcomeBlock() {
  return (
    <div className="blockWithImg">
      <Image src={firstWelcomeImg} alt="img" />
      <div className="textBlock">
        <p className="title"></p>
        <p className="description"></p>
        <button className="redirectBnt"></button>
      </div>
    </div>
  )
}

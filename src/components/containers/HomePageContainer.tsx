'use client'

import { Classes } from '../ui/HomePage/Classes'
import Image from 'next/image'
import { MouseEventHandler } from 'react'
import { InfoBlockWithImg } from '../elements/InfoBlockWithImg'
import firstWelcomeImg from '@/public/firstWelcomeImg.png'
import secondWelcomeImg from '@/public/secondWelcomeImg.png'
import { welcome } from '@/locales/en/welcome'

export function HomePageContainer() {
  const redirectBtnProps: {
    addedClassName?: string
    onClick: MouseEventHandler<HTMLElement>
    btnText: string
    linkHref: string
    testId?: string
  } = {
    onClick: () => console.log('click'),
    addedClassName: '',
    btnText: welcome.btn,
    linkHref: 'programs',
    testId: 'homePageContInfoBtn'
  }
  return (
    <>
      <InfoBlockWithImg
        imgSrc={firstWelcomeImg}
        titleText={welcome.title}
        descriptionText={welcome.description}
        btn={redirectBtnProps}
      />
      <Classes />
      <Image alt='' src={secondWelcomeImg} />
    </>
  )
}

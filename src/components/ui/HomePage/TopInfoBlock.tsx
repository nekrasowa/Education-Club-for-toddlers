'use client'

import { BlueBtn } from '@/components/elements/BlueBtn'
import Image, { StaticImageData } from 'next/image'
import { MouseEventHandler } from 'react'

export function TopInfoBlock({
  img,
  title,
  text,
  btn,
}: {
  img: string | StaticImageData
  title: string
  text: string
  btn?: {
    addedClassName?: string
    onClick: MouseEventHandler<HTMLElement>
    btnText: string
  }
}) {
  return (
    <>
      <div className='blockWithImg h-1/4 w-full relative flex'>
        <Image src={img} alt='img' className='firstImg w-1/2 object-cover' />
        <div className='textBlock w-1/2 bg-[#fde3e5] flex flex-col justify-center content-evenly items-center gap-y-8'>
          <p className='title text-5xl font-light text-center'>{title}</p>
          <p className='description text-xl'>{text}</p>
          {btn && (
            <BlueBtn
              addedClassName={btn.addedClassName || ''}
              onClick={btn.onClick}
              text={btn.btnText}
            />
          )}
        </div>
      </div>
    </>
  )
}

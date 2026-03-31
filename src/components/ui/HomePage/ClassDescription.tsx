'use client'

import Image, { StaticImageData } from 'next/image'

import { BlueBtn } from '@/components/elements/BlueBtn'

export function ClassDescription({
  imgSrc,
  titleText,
  descriptionText,
  btnText,
  side,
}: {
  imgSrc: StaticImageData
  titleText: string
  descriptionText: string
  btnText: string
  side: 'right' | 'left'
}) {
  const isLeft = side === 'left'
  return (
    <div className='classWrap flex justify-between my-20'>
      <Image
        alt={`${titleText} image`}
        src={imgSrc}
        className={`${isLeft ? 'order-1' : 'order-2'} h-90 w-auto mx-auto`}
      />
      <div className={`${isLeft ? 'order-2' : 'order-1'} px-20 py-15`}>
        <p className='title  text-3xl pb-10'>{titleText}</p>
        <p className='description text-xl pb-10'>{descriptionText}</p>
        <BlueBtn
          onClick={() => console.log('click:', titleText)}
          text={btnText}
        />
      </div>
    </div>
  )
}

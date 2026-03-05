'use client'

import Image, { StaticImageData } from 'next/image'

import { BlueBtn } from '@/components/elements/BlueBtn'

export function ClassDescription({
  imgSrc,
  titleText,
  descriptionText,
  btnText,
}: {
  imgSrc: StaticImageData
  titleText: string
  descriptionText: string
  btnText: string
}) {
  return (
    <div className='classWrap'>
      <Image alt={`${titleText} image`} src={imgSrc} />
      <p className='title'>{titleText}</p>
      <p className='description'>{descriptionText}</p>
      <BlueBtn
        onClick={() => console.log('click:', titleText)}
        text={btnText}
      />
    </div>
  )
}

'use client'

import Image, { StaticImageData } from 'next/image'

import { BlueBtn } from '@/components/elements/BlueBtn'
import { MouseEventHandler } from 'react'

export function InfoBlockWithImg({
  imgSrc,
  titleText,
  descriptionText,
  btn,
  side = 'left',
  isCentered = true,
}: {
  imgSrc: StaticImageData
  titleText: string
  descriptionText: string
  btn?: {
    addedClassName?: string
    onClick: MouseEventHandler<HTMLElement>
    btn: string
  }
  side?: 'right' | 'left'
  isCentered?: boolean
}) {
  const isLeft = side === 'left'
  return (
    <div
      className={`blockWithImg h-1/4 w-full relative flex ${isCentered ? '' : 'justify-between my-20'}`}
    >
      <Image
        alt={`${titleText} image`}
        src={imgSrc}
        className={`${isLeft ? 'order-1' : 'order-2'} ${isCentered ? 'w-1/2 object-cover ' : 'h-90 w-auto mx-auto'} `}
      />
      <div
        className={`${isLeft ? 'order-2' : 'order-1'} ${isCentered ? 'flex flex-col justify-center w-1/2 bg-[#fde3e5] content-evenly items-center gap-y-8' : 'px-20 py-15'} `}
      >
        <p
          className={`title font-light ${isCentered ? 'text-5xl text-center' : 'text-3xl pb-10'}`}
        >
          {titleText}
        </p>
        <p
          className={`description text-xl ${isCentered ? 'text-center' : 'text-xl pb-10'}`}
        >
          {descriptionText}
        </p>
        {btn && (
          <BlueBtn
            addedClassName={btn.addedClassName || ''}
            onClick={btn.onClick}
            text={btn.btn}
          />
        )}
      </div>
    </div>
  )
}

'use client'

import Image, { StaticImageData } from 'next/image'
import { TBlockSide, conLeft } from '@/types/commonTypes'

import { BlueBtn } from '@/components/elements/BlueBtn'
import Link from 'next/link'
import { MouseEventHandler } from 'react'

export function InfoBlockWithImg({
  imgSrc,
  titleText,
  descriptionText,
  btn,
  side = conLeft,
  isCentered = true,
  bg = '',
}: {
  imgSrc: StaticImageData
  titleText: string
  descriptionText: string
  btn?: {
    addedClassName?: string
    onClick?: MouseEventHandler<HTMLElement>
    btnText: string
    linkHref?: string
  }
  side?: TBlockSide
  isCentered?: boolean
  bg?: string
}) {
  const isLeft = side === conLeft

  return (
    <div
      className={`blockWithImg h-1/4 w-full relative flex ${isCentered ? '' : 'justify-between my-20'}`}
    >
      <Image
        alt={`${titleText} image`}
        src={imgSrc}
        className={`${isLeft ? 'order-1' : 'order-2'} ${isCentered ? 'w-1/2 object-cover' : 'h-90 w-auto mx-auto'} `}
      />
      <div
        className={`${isLeft ? 'order-2' : 'order-1'} ${bg} ${isCentered ? 'flex flex-col justify-center w-1/2 content-evenly items-center gap-y-8 px-20' : 'py-15'} `}
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
        {btn &&
          (btn.linkHref ? (
            <Link href={btn.linkHref}>
              <BlueBtn
                addedClassName={btn.addedClassName || ''}
                text={btn.btnText}
              />
            </Link>
          ) : (
            <BlueBtn
              addedClassName={btn.addedClassName || ''}
              onClick={btn.onClick}
              text={btn.btnText}
            />
          ))}
      </div>
    </div>
  )
}

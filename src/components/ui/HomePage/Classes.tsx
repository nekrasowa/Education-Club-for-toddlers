import { StaticImageData } from 'next/image'
import class1 from '@/public/class1.png'
import class2 from '@/public/class2.png'
import class3 from '@/public/class3.png'
import { welcome } from '@/locales/en/welcome'
import { InfoBlockWithImg } from '@/components/elements/InfoBlockWithImg'
import { MouseEventHandler } from 'react'
import { blockSide } from '@/services/styleFunctions'

const classes: {
  imgSrc: StaticImageData
  titleText: string
  descriptionText: string
  btn?: {
    onClick: MouseEventHandler<HTMLElement>
    btnText: string
  }
}[] = [
  {
    imgSrc: class1,
    titleText: welcome.name1,
    descriptionText: welcome.description1,
    btn: {
      onClick: () => {},
      btnText: welcome.classBtn,
    },
  },
  {
    imgSrc: class2,
    titleText: welcome.name2,
    descriptionText: welcome.description2,
    btn: {
      onClick: () => {},
      btnText: welcome.classBtn,
    },
  },
  {
    imgSrc: class3,
    titleText: welcome.name3,
    descriptionText: welcome.description3,
    btn: {
      onClick: () => {},
      btnText: welcome.classBtn,
    },
  },
]

export function Classes() {
  return (
    <>
      <div className='addedInfo bg-emerald-100 px-20 py-15 mt-30 text-2xl text-center whitespace-pre-line'>
        {welcome.addedInfo}
      </div>
      <h1 className='classesTitle text-5xl mt-20 text-center'>
        {welcome.classes}
      </h1>
      <p className='classesDescription text-xl mt-7 mb-15 mx-[10vw] text-center'>
        {welcome.classesDescription}
      </p>
      {classes.map((classItem, i) => (
        <InfoBlockWithImg
          key={i}
          imgSrc={classItem.imgSrc}
          titleText={classItem.titleText}
          descriptionText={classItem.descriptionText}
          btn={classItem.btn}
          side={blockSide(i)}
          isCentered={false}
        />
      ))}
    </>
  )
}

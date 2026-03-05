import { ClassDescription } from './ClassDescription'
import { StaticImageData } from 'next/image'
import class1 from '@/public/class1.png'
import class2 from '@/public/class2.png'
import class3 from '@/public/class3.png'
import { welcome } from '@/locales/en/welcome'

const classes: {
  imgSrc: StaticImageData
  titleText: string
  descriptionText: string
}[] = [
  {
    imgSrc: class1,
    titleText: welcome.name1,
    descriptionText: welcome.description1,
  },
  {
    imgSrc: class2,
    titleText: welcome.name2,
    descriptionText: welcome.description2,
  },
  {
    imgSrc: class3,
    titleText: welcome.name3,
    descriptionText: welcome.description3,
  },
]

export function Classes() {
  return (
    <>
      {classes.map((classItem, i) => (
        <ClassDescription
          key={i}
          imgSrc={classItem.imgSrc}
          titleText={classItem.titleText}
          descriptionText={classItem.descriptionText}
          btnText={welcome.classBtn}
        />
      ))}
    </>
  )
}

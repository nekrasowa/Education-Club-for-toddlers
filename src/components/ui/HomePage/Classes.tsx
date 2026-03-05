import { ClassDescription } from './ClassDescription'
import class1 from '@/public/class1.png'
import class2 from '@/public/class2.png'
import class3 from '@/public/class3.png'
import { welcome } from '@/locales/en/welcome'

export function Classes() {
  return (
    <>
      <ClassDescription
        imgSrc={class1}
        titleText={welcome.name1}
        descriptionText={welcome.description1}
        btnText={welcome.classBtn}
      />
      <ClassDescription
        imgSrc={class2}
        titleText={welcome.name2}
        descriptionText={welcome.description2}
        btnText={welcome.classBtn}
      />
      <ClassDescription
        imgSrc={class3}
        titleText={welcome.name3}
        descriptionText={welcome.description3}
        btnText={welcome.classBtn}
      />
    </>
  )
}

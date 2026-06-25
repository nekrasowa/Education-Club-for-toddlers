import { TTeacherItem, teacherList } from '@/public/teacherList'

import { H2Title } from '../elements/H2Title'
import { InfoBlockWithImg } from '../elements/InfoBlockWithImg'
import { TeacherCard } from '../ui/AboutPage/TeacherCard'
import { about } from '@/locales/en/about'
import aboutPageTop from '@/public/aboutPageTop.png'

export function AboutContainer() {
  return (
    <>
      <InfoBlockWithImg
        imgSrc={aboutPageTop}
        titleText={about.title}
        descriptionText={about.description}
        bg='bg-[#fde3e5]'
      />

      <div className='bg-[#d8f5e1] text-center mt-20'>
        <H2Title title={about.subtitle} addedClassName='pb-10 ' />
        <p className='text-xl px-40 pb-5'>{about.description2} </p>
        <p className='text-xl px-40 pb-20'>{about.description3} </p>
      </div>

      <H2Title title={about.teachersTitle} addedClassName='text-2xl pb-5' />
      <p className='px-60 text-center text-xl pb-20'>
        {about.teachersIntroduce}
      </p>

      <div className='teacherCardBlock flex flex-row justify-between gap-20'>
        {teacherList.map((teacher: TTeacherItem, i: number) => {
          return (
            <TeacherCard
              key={i}
              imgSrc={teacher.imgSrc}
              teacherName={teacher.teacherName}
              className={teacher.className}
              description={teacher.description}
              email={teacher.email}
              number={teacher.number}
            />
          )
        })}
      </div>
      
      <H2Title title={about.commentsTitle} />
      
    </>
  )
}

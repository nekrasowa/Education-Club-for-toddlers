// import { BlueBtn } from '../elements/BlueBtn'
import { FilteringClassesList } from '../ui/ClassesSchedule/FilteringClassesList'
import { InfoBlockWithImg } from '../elements/InfoBlockWithImg'
import { schedule } from '@/locales/en/schedule'
import bookTopImg from '@/public/class3.png'

export function ClassesScheduleContainer() {
  return (
    <>
      <InfoBlockWithImg
        imgSrc={bookTopImg}
        titleText={schedule.topTitle}
        descriptionText={schedule.description}
      />
      <FilteringClassesList />
    </>
  )
}

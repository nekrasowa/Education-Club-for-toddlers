// import { BlueBtn } from '../elements/BlueBtn'
import { FilteringClassesList } from '../ui/ClassesSchedule/FilteringClassesList'
import { TopInfoBlock } from '../ui/HomePage/TopInfoBlock'
import { schedule } from '@/locales/en/schedule'
import bookTopImg from '@/public/class3.png'

export function ClassesScheduleContainer() {
  return (
    <>
      <TopInfoBlock
        img={bookTopImg}
        title={schedule.topTitle}
        description={schedule.description}
      />
      <FilteringClassesList />
      {/* <BlueBtn text={schedule.loadMore} /> */}
    </>
  )
}

import { BackBtn } from '../elements/BackBtn'
import { CalendarBlock } from '../ui/ClassListPage/CalendarBlock'
import { ClassDetails } from '../ui/ClassListPage/ClassDetails'
import { H2Title } from '../elements/H2Title'
import { book } from '@/locales/en/book'

export function ClassListItemContainer() {
  return (
    <>
      <BackBtn link={'/class_list'}/>
      <H2Title title={book.bookItemTitle} addedClassName='text-5xl text-left pb-7 text-[#09246c]'/>
      <p className='subtitle text-lg text-[#09246c]'>{book.bookItemSubtitle}</p>
      <div className='flex flex-row w-[100%] gap-10'>
        <CalendarBlock />
        <ClassDetails />
      </div>
    </>
  )
}

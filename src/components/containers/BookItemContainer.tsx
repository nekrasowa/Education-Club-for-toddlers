import { BackBtn } from '../elements/BackBtn'
import { CalendarBlock } from '../ui/BookPage/CalendarBlock'
import { ClassDetails } from '../ui/BookPage/ClassDetails'
import { H2Title } from '../elements/H2Title'
import { book } from '@/locales/en/book'

export function BookItemContainer() {
  return (
    <>
      <BackBtn link={'/book'}/>
      <H2Title title={book.bookItemTitle} />
      <p className='subtitle'>{book.bookItemSubtitle}</p>
      <div>
        <CalendarBlock />
        <ClassDetails />
      </div>
    </>
  )
}

import { BackBtn } from '../elements/BackBtn'
import { CalendarBlock } from '../ui/ClassListPage/CalendarBlock'
import { EventDetails } from '../elements/EventDetails'
import { H2Title } from '../elements/H2Title'
import { book } from '@/locales/en/book'

export function ClassListItemContainer() {
  const id = 1
  return (
    <>
      <BackBtn link={'/class_list'} />
      <H2Title
        title={book.bookItemTitle}
        addedClassName='text-5xl text-left pb-7 text-[#09246c]'
      />
      <p className='subtitle text-lg text-[#09246c]'>{book.bookItemSubtitle}</p>
      <div className='flex flex-row w-[100%] gap-10'>
        <CalendarBlock />
        <EventDetails
          title={book.serviceDetails}
          btnText={book.next}
          btnHref={`/book/${id}`}
        />
      </div>
    </>
  )
}

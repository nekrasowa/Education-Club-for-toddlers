import { ClassesList } from '../ui/BookPage/ClassesList'
import { TopInfoBlock } from '../ui/HomePage/TopInfoBlock'
import { book } from '@/locales/en/book'
import bookTopImg from '@/public/bookTopImg.png'

export function ClassListContainer() {
  return (
    <>
      <TopInfoBlock
        img={bookTopImg}
        title={book.topBlockTitle}
        description={book.description}
      />
      <ClassesList />
    </>
  )
}

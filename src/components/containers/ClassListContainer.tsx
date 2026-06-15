import { ClassesList } from '../ui/ClassListPage/ClassesList'
import { TopInfoBlock } from '../elements/TopInfoBlock'
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

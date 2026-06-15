import { ClassesList } from '../ui/ClassListPage/ClassesList'
import { InfoBlockWithImg } from '../elements/InfoBlockWithImg'
import { book } from '@/locales/en/book'
import bookTopImg from '@/public/bookTopImg.png'

export function ClassListContainer() {
  return (
    <>
      <InfoBlockWithImg
        imgSrc={bookTopImg}
        titleText={book.topBlockTitle}
        descriptionText={book.description}
      />
      <ClassesList />
    </>
  )
}

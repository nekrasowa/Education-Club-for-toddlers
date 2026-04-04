import { ClassItem } from './ClassItem'
import { H2Title } from '@/components/elements/H2Title'
import { ThinLine } from '@/components/elements/ThinLine'
import { book } from '@/locales/en/book'
import { classesList } from '@/public/classesList'

export function ClassesList() {
  return (
    <>
      <H2Title title={book.classesTitle} />
      {classesList.map((item) => (
        <ClassItem
          id={item.id}
          key={item.id}
          activity={item.activity}
          age_group={item.age_group}
          day={item.day}
          time={item.time}
          price={item.price}
          description={item.description}
        />
      ))}
      <ThinLine />
    </>
  )
}

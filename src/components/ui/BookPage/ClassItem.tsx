'use client'
import { BlueBtn } from '@/components/elements/BlueBtn'
import {book} from '@/locales/en/book'
export function ClassItem({
  id,
  age_group,
  activity,
  description,
  day,
  time,
  price,
}: {
  id: number
  activity: string
  age_group: string
  day: string
  time: string
  price: string
  description: string
}) {
  return (
    <div>
      <div className='line'></div>
      <div className='classBlock'>
        <p className='title&age'>{`${activity} (${age_group} ${book.years})`}</p>
        <p className='description'>{description}</p>
        <p className='day'>{day}</p>
        <p className='duration'>{time}</p>
        <p className='price'>{price}</p>
        <BlueBtn onClick={() => console.log('click on id:', id)} text={book.bookBtn} />
      </div>
    </div>
  )
}

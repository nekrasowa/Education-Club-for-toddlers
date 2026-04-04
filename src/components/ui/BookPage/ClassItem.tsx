'use client'

import { BlueBtn } from '@/components/elements/BlueBtn'
import { ThinLine } from '@/components/elements/ThinLine'
import { book } from '@/locales/en/book'
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
    <>
      <ThinLine />
      <div className='classBlock h-40 flex flex-row text-lg text-[#09246c]'>
        <div className='block1 flex flex-col basis-1/2'>
          <p className='title&age pb-2 font-semibold text-xl'>{`${activity} (${age_group} ${book.years})`}</p>
          <p className='description '>{description}</p>
        </div>
        <div className='block2 flex flex-col basis-1/8 text-center'>
          <p className='day pb-2 '>{day}</p>
          <p className='duration pb-2'>{time}</p>
          <p className='price'>{price}</p>
        </div>
        <div className=' ml-auto'>
          <BlueBtn
            onClick={() => console.log('click on id:', id)}
            text={book.bookBtn}
          />
        </div>
      </div>
    </>
  )
}

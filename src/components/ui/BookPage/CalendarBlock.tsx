'use client'

import './CalendarBlock.css'

import { BlueBtn } from '@/components/elements/BlueBtn'
import { H2Title } from '@/components/elements/H2Title'
import Select from 'antd/es/select'
import { ThinLine } from '@/components/elements/ThinLine'
import { book } from '@/locales/en/book'
import MyCalendar from '@/components/elements/Calendar'

export function CalendarBlock() {
  return (
    <div className='flex flex-col grow-1000 max-w-2/3'>
      <div className='flex  flew-row items-baseline flex-wrap justify-between gap-5 '>
        <H2Title title={book.select} addedClassName='w-1/3 pb-3 text-left' />
        <Select
          defaultValue='tzEuropa'
          onChange={() => console.log('select')}
          options={[
            { value: 'tzEuropa', label: book.tzEuropa },
            { value: 'tzPDT', label: book.tzPDT },
          ]}
        />
      </div>
      <ThinLine pb={'pb-5'} />
      <div className='flex flew-row flew-wrap'>
        <MyCalendar />
        <div className='flex-col w-1/2'>
          <p className='availability text-lg'>{`${book.availability} Monday, April 13`}</p>
          <BlueBtn
            onClick={() => console.log('click')}
            text={book.check}
            addedClassName='w-[100%] mt-10'
          />
        </div>
      </div>
    </div>
  )
}

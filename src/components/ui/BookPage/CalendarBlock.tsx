'use client'

import { BlueBtn } from '@/components/elements/BlueBtn'
import { H2Title } from '@/components/elements/H2Title'
import Select from 'antd/es/select'
import { ThinLine } from '@/components/elements/ThinLine'
import { book } from '@/locales/en/book'

export function CalendarBlock() {
  return (
    <div className='flex flex-col grow-1000 max-w-2/3'>
      <div className='flex  flew-row items-baseline flex-wrap justify-between gap-5 '>
        <H2Title title={book.select} addedClassName='w-1/3 pb-3' />
        <Select
          defaultValue='tzEuropa'
          style={{ width: 120 }}
          onChange={() => console.log('select')}
          options={[
            { value: 'tzEuropa', label: book.tzEuropa },
            { value: 'tzPDT', label: book.tzEuropa },
          ]}
        />
      </div>
      <ThinLine />
      <div className='flex flew-row flew-wrap'>
        <div className='datapicker w-1/2 h-50'></div>
        <div className='flex-col'>
          <p className='availability'>{`${book.availability} `}</p>
          <BlueBtn onClick={() => console.log('click')} text={book.check} />
        </div>{' '}
      </div>
    </div>
  )
}

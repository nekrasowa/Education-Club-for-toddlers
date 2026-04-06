'use client'

import { H2Title } from '@/components/elements/H2Title'
import Select from 'antd/es/select'
import { ThinLine } from '@/components/elements/ThinLine'
import { book } from '@/locales/en/book'
import { BlueBtn } from '@/components/elements/BlueBtn'

export function CalendarBlock() {
  return (
    <>
      <H2Title title={book.select} />
      <ThinLine />
      <div className='datapicker'></div>
      <Select
        defaultValue='tzEuropa'
        style={{ width: 120 }}
        onChange={() => console.log('select')}
        options={[
          { value: 'tzEuropa', label: book.tzEuropa },
          { value: 'tzPDT', label: book.tzEuropa },
        ]}
      />
      <ThinLine />
      <p className='availability'>{`${book.availability} `}</p>
      <BlueBtn onClick={() =>console.log('click')} text={book.check} />
    </>
  )
}

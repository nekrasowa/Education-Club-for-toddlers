'use client'

import { BlueBtn } from '@/components/elements/BlueBtn'
import Collapse from 'antd/es/collapse/Collapse'
import { H2Title } from '@/components/elements/H2Title'
import { ThinLine } from '@/components/elements/ThinLine'
import { book } from '@/locales/en/book'

export function ClassDetails() {
  const text = 'extra Text'
  return (
    <>
      <H2Title title={book.serviceDetails} />
      <ThinLine />
      <p className='shortInfo'></p>
      <Collapse
        items={[{ key: '1', label: 'less text', children: <p>{text}</p> }]}
      />
      <BlueBtn onClick={() => console.log('click')} text={book.next} />
    </>
  )
}

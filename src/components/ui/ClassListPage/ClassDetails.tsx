'use client'

import { BlueBtn } from '@/components/elements/BlueBtn'
import CaretDownOutlined from '@ant-design/icons/lib/icons/CaretDownOutlined'
import Collapse from 'antd/es/collapse/Collapse'
import { H2Title } from '@/components/elements/H2Title'
import { ThinLine } from '@/components/elements/ThinLine'
import { book } from '@/locales/en/book'

export function ClassDetails() {
  const text = 'extra Text'
  return (
    <div className='flex flex-col w-1/3'>
      <H2Title title={book.serviceDetails} addedClassName='pb-3 text-left' />
      <ThinLine pb={'pb-5'} />
      <p className='shortInfo mb-3 text-lg'>Class</p>
      <Collapse
        bordered={false}
        style={{ background: '#fff', fontSize: '18px', marginBottom: '20px'}}
        expandIconPosition='end'
        expandIcon={({ isActive }) => (
          <CaretDownOutlined
            style={{
              transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: '0.2s',
            }}
          />
        )}
        items={[
          {
            key: '1',
            label: <p className='label text-lg m-0'>{book.more}</p>,
            children: <p className='extra'>{text}</p>,
          },
        ]}
      />
      <BlueBtn onClick={() => console.log('click')} text={book.next} />
    </div>
  )
}

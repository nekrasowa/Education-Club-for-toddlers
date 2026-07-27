'use client'

import { BlueBtn } from './BlueBtn'
import CaretDownOutlined from '@ant-design/icons/lib/icons/CaretDownOutlined'
import { Collapse } from 'antd'
import { H2Title } from './H2Title'
import Link from 'next/dist/client/link'
import { ThinLine } from './ThinLine'
import { book } from '@/locales/en/book'

export function EventDetails({
  title,
  hasPayment = false,
  price,
  btnText,
  btnHref,
}: {
  title: string
  hasPayment?: boolean
  price?: string
  btnText: string
  btnHref: string
}) {
  const text = 'extra Text'

  return (
    <div className='details flex flex-col w-1/3'>
      <H2Title title={title} addedClassName='pb-3 text-left' />
      <ThinLine pb='pb-5' />
      <p className='shortInfo mb-3 text-lg'>{book.class}</p>
      <Collapse
        className='moreBlock'
        bordered={false}
        style={{
          background: '#fff',
          fontSize: '18px',
          marginBottom: '20px',
        }}
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
            label: (
              <p data-testid='moreBlock' className='label text-lg m-0'>
                {book.more}
              </p>
            ),
            children: (
              <p className='extra' data-testid='extraText'>
                {text}
              </p>
            ),
          },
        ]}
      />
      {hasPayment && (
        <>
          <ThinLine pb='pb-5' />
          <p className='shortInfo mb-3 text-lg'>{book.payment}</p>
          <div
            data-testid='priceBlock'
            className='priceBlock flex justify-between mt-2'
          >
            <p className='shortInfo mb-3 text-lg'>{book.total}</p>
            <p className='shortInfo mb-3 text-lg'>{price}</p>
          </div>
          <ThinLine pb='pb-5' />
        </>
      )}
      <Link href={btnHref}>
        <BlueBtn text={btnText} />
      </Link>
    </div>
  )
}

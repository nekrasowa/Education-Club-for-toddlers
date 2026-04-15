'use client'

import { BackBtn } from '../elements/BackBtn'
import { EventDetails } from '../elements/EventDetails'
import Form from 'antd/es/form/Form'
import { H2Title } from '../elements/H2Title'
import { book } from '@/locales/en/book'

export function BookFormContainer({id}: {id: string}) {
  return (
    <>
      <BackBtn link='' />
      <H2Title title='' />
      <div className='content'>
        <div className='form'>
          <H2Title title='' />
          <p className='login'></p>
          <Form />

          {/* move out */}
        </div>
        <EventDetails  title={book.bookDetails}  hasPayment={true}   price='20$'  btnText={book.bookNow} btnHref={`/book/${id}`} />

      </div>
    </>
  )
}

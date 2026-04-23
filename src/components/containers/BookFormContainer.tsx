'use client'

import { BackBtn } from '../elements/BackBtn'
import Button from 'antd/es/button/button'
import { ContactForm } from '../ui/ContactForm'
import { EventDetails } from '../elements/EventDetails'
import { H2Title } from '../elements/H2Title'
import { book } from '@/locales/en/book'
import { contact } from '@/locales/en/contact'

function submitBtn() {
  return (
    <Button type='primary' htmlType='submit' className='contactBtn'>
      {contact.book}
    </Button>
  )
}

export function BookFormContainer({ id }: { id: string }) {
  return (
    <>
      <BackBtn link='' />
      <H2Title title={contact.bookForm} />
      <div className='content'>
        <div className='form'>
          <H2Title title={contact.bookFormTitle} />
          <p className='login'></p>
          <ContactForm
            bgColor='#fff'
            textColor='#09246c'
            title={contact.bookFormTitle}
            messagePlaceholder={contact.message}
            submitBtn={submitBtn}
          />
        </div>
        <EventDetails
          title={book.bookDetails}
          hasPayment={true}
          price='20$'
          btnText={book.bookNow}
          btnHref={`/book/${id}`}
        />
      </div>
    </>
  )
}

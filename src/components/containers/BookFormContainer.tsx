'use client'

import { BackBtn } from '../elements/BackBtn'
import { ContactForm } from '../ui/ContactForm'
import { EventDetails } from '../elements/EventDetails'
import { H2Title } from '../elements/H2Title'
import { book } from '@/locales/en/book'
import { contact } from '@/locales/en/contact'

export function BookFormContainer({ id }: { id: string }) {
  return (
    <>
      <BackBtn link={`/class_list/${id}>`} /> 
      {/* адаптировать для разных страниц */}
      <H2Title title={contact.bookForm} addedClassName='text-4xl text-left pb-7 pt-15 text-[#09246c]'/>
      <div className='content flex'>
        <div className='form'>
          <H2Title title={contact.bookFormTitle} addedClassName='text-2xl text-center py-20 text-[#09246c] pb-3 text-left' />
          <p className='login'></p>
          <ContactForm
            bgColor='#fff'
            textColor='#09246c'
            title={contact.bookFormTitle}
            messagePlaceholder={contact.message}
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

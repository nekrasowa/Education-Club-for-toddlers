'use client'

import { Button } from 'antd'
import { ContactForm } from './ContactForm'
import FacebookOutlined from '@ant-design/icons/lib/icons/FacebookOutlined'
import InstagramOutlined from '@ant-design/icons/lib/icons/InstagramOutlined'
import PinterestOutlined from '@ant-design/icons/lib/icons/PinterestOutlined'
import { contact } from '@/locales/en/contact'

function submitBtn() {
  return (
    <Button type='primary' htmlType='submit' className='contactBtn'>
      {contact.submit}
    </Button>
  )
}

export function ContactBoard() {
  return (
    <div className='contactBoard bg-[#09246c] text-amber-50 my-30 h-fit flex flex-row gap-10 sm:gap-15 md:gap-25 lg:gap-40 lx:gap-60 px-[5%] py-[5%] whitespace-pre-line'>
      <div className='infoPart text-lg/relaxed min-w-70 '>
        <h2 className='infoTitle text-2xl pb-10'>{contact.infoTitle}</h2>
        <p className='subtitle pb-10'>{contact.subtitle}</p>
        <p className='address'>{contact.address}</p>
        <div className='icons flex gap-3 pt-5 text-2xl'>
          <FacebookOutlined />
          <InstagramOutlined />
          <PinterestOutlined />
        </div>
      </div>
      <div className='form w-[100%] max-w-[800px] mx-auto'>
        <h2 className='formTitle text-2xl pb-10'>{contact.formTitle}</h2>
        <ContactForm
          bgColor='#09246c'
          textColor='oklch(98.7% 0.022 95.277)'
          title={contact.formTitle}
          messagePlaceholder={contact.message}
          submitBtn={submitBtn}
        />
      </div>
    </div>
  )
}

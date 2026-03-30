import { ContactForm } from './ContactForm'
import FacebookOutlined from '@ant-design/icons/lib/icons/FacebookOutlined'
import InstagramOutlined from '@ant-design/icons/lib/icons/InstagramOutlined'
import PinterestOutlined from '@ant-design/icons/lib/icons/PinterestOutlined'
import { contact } from '@/locales/en/contact'

export function ContactBoard() {
  return (
    <div className='contactBoard bg-[#09246c] text-amber-50 my-30 h-150 flex flex-row gap-70 px-30 py-25 whitespace-pre-line'>
      <div className='infoPart text-lg/relaxed '>
        <h2 className='infoTitle text-2xl pb-10'>{contact.infoTitle}</h2>
        <p className='subtitle pb-10'>{contact.subtitle}</p>
        <p className='address'>{contact.address}</p>
        <div className='icons flex gap-3 pt-5 text-2xl'>
          <FacebookOutlined />
          <InstagramOutlined />
          <PinterestOutlined />
        </div>
      </div>
      <div className='form'>
        <h2 className='formTitle text-2xl'>{contact.formTitle}</h2>
        <ContactForm />
      </div>
    </div>
  )
}

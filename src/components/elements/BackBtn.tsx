import LeftOutlined from '@ant-design/icons/lib/icons/LeftOutlined'
import Link from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router'
import { book } from '@/locales/en/book'

export function BackBtn({ link }: { link: Url }) {
  return (
    <Link className='max-w-25 min-w-15 flex pt-10 pl-5' href={link}>
      <LeftOutlined />
      <p className='text-xl pl-2'>{book.back}</p>
    </Link>
  )
}

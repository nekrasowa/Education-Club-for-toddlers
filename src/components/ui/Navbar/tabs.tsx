import './Navbar.module.css'

import Link from 'antd/es/typography/Link'
import { TabsProps } from 'antd'
import { navNames } from '@/constants/navNames'

const tabClassName: string = `text-blue-950 text-2xl hover:text-blue-600 focus:text-blue-600  `

export const tabs: TabsProps['items'] = [
  {
    key: '1',
    label: (
      <span className={tabClassName}>
        <Link href='/'>{navNames.CHILDREN_EDUCATION}</Link>
      </span>
    ),
  },
  {
    key: '2',
    label: (
      <span className={tabClassName}>
        <Link href='/book'>{navNames.BOOK_A_CLASS}</Link>
      </span>
    ),
  },
  {
    key: '3',
    label: (
      <span className={tabClassName}>
        <Link href='/schedule'>{navNames.CLASS_SCHEDULE}</Link>
      </span>
    ),
  },
  {
    key: '4',
    label: (
      <span className={tabClassName}>
        <Link href='/programs'>{navNames.PROGRAMS}</Link>
      </span>
    ),
  },
  {
    key: '5',
    label: (
      <span className={tabClassName}>
        <Link href='/about'>{navNames.ABOUT}</Link>
      </span>
    ),
  },
  {
    key: '6',
    label: (
      <span className={tabClassName}>
        <Link href='/gallery'>{navNames.GALLERY}</Link>
      </span>
    ),
  },
  {
    key: '7',
    label: (
      <span className={tabClassName}>
        <Link href='/'>{navNames.CONTACT}</Link>
      </span>
    ),
  },
]

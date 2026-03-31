import './Navbar.module.css'

import { TabsProps } from 'antd'
import { navNames } from '@/constants/navNames'
import Link from 'next/dist/client/link'

const tabClassName: string = `text-blue-950 text-2xl hover:text-blue-600 focus:text-blue-600  `

export const tabs: TabsProps['items'] = [
  {
    key: '1',
    label: (
        <Link className={tabClassName} href='/' >{navNames.CHILDREN_EDUCATION}</Link>
    ),
  },
  {
    key: '2',
    label: (
        <Link className={tabClassName} href='/book'>{navNames.BOOK_A_CLASS}</Link>
    ),
  },
  {
    key: '3',
    label: (
        <Link className={tabClassName} href='/schedule'>{navNames.CLASS_SCHEDULE}</Link>
    ),
  },
  {
    key: '4',
    label: (
        <Link className={tabClassName} href='/programs'>{navNames.PROGRAMS}</Link>
    ),
  },
  {
    key: '5',
    label: (
        <Link className={tabClassName} href='/about'>{navNames.ABOUT}</Link>
    ),
  },
  {
    key: '6',
    label: (
        <Link className={tabClassName} href='/gallery'>{navNames.GALLERY}</Link>
    ),
  },
  {
    key: '7',
    label: (
        <Link className={tabClassName} href='/'>{navNames.CONTACT}</Link>
    ),
  },
]

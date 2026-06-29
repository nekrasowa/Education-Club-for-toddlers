import './Navbar.module.css'

import Link from 'next/dist/client/link'
import type { MouseEvent } from 'react'
import { TabsProps } from 'antd'
import { navNames } from '@/constants/navNames'

const tabClassName: string = `text-blue-950 text-2xl hover:text-blue-600 focus:text-blue-600  `

const scrollToContacts = (e: MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault()
  document
    .getElementById('contact_board')
    ?.scrollIntoView({ behavior: 'smooth' })
}

export const tabs: TabsProps['items'] = [
  {
    key: '1',
    label: (
      <Link className={tabClassName} href='/'>
        {navNames.CHILDREN_EDUCATION}
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link className={tabClassName} href='/class_list'>
        {navNames.BOOK_A_CLASS}
      </Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link className={tabClassName} href='/schedule'>
        {navNames.CLASS_SCHEDULE}
      </Link>
    ),
  },
  {
    key: '4',
    label: (
      <Link className={tabClassName} href='/programs'>
        {navNames.PROGRAMS}
      </Link>
    ),
  },
  {
    key: '5',
    label: (
      <Link className={tabClassName} href='/about'>
        {navNames.ABOUT}
      </Link>
    ),
  },
  {
    key: '7',
    label: (
      <Link className={tabClassName} href='/' onClick={scrollToContacts}>
        {navNames.CONTACT}
      </Link>
    ),
  },
]

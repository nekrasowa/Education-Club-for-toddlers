import { navNames } from '@/constants/navNames'
import './Navbar.module.css'

import { TabsProps } from 'antd'

const tabClassName: string = `text-blue-950 text-2xl hover:text-blue-600 focus:text-blue-600  `

export const tabs: TabsProps['items'] = [
  {
    key: '1',
    label: <span className={tabClassName}>{navNames.CHILDREN_EDUCATION}</span>,
    children: navNames.CHILDREN_EDUCATION,
  },
  {
    key: '2',
    label: <span className={tabClassName}>{navNames.BOOK_A_CLASS}</span>,
    children: navNames.BOOK_A_CLASS,
  },
  {
    key: '3',
    label: <span className={tabClassName}>{navNames.CLASS_SCHEDULE}</span>,
    children: navNames.CLASS_SCHEDULE
  },
  {
    key: '4',
    label: <span className={tabClassName}>{navNames.PROGRAMS}</span>,
    children: navNames.PROGRAMS,
  },
  {
    key: '5',
    label: <span className={tabClassName}>{navNames.ABOUT}</span>,
    children: navNames.ABOUT,
  },
  {
    key: '6',
    label: <span className={tabClassName}>{navNames.GALLERY}</span>,
    children: navNames.GALLERY,
  },
  {
    key: '7',
    label: <span className={tabClassName}>{navNames.CONTACT}</span>,
    children: navNames.CONTACT,
  },
]

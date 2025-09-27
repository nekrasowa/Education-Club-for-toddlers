import './Navbar.module.css'

import { TabsProps } from 'antd'

const tabClassName: string = `text-blue-950 text-2xl hover:text-blue-600 focus:text-blue-600  `

export const tabs: TabsProps['items'] = [
  {
    key: '1',
    label: <span className={tabClassName}>Children Education</span>,
    children: 'Children Education',
  },
  {
    key: '2',
    label: <span className={tabClassName}>Book a class</span>,
    children: 'Book a class',
  },
  {
    key: '3',
    label: <span className={tabClassName}>Class schedule</span>,
    children: 'Class schedule',
  },
  {
    key: '4',
    label: <span className={tabClassName}>Programs</span>,
    children: 'Programs',
  },
  {
    key: '5',
    label: <span className={tabClassName}>About</span>,
    children: 'About',
  },
  {
    key: '6',
    label: <span className={tabClassName}>Gallery</span>,
    children: 'Gallery',
  },
  {
    key: '7',
    label: <span className={tabClassName}>Contact</span>,
    children: 'Contact',
  },
]

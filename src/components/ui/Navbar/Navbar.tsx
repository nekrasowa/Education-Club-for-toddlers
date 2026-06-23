'use client'

import { Tabs } from 'antd'
import { tabs } from '@/components/ui/Navbar/tabs'

export function Navbar() {
  return (
    <>
      <nav className='text-blue-950 text-3xl'>
        <Tabs
          defaultActiveKey='1'
          items={tabs}
          indicator={{ size: 0 }}
          centered
        />
      </nav>
    </>
  )
}

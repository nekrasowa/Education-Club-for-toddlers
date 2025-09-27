'use client'

import { Tabs } from 'antd'
import { tabs } from '@/components/ui/Navbar/tabs'

const onChange = (key: string) => {
  console.log(key)
}

export function Navbar() {
  return (
    <>
      <div className='text-blue-950 text-3xl' >
        <Tabs
          defaultActiveKey="1"
          items={tabs}
          onChange={onChange}
          indicator={{ size: 0 }}
          centered
         
        />
      </div>
    </>
  )
}

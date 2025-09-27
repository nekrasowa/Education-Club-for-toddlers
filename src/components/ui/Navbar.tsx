'use client'

import { Tabs } from 'antd'
import { tabs } from '@/constants/tabs'

const onChange = (key: string) => {
  console.log(key)
}

export function Navbar() {
  return (
    <>
      <Tabs defaultActiveKey="1" items={tabs} onChange={onChange} />
    </>
  )
}

'use client'

import Button from 'antd/es/button/button'
import { ChatWindow } from './ChatWindow'
import WechatOutlined from '@ant-design/icons/lib/icons/WechatOutlined'
import { useState } from 'react'

export function Chat() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  const showChat = () => {
    setIsChatOpen(true)
  }

  // const handleOk = () => {
  //   setIsChatOpen(false)
  // }

  // const handleCancel = () => {
  //   setIsChatOpen(false)
  // }
  return (
    <>
      {isChatOpen ? (
        <ChatWindow />
      ) : (
        <Button
          type="primary"
          onClick={showChat}
          className="!bg-blue-900 !h-20 !w-60 !rounded-none !absolute !bottom-0 !right-10 flex items-center justify-center gap-2"
        >
          <WechatOutlined className="text-4xl" />
          <span className="text-2xl">Let’s chat</span>
        </Button>
      )}
    </>
  )
}

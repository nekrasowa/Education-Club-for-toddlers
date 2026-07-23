'use client'

import { useCallback, useState } from 'react'

import { BlueBtn } from '../elements/BlueBtn'
import { ChatWindow } from './ChatWindow'
import WechatOutlined from '@ant-design/icons/lib/icons/WechatOutlined'
import { chatText } from '@/locales/en/chat'

export function Chat() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  const showChat = useCallback(() => {
    setIsChatOpen(true)
  }, [])

  const handleCancel = useCallback(() => {
    setIsChatOpen(false)
  }, [])
  return (
    <>
      {!isChatOpen && (
        <BlueBtn
          onClick={showChat}
          addedClassName='!h-20 !w-60 !rounded-none !fixed !bottom-0 !right-10'
          icon={<WechatOutlined className='text-4xl' />}
          text={<span className='text-2xl'>{chatText.lets_chat}</span>}
        />
      )}
      {isChatOpen && <ChatWindow crossClick={handleCancel} />}
    </>
  )
}

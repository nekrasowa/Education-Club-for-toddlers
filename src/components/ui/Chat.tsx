'use client'

import Button from 'antd/es/button/button'
import Modal from 'antd/es/modal/Modal'
import WechatOutlined from '@ant-design/icons/lib/icons/WechatOutlined'
import { useState } from 'react'

export function Chat() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        className="!bg-blue-900 !h-20 !w-60 !rounded-none !absolute !bottom-0 !right-10 flex items-center justify-center gap-2"
      >
        <WechatOutlined className="text-4xl" />
        <span className="text-2xl">Let’s chat</span>
      </Button>
      <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
      </Modal>
    </>
  )
}

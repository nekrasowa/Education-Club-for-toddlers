'use client'

import './contactBoard.css'

import {
  Button,
  Col,
  ConfigProvider,
  Form,
  FormProps,
  Input,
  Row,
  Select,
  Space,
} from 'antd'

import FormItem from 'antd/es/form/FormItem'
import TextArea from 'antd/es/input/TextArea'
import { contact } from '@/locales/en/contact'
import { useState } from 'react'

type FieldType = {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
}

interface PhoneValue {
  prefix?: string
  phone?: string
}
interface PhoneInputProps {
  id?: string
  value?: PhoneValue
  onChange?: (value: PhoneValue) => void
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  id,
  value = {},
  onChange,
}) => {
  const [prefix, setPrefix] = useState('380')
  const [phone, setPhone] = useState('')

  const triggerChange = (changedValue: PhoneValue) => {
    onChange?.({ ...value, ...changedValue })
  }

  const onPrefixChange = (newPrefix: string) => {
    if (!('prefix' in value)) {
      setPrefix(newPrefix)
    }
    triggerChange({ prefix: newPrefix })
  }

  const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPhone = e.target.value
    if (!('phone' in value)) {
      setPhone(newPhone)
    }
    triggerChange({ phone: newPhone })
  }

  return (
    <span id={id}>
      <Space.Compact block>
        <Select
          value={value.prefix || prefix}
          onChange={onPrefixChange}
          style={{ width: 100 }}
          options={[
            { label: '+380', value: '380' },
            { label: '+40', value: '40' },
          ]}
        />
        <Input
          value={value.phone || phone}
          onChange={onPhoneChange}
          style={{ width: '100%' }}
        />
      </Space.Compact>
    </span>
  )
}

export function ContactForm() {
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo,
  ) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: 'oklch(98.7% 0.022 95.277)',
        },
      }}
    >
      <Form
        name='contact'
        labelCol={{ span: 8 }}
        layout='vertical'
        wrapperCol={{ span: 16 }}
        style={{ width: 800 }}
        initialValues={{
          phone: { prefix: '380' },
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Row gutter={24}>
          <Col span={12}>
            <FormItem
              label={contact.firstName}
              name='firstName'
              rules={[{ required: true, message: contact.firstNameAlarm }]}
            >
              <Input />
            </FormItem>

            <FormItem
              label={contact.email}
              name='email'
              rules={[{ required: true, message: contact.emailAlarm }]}
            >
              <Input />
            </FormItem>
          </Col>

          <Col span={12}>
            <FormItem
              label={contact.lastName}
              name='lastName'
              rules={[{ required: true, message: contact.lastNameAlarm }]}
            >
              <Input />
            </FormItem>
            <Form.Item
              label={contact.phone}
              name='phone'
              rules={[{ required: false }]}
            >
              <PhoneInput />
            </Form.Item>
          </Col>
        </Row>
          <FormItem
            label={contact.message}
            name='message'
            rules={[{ required: true, message: contact.messageAlarm }]}
          >
            <TextArea />
          </FormItem>
          <Form.Item label={null}>
            <Button type='primary' htmlType='submit' className='contactBtn'>
              {contact.submit}
            </Button>
          </Form.Item>
      </Form>
    </ConfigProvider>
  )
}

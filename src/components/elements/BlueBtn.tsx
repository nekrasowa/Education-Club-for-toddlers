'use client'

import Button, { ButtonProps } from 'antd/es/button/button'
import { JSXElementConstructor, MouseEventHandler, ReactElement } from 'react'

export function BlueBtn({
  onClick,
  text,
  icon,
  addedClassName = '',
  ...props
}: {
  onClick?: MouseEventHandler<HTMLElement>
  text: string | ReactElement<unknown, string | JSXElementConstructor<unknown>>
  icon?: ReactElement<unknown, string | JSXElementConstructor<unknown>>
  addedClassName?: string
} & ButtonProps) {
  return (
    <Button
      type='primary'
      onClick={onClick}
      className={`!h-11 !bg-blue-900 !rounded-none flex items-center justify-center gap-2 !px-10 ${addedClassName} `}
      {...props}
    >
      {icon && <>{icon}</>}
      {typeof text === 'string' ? (
        <span className='text-xl'>{text}</span>
      ) : (
        <>{text}</>
      )}
    </Button>
  )
}

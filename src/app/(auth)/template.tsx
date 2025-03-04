'use client'

import { useState } from 'react'


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
 const [input, setInput] = useState('')
  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)}/>
      {children}
    </div>
  )
}

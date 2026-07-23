import { useCallback, useState } from 'react'

import { GreenDot } from '../elements/StatusCircle'
import { Spinner } from '../elements/Spin'
import { chatText } from '@/locales/en/chat'
import { green } from '@/types/colorTypes'
import { navNames } from '@/constants/navNames'

export function ChatWindow({ crossClick }: { crossClick: () => void }) {
  const [chatInputValue, setCatInputValue] = useState<string>('')
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCatInputValue(e.target.value)
    },
    [],
  )

  return (
    <div className='absolute bottom-0 right-10 h-200 w-100 shadow-sm shadow-gray-400 flex flex-col'>
      <div className='titleBox relative h-25 bg-white shadow-2xs p-7'>
        <p className='title text-2xl'>{navNames.CHILDREN_EDUCATION}</p>
        <p className='status flex items-center text-lg'>
          <span className='pr-1'>{GreenDot(green)}</span> {chatText.status}
        </p>
        <button
          className='cross absolute bottom-10 right-4 text-3xl h-8 w-6'
          onClick={crossClick}
        >
          x
        </button>
      </div>
      <div className='chatWindow bg-gray-100 shadow-lg h-155 w-100 relative'>
        <div className='loader absolute left-48 top-75'>
          <Spinner />
        </div>
      </div>
      <div className='inputField'>
        <input
          name='chatInput'
          className='input h-19 w-100 placeholder:text-xl p-5 focus:outline-none text-xl'
          placeholder={chatText.input}
          value={chatInputValue}
          onChange={handleInputChange}
        />
      </div>
    </div>
  )
}

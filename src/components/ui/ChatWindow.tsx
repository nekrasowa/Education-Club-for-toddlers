import { GreenDot } from '../elements/StatusCircle'
import { chatText } from '@/locales/en/chat'
import { green } from '@/types/colorTypes'
import { navNames } from '@/constants/navNames'

export function ChatWindow() {
  return (
    <div className="absolute bottom-0 right-10 h-200 w-100 shadow-sm shadow-gray-400 flex flex-col">
      <div className="titleBox relative h-25 bg-white shadow-2xs p-7" >
        <p className="title text-2xl">{navNames.CHILDREN_EDUCATION}</p>
        <p className="status flex items-center text-lg">
          <span className='pr-1'>{GreenDot(green)}</span> {chatText.status}
        </p>
        <div className="cross absolute bottom-9 right-4 text-2xl">X</div>
      </div>
      <div className="chatWindow bg-gray-50 shadow-lg h-800 w-100">
        <div className="loader"></div>
      </div>
      <div className="inputField" >
        <input className="input" />
        <div className='expandingArrows'></div>
      </div>
    </div>
  )
}

import { navNames } from '@/constants/navNames'

export function ChatWindow() {
  return (
    <div className="absolute bottom-0 right-10 h-200 w-100 bg-gray-50 shadow-lg  shadow-gray-400 flex flex-col">
      <div className="titleBox h-25 bg-white shadow-2xs">
        <span className="title">{navNames.CHILDREN_EDUCATION}</span>
        <span className="status"></span>
      </div>
      <div></div>
      <div></div>
    </div>
  )
}

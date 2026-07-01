import { Calendar } from 'antd'

export default function MyCalendar() {
  return (
    <div className='calendar my-10'>
      <Calendar
        fullscreen={false}
        mode='month'
        className={'w-7/8 h-90 px-20'}
      />
    </div>
  )
}

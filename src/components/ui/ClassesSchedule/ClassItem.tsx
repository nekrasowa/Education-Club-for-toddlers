'use client'

import { BlueBtn } from '@/components/elements/BlueBtn'
import Link from 'next/link'
import { TClassItem } from './FilteringClassesList'
import { ThinLine } from '@/components/elements/ThinLine'
import { schedule } from '@/locales/en/schedule'

export function ClassItem({
  id,
  tutor,
  activity,
  age_group,
  time,
  duration,
  freeSpots,
}: TClassItem) {
  return (
    <>
      <ThinLine />
      <div className='dayBlock'>
        {/* map function  */}
        <div className='mainBlock'>
          <p className='title'>{`${activity} (${age_group} ${schedule.years})`}</p>
          <p className='time'>{`${time} (${duration} ${schedule.hour})`}</p>
        </div>
        <p className='staff'>{tutor}</p>
        <p className='spots'>{`${freeSpots} ${schedule.spotsLeft}`}</p>
        <Link href={`/book/${id}}`}>
          <BlueBtn text={schedule.book} />
        </Link>
        <ThinLine />
      </div>
    </>
  )
}

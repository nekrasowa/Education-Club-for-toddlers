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
      <ThinLine pb='pb-3' />
      <div className='dayBlock flex flex-row h-20 text-xl justify-between mb-3'>
        <div className='mainBlock '>
          <p className='title w-80 pl-20'>{`${activity} (${age_group} ${schedule.years})`}</p>
          <p className='time text-lg pl-20'>{`${time} (${duration} ${schedule.hour})`}</p>
        </div>
        <p className='staff text-lg'>{tutor}</p>
        <p className='spots text-lg'>{`${freeSpots} ${schedule.spotsLeft}`}</p>
        {/* add disabling if 0 spots */}
        <Link href={`/book/${id}}`}>
          <BlueBtn text={schedule.book} />
        </Link>
      </div>
    </>
  )
}

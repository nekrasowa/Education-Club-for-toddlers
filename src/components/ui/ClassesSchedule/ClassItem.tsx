'use client'

import { BlueBtn } from '@/components/elements/BlueBtn'
import Link from 'next/link'
import { ThinLine } from '@/components/elements/ThinLine'
import { schedule } from '@/locales/en/schedule'

export function ClassItem() {
  return (
    <>
      <ThinLine />
      <div className='dayBlock'>
        {/* map function  */}
        <div className='mainBlock'>
          <p className='title'></p>
          <p className='time'></p>
        </div>
        <p className='staff'></p>
        <p className='spots'>{` ${schedule.spotsLeft}`}</p>
        <Link href={`/book/id`}>
          <BlueBtn text={schedule.book} />
        </Link>
        <ThinLine />
      </div>
    </>
  )
}

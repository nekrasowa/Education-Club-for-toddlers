import Image, { StaticImageData } from 'next/image'

import { ThinLine } from '@/components/elements/ThinLine'

export function TeacherCard({
  imgSrc,
  teacherName,
  className,
  description,
  email,
  number,
}: {
  imgSrc: StaticImageData
  teacherName: string
  className: string
  description: string
  email: string
  number: string
}) {
  return (
    <div className='teacherCard flex flex-col'>
      <Image alt='' src={imgSrc} className='mb-10 h-80 w-auto object-fill' />
      <p className='teacherName text-2xl'>{teacherName}</p>
      <p className='className text-2xl mb-7'>{className}</p>
      <p className='description mb-7'>{description}</p>
      <ThinLine pb='pb-7' />
      <p className='contact'>{`${email} | ${number}`}</p>
    </div>
  )
}

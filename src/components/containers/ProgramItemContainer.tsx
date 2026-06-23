'use client'

import { BlueBtn } from '../elements/BlueBtn'
import { H2Title } from '../elements/H2Title'
import { InfoBlockWithImg } from '../elements/InfoBlockWithImg'
import { ProgramsList } from '@/public/ProgramsList'
import { programItem } from '@/locales/en/programs'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'

export function ProgramItemContainer() {
  const params = useParams()
  const programId = Number(params.id)

  const { isPending, error, data } = useQuery({
    queryKey: ['programData'],
    queryFn: () => {
      return ProgramsList[programId] 
    },
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <>
      <InfoBlockWithImg
        imgSrc={data.imgSrc}
        titleText={data.programTitle}
        descriptionText={data.description}
      />
      <H2Title title={programItem.about} />
      <p>{}</p>
      <H2Title title={programItem.instructors} />

      <p></p>
      <H2Title title={programItem.price} />

      <p></p>
      <BlueBtn text={programItem.btnText} />
    </>
  )
}

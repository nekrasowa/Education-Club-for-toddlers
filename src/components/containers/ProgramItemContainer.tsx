'use client'

import { BlueBtn } from '../elements/BlueBtn'
import { H2Title } from '../elements/H2Title'
import { InfoBlockWithImg } from '../elements/InfoBlockWithImg'
import { ProgramsList } from '@/public/ProgramsList'
import { ThinLine } from '../elements/ThinLine'
import { programItem } from '@/locales/en/programs'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'

export function ProgramItemContainer() {
  const params = useParams()
  const programId = Number(params.id)
  const infoBlockStyles = 'pb-30'
  const h2TitleStyles = 'text-left text-3xl'
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
        descriptionText={`${data.steps} ${programItem.steps}`}
      />
      <div className='px-50 text-xl text-left'>
        <H2Title title={programItem.about} addedClassName={h2TitleStyles} />
        <p className={infoBlockStyles}>{data.description}</p>
        <ThinLine />

        <H2Title
          title={programItem.instructors}
          addedClassName={h2TitleStyles}
        />
        <p className={infoBlockStyles}>{data.instructors}</p>
        <ThinLine />

        <H2Title title={programItem.price} addedClassName={h2TitleStyles} />
        <p className={infoBlockStyles}>{`$${data.price}.00`}</p>
        <ThinLine />

        <BlueBtn text={programItem.btnText} />
      </div>
    </>
  )
}

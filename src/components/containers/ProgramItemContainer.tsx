import { useQuery } from '@tanstack/react-query'
import { BlueBtn } from '../elements/BlueBtn'
import { H2Title } from '../elements/H2Title'
import { InfoBlockWithImg } from '../elements/InfoBlockWithImg'
import { programItem } from '@/locales/en/programs'
import { ProgramsList } from '@/public/ProgramsList'

export function ProgramItemContainer() {
  const { isPending, error, data } = useQuery({
    queryKey: ['programData'],
    queryFn: () => {
      return ProgramsList[0] //id из url
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

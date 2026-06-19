import { BlueBtn } from '../elements/BlueBtn'
import { H2Title } from '../elements/H2Title'
import { InfoBlockWithImg } from '../elements/InfoBlockWithImg'
import { programItem } from '@/locales/en/programs'

export function ProgramItemContainer() {
  return (
    <>
      <InfoBlockWithImg
        imgSrc={undefined}
        titleText={''}
        descriptionText={''}
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

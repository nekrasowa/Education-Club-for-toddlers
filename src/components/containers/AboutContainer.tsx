import { H2Title } from '../elements/H2Title'
import { InfoBlockWithImg } from '../elements/InfoBlockWithImg'
import { about } from '@/locales/en/about'
import aboutPageTop from '@/public/aboutPageTop.png'

export function AboutContainer() {
  return (
    <>
      <InfoBlockWithImg
        imgSrc={aboutPageTop}
        titleText={about.title}
        descriptionText={about.description}
      />
      <div className='bg=[#d8f5e1] text-center p-20'>
        <H2Title title={about.subtitle} />
        {about.description2}
      </div>
      <H2Title title={about.teachersTitle} />
      <p>{about.teachersIntroduce}</p>

      <H2Title title={about.commentsTitle} />
      <div></div>
    </>
  )
}

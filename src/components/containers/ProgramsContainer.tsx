'use client'

import { ProgramsList, TProgram } from '@/public/ProgramsList'

import { H2Title } from '../elements/H2Title'
import { InfoBlockWithImg } from '../elements/InfoBlockWithImg'
import { blockSide } from '@/services/styleFunctions'
import { programs } from '@/locales/en/programs'
import titlePhoto from '@/public/programs.png'

export function ProgramsContainer() {
  return (
    <>
      <InfoBlockWithImg
        imgSrc={titlePhoto}
        titleText={programs.topTitle}
        descriptionText={programs.description}
        bg='bg-[#fde3e5]'
      />
      <H2Title title={programs.subtitle} addedClassName='text-3xl' />
      {ProgramsList.map((program: TProgram, i: number) => (
        <div key={program.id}>
          <InfoBlockWithImg
            imgSrc={program.imgSrc}
            titleText={program.programTitle}
            descriptionText={`$${program.price}.00`}
            side={blockSide(i)}
            btn={{btnText: programs.btnText, linkHref: `/programs/${program.id}`  }}
            bg='bg-[#a8b6da40]'
          />
          <div className='mb-20'></div>
        </div>
      ))}
    </>
  )
}

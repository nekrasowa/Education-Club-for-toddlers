import { StaticImageData } from 'next/image'
import t1_src from '@/public/t-1.png'
import t2_src from '@/public/t-2.png'
import t3_src from '@/public/t-3.png'

export type TTeacherItem = {
  imgSrc: StaticImageData
  teacherName: string
  className: string
  description: string
  email: string
  number: string
}

export const teacherList: TTeacherItem[] = [
  {
    imgSrc: t1_src,
    teacherName: 'Michelle Hunter',
    className: 'Drawing & Painting',
    description:
      'Teacher inspires children to express emotions and ideas through colors and shapes, helping them build strong foundational art skills',
    email: 'mhunter@gmail.com',
    number: '+40-723-456-891',
  },
  {
    imgSrc: t2_src,
    teacherName: 'David Cho',
    className: 'Sculpting & Mixed Media',
    description:
      'David Cho guides students in working with different materials like clay and recycled objects to create unique 3D artworks.',
    email: 'ChoDev@gmail.com',
    number: '+40783-256-601',
  },
  {
    imgSrc: t3_src,
    teacherName: 'Fiona Buchanan',
    className: 'Illustration',
    description:
      'Teacher teaches how to tell stories through images, focusing on character design, composition, and creative visual thinking.',
    email: 'BuchananFiona@gmail.com',
    number: '+40-733-846-221',
  },
]

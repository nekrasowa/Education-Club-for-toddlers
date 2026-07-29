import { Dispatch, SetStateAction } from 'react'

import { classesList, type TClassItem } from '@/public/classesList'
import { daysMap } from './dayjs'

const ageMap = {
  'age-1': '3-5',
  'age-2': '6-8',
  'age-3': '9-11',
  'age-4': '12-16',
} as const

type AgeKey = keyof typeof ageMap
type AgeValue = (typeof ageMap)[AgeKey]

export const getDay = (value: string) => value.match(/\d+/)?.[0]

const classDaysOnly = new Set(
  classesList.map((item) => getDay(item.print_date)),
)

export function getDaysWithoutClasses(
  daysList: string[],
  classDaysOnly: Set<string | undefined>,
): string[] {
  return daysList.filter((day) => !classDaysOnly.has(getDay(day)))
}

const daysWithoutClassesArr = getDaysWithoutClasses(daysMap(), classDaysOnly)

export const daysWithoutClasses = new Set(daysWithoutClassesArr)

export const createScheduledClassesList = (
  list: TClassItem[],
): Map<string, TClassItem[]> =>
  list.reduce((map, item) => {
    map.set(item.print_date, [...(map.get(item.print_date) ?? []), item])
    return map
  }, new Map<string, TClassItem[]>())

export const filterClasses = (
  list: TClassItem[],
  selectedTags: string[],
): TClassItem[] => {
  const tagSet = new Set(selectedTags)

  const tutorTags = selectedTags.filter((t) => t.startsWith('t-'))

  const ageTags = selectedTags.filter((t): t is AgeKey => t in ageMap)

  const selectedAgeValues = ageTags.map((t) => ageMap[t])

  return list.filter((classItem) => {
    if (selectedTags.length === 0) return true

    const tutorOk =
      tutorTags.length === 0 || tutorTags.includes(classItem.tutorId)

    const ageOk =
      selectedAgeValues.length === 0 ||
      selectedAgeValues.includes(classItem.age_group as AgeValue)

    const freeSpotsOk = !tagSet.has('freeSpots') || classItem.freeSpots > 0

    return tutorOk && ageOk && freeSpotsOk
  })
}

export const getClassesFromDay = (
  list: TClassItem[],
  currentDay: string,
): TClassItem[] => {
  const currentDayNumber = Number(getDay(currentDay))

  const startPoint = list.findIndex(
    (item) => Number(getDay(item.print_date)) >= currentDayNumber,
  )

  return startPoint === -1 ? [] : list.slice(startPoint)
}

export const onDayChange = (
  page: number,
  selectedTags: string[],
  setClassList: Dispatch<SetStateAction<Map<string, TClassItem[]>>>,
) => {
  const currentDay = daysMap()[page]
  const filteredList = filterClasses(classesList, selectedTags)
  const result = getClassesFromDay(filteredList, currentDay)
  setClassList(createScheduledClassesList(result))
}

export const handleFilterTagsChange = (
  selectedTags: string[],
  page: number,
  setClassList: Dispatch<SetStateAction<Map<string, TClassItem[]>>>,
) => {
  const currentDay = daysMap()[page]
  const filteredList = filterClasses(classesList, selectedTags)
  const result = getClassesFromDay(filteredList, currentDay)
  setClassList(createScheduledClassesList(result))
}

export const handleDeletingTag = (
  deletedTag: string,
  selectedTags: string[],
  setClassList: Dispatch<SetStateAction<Map<string, TClassItem[]>>>,
  page: number,
) => {
  const newTagList = selectedTags.filter((tag) => tag !== deletedTag)
  handleFilterTagsChange(newTagList, page, setClassList)
}

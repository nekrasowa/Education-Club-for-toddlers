import { Dispatch, SetStateAction } from 'react'

import { classesList, type TClassItem } from '@/public/classesList'
import { daysMap } from './dayjs'

const getDay = (value: string) => value.match(/\d+/)?.[0]

const classDaysOnly = new Set(classesList.map((item) => getDay(item.date)))

const getDaysWithoutClasses = (daysList: string[]) =>
  daysList.filter((day) => !classDaysOnly.has(getDay(day)))

export const daysWithoutClasses = new Set(getDaysWithoutClasses(daysMap))

export const createScheduledClassesList = (
  list: TClassItem[],
): Map<string, TClassItem[]> =>
  list.reduce((map, item) => {
    map.set(item.date, [...(map.get(item.date) ?? []), item])
    return map
  }, new Map<string, TClassItem[]>())

function getNextAvailableDay(currentDay: string) {
  const currentIndex = daysMap.indexOf(currentDay)

  for (let i = currentIndex + 1; i < daysMap.length; i++) {
    const nextDay = daysMap[i]

    if (!daysWithoutClasses.has(nextDay)) {
      return nextDay
    }
  }

  return currentDay
}

export const onDayChange = (
  page: number,
  setClassList: Dispatch<SetStateAction<Map<string, TClassItem[]>>>,
) => {
  const currentDay = daysMap[page]

  const targetDay = daysWithoutClasses.has(currentDay)
    ? getNextAvailableDay(currentDay)
    : currentDay

  if (!targetDay) return

  const targetDayNumber = getDay(targetDay)

  const startPoint = classesList.findIndex(
    (item) => getDay(item.date) === targetDayNumber,
  )

  if (startPoint === -1) return

  setClassList(createScheduledClassesList(classesList.slice(startPoint)))
}

export const handleFilterTagsChange = (
  selectedTags: string[],
  setClassList: Dispatch<SetStateAction<Map<string, TClassItem[]>>>,
) => {
  const tagSet = new Set(selectedTags)

  const tutorTags = selectedTags.filter((t) => t.startsWith('t-'))

  const ageMap = {
    'age-1': '3-5',
    'age-2': '6-8',
    'age-3': '9-11',
    'age-4': '12-16',
  } as const

  type AgeKey = keyof typeof ageMap
  type AgeValue = (typeof ageMap)[AgeKey]

  const ageTags = selectedTags.filter((t): t is AgeKey => t in ageMap)

  const selectedAgeValues = ageTags.map((t) => ageMap[t])

  const filteredClassList = classesList.filter((classItem) => {
    if (selectedTags.length === 0) return true

    const tutorOk =
      tutorTags.length === 0 || tutorTags.includes(classItem.tutorId)

    const ageOk =
      selectedAgeValues.length === 0 ||
      selectedAgeValues.includes(classItem.age_group as AgeValue)

    const freeSpotsOk = !tagSet.has('freeSpots') || classItem.freeSpots > 0

    return tutorOk && ageOk && freeSpotsOk
  })

  setClassList(createScheduledClassesList(filteredClassList))
}

export const handleDeletingTag = (
  deletedTag: string,
  selectedTags: string[],
  setClassList:Dispatch<SetStateAction<Map<string, TClassItem[]>>>
) => {
  const newTagList = selectedTags.filter((tag) => tag !== deletedTag)
  handleFilterTagsChange(newTagList, setClassList)
  console.log('[selectedTags]:', newTagList)
}

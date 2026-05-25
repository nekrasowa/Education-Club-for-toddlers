import { Dispatch, SetStateAction } from 'react'

import { TClassItem } from '@/components/ui/ClassesSchedule/FilteringClassesList'
import { classesList } from '@/public/classesList'
import { daysMap } from './dayjs'

const classDaysOnly = new Set(
  classesList.map((item) => item.date.match(/\d+/)?.[0]),
)

function getDaysWithoutClasses(daysList: string[]): string[] {
  return daysList.filter((item) => {
    const day = item.match(/\d+/)?.[0]
    return !classDaysOnly.has(day)
  })
}
const daysWithoutClasses = getDaysWithoutClasses(daysMap)

export const createScheduledClassesList: (
  list: TClassItem[],
) => Map<string, TClassItem[]> = (list) => {
  const filteredClassesList: Map<string, TClassItem[]> = new Map()
  list.map((listItem) => {
    if (!!filteredClassesList.get(listItem.date)) {
      const currentSubList = filteredClassesList.get(listItem.date)
      currentSubList?.push(listItem)
      filteredClassesList.set(listItem.date, currentSubList || [])
      return filteredClassesList
    }

    filteredClassesList.set(listItem.date, [listItem])
    return filteredClassesList
  })
  return filteredClassesList
}

export const onDayChange: (
  page: number,
  setClassList: Dispatch<SetStateAction<Map<string, TClassItem[]>>>,
) => void = (page, setClassList) => {
  const currentDay = daysMap[page]
console.log('daysWithoutClasses',daysWithoutClasses)
console.log('currentDay',daysWithoutClasses.includes(currentDay))

  if (daysWithoutClasses.includes(currentDay)) return

  const startPoint = classesList.findIndex(
    (classItem) => classItem.date.match(/\d+/)?.[0] === currentDay.match(/\d+/)?.[0],
  )

  const newList = classesList.slice(startPoint)
  setClassList(createScheduledClassesList(newList))
  console.log('newList:', newList)
  return
}

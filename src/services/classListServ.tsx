import { Dispatch, SetStateAction } from 'react'

import { TClassItem } from '@/components/ui/ClassesSchedule/FilteringClassesList'
import { classesList } from '@/public/classesList'
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
    item => getDay(item.date) === targetDayNumber,
  )

  if (startPoint === -1) return

  setClassList(
    createScheduledClassesList(
      classesList.slice(startPoint),
    ),
  )
}
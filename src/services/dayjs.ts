import { TClassItem, classesList } from '@/public/classesList'

import customParseFormat from 'dayjs/plugin/customParseFormat'
import dayjs from 'dayjs'

const currDate = dayjs()
const currDateNumber = dayjs().date()
const monthYear = dayjs(currDate).format('MMM YYYY')
const daysInMonth = dayjs().daysInMonth()

export const daysMap = Array.from({ length: daysInMonth + 1 }, (_, i) =>
  dayjs().date(i).format('ddd DD'),
)

dayjs.extend(customParseFormat)

export function checkExpiration(utc_date: string): boolean {
  return dayjs().isAfter(utc_date)
}

export const classesListWithUtcDates = classesList.map((item) => {
  const utcDate = dayjs(
    `${item.print_date} 2026 ${item.time.split('-')[0]}`,
    'MMMM DD YYYY HH:mm',
  ).toISOString()
  return {
    ...item,
    utc_date: utcDate,
    isExpired: checkExpiration(utcDate),
  }
})

export function useClassesDates(): [
  number,
  number,
  string,
  string[],
  TClassItem[],
] {
  return [
    currDateNumber,
    daysInMonth,
    monthYear,
    daysMap,
    classesListWithUtcDates,
  ]
}

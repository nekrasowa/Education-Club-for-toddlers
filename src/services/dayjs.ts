import { TClassItem, classesList } from '@/public/classesList'
import dayjs, { Dayjs } from 'dayjs'

import customParseFormat from 'dayjs/plugin/customParseFormat'

function currDateNumber(today: Dayjs): number {
  return today.date()
}

function monthYear(today: Dayjs): string {
  return today.format('MMM YYYY')
}

function daysInMonth(today: Dayjs): number {
  return today.daysInMonth()
}

export function daysMap(today: Dayjs = dayjs()): string[] {
  return Array.from({ length: daysInMonth(today) + 1 }, (_, i) =>
    today.date(i).format('ddd DD'),
  )
}

dayjs.extend(customParseFormat)

export function checkExpiration(utc_date: string, today: Dayjs): boolean {
  return today.isAfter(utc_date)
}

export function classesListWithUtcDates(today: Dayjs, filteringClassesList:  TClassItem[] = classesList): TClassItem[] {
  return filteringClassesList.map((item) => {
    const utcDate = dayjs(
      `${item.print_date} 2026 ${item.time.split('-')[0]}`,
      'MMMM DD YYYY HH:mm',
    ).toISOString()
    return {
      ...item,
      utc_date: utcDate,
      isExpired: checkExpiration(utcDate, today),
    }
  })
}

export function useClassesDates(
  today: Dayjs = dayjs(),
): [number, number, string, string[], TClassItem[]] {
  return [
    currDateNumber(today),
    daysInMonth(today),
    monthYear(today),
    daysMap(today),
    classesListWithUtcDates(today),
  ]
}

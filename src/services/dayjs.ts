import dayjs from 'dayjs'

const currDate = dayjs()
const monthYear = dayjs(currDate).format('MMM YYYY')
const daysInMonth = dayjs().daysInMonth()

export const daysMap = Array.from({ length: daysInMonth + 1 }, (_, i) =>
  dayjs().date(i).format('ddd DD'),
)

export function useClassesDates(): [number, string, string[]] {
  return [daysInMonth, monthYear, daysMap]
}

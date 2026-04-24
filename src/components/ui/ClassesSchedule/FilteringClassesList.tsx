'use client'

import { Pagination, Select } from 'antd'

// import { ClassItem } from './ClassItem'
import { ThinLine } from '@/components/elements/ThinLine'
import { classesList } from '@/public/classesList'
import { schedule } from '@/locales/en/schedule'

const date = 'May 2026'
const customMap: Record<number, string> = {
  1: 'Sun 24',
  2: 'Mon 25',
  3: 'Tue 26',
  4: 'Wed 27',
  5: 'Thu 28',
  6: 'Fri 29',
  7: 'Sat 30',
}

const filterOptions = [
  { value: 'freeSpots', label: 'Free spots' },
  { value: 'trainer 1', label: 'trainer 1' },
  { value: 'trainer 2', label: 'trainer 2' },
  { value: 'age 1', label: '3-5 years' },
  { value: 'age 2', label: '6-10 years' },
  { value: 'age 3', label: '11-16 years' },
]

const handleChange = (value: string) => {
  console.log(`selected ${value}`)
}

function createScheduledClassesList(
  list: {
    id: string
    day: string
    date: string
    tutor: string
    activity: string
    age_group: string
    time: string
    duration: string
    freeSpots: number
    price: string
    description: string
  }[],
) {
  const filteredClassesList = new Map()
  list.map((listItem) => {
    if (!!filteredClassesList.get(listItem.date)) {
      const currentSubList = filteredClassesList.get(listItem.date)
      currentSubList.push(listItem)
      filteredClassesList.set(listItem.date, currentSubList)
      return filteredClassesList
    }

    filteredClassesList.set(listItem.date, [listItem])
    return filteredClassesList
  })
  return filteredClassesList
}

const filteredClassesList = createScheduledClassesList(classesList)
// console.log('values:', list.values())
// console.log('keys:', list.keys())

export function FilteringClassesList() {
  return (
    <>
      <Pagination
        total={7}
        pageSize={1}
        showTotal={() => <div>{date}</div>}
        defaultCurrent={1}
        itemRender={(page, type, originalElement) => {
          if (type === 'page') {
            return <span>{customMap[page] || page}</span>
          }
          return originalElement
        }}
        defaultPageSize={7}
      />

      <Select
        mode='tags'
        style={{ width: 120 }}
        onChange={handleChange}
        options={filterOptions}
        placeholder={schedule.selectPlaceholder}
      />

      <div className='classesList flex col'>
        {/* {Array.from(filteredClassesList).map(([date, classes]) => (
          <div key={date}>
            <div>{date}</div>
            {classes.map(
              (item: JSX.IntrinsicAttributes, i: Key | null | undefined) => (
                <div key={i}>
                  <ClassItem {...item} />
                  {'a lot of text to see'}
                  <ThinLine />
                </div>
              ),
            )}
          </div>
        ))} */}
        {Array.from(filteredClassesList.entries()).map(([date, classes]) => (
          <div key={date}>
            <div>{date}</div>

            {classes.map(
              (item: {
                id: string
                day: string
                date: string
                tutor: string
                activity: string
                age_group: string
                time: string
                duration: string
                freeSpots: number
                price: string
                description: string
              }) => (
                <div key={item.id}>
                  {/* <ClassItem {...item} /> */}
                  <div>a lot of text to see</div>
                  <ThinLine />
                </div>
              ),
            )}
          </div>
        ))}
        <ThinLine />
      </div>
    </>
  )
}

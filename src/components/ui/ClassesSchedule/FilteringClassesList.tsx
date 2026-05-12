'use client'

import './filteringClassesList.module.css'

import { ConfigProvider, Pagination, Select } from 'antd'

import { ClassItem } from './ClassItem'
import { ThinLine } from '@/components/elements/ThinLine'
import { classesList } from '@/public/classesList'
import dayjs from 'dayjs'
import { schedule } from '@/locales/en/schedule'

export type TClassItem = {
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
}

const currDate = dayjs()
const monthYear = dayjs(currDate).format('MMM YYYY')
const daysInMonth = dayjs().daysInMonth()
// const month = dayjs(currDate).format('MMM')

const daysMap = Array.from({ length: daysInMonth+1 }, (_, i) =>
  dayjs()
    .date(i)
    .format('DD ddd'),
)

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

export function FilteringClassesList() {
  return (
    <>
      <div className='headOfList flex justify-between'>
        <ConfigProvider
          theme={{
            components: {
              Pagination: {
                itemActiveBg: '#4e6091',
                itemSize: 50,
              },
            },
          }}
        >
          <Pagination
            total={daysInMonth}
            pageSize={1}
            showLessItems
            showTotal={() => <div>{monthYear}</div>}
            defaultCurrent={1}
            itemRender={(page, type, originalElement) => {
              if (type === 'page') {
                return <span>{daysMap[page] || page}</span>
              }
              console.log(type, originalElement)
              return originalElement
            }}
            defaultPageSize={4}
          />
        </ConfigProvider>

        <Select
          mode='tags'
          onChange={handleChange}
          options={filterOptions}
          placeholder={schedule.selectPlaceholder}
        />
      </div>
      <div className='classesList flex flex-col w-full'>
        {Array.from(filteredClassesList.entries()).map(([date, classes]) => (
          <div className='dayBlock flex flex-row' key={date}>
            <div className='text-lg w-[15%]'>
              <ThinLine pb='pb-3' />
              {date}
            </div>
            <div className='dailyClasses flex flex-col w-full'>
              {classes.map((item: TClassItem) => (
                <div key={item.id}>
                  <ClassItem {...item} />
                </div>
              ))}
            </div>
          </div>
        ))}
        <ThinLine />
      </div>
    </>
  )
}

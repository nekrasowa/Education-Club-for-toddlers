'use client'

import './filteringClassesList.module.css'

import { ConfigProvider, Pagination, Select } from 'antd'
import {
  createScheduledClassesList,
  daysWithoutClasses,
  onDayChange,
} from '@/services/classListServ'

import { ClassItem } from './ClassItem'
import { ThinLine } from '@/components/elements/ThinLine'
import { classesList } from '@/public/classesList'
import { filtersList } from '@/public/filtersList'
// import dayjs from 'dayjs'
import { schedule } from '@/locales/en/schedule'
import { useClassesDates } from '@/services/dayjs'
import { useState } from 'react'

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

const handleChange = (value: string) => {
  console.log(`selected ${value}`)
}

const filteredClassesList = createScheduledClassesList(classesList)

export function FilteringClassesList() {
  const [showedClassList, setShowedClasslist] =
    useState<Map<string, TClassItem[]>>(filteredClassesList)
  const [currentPage, setCurrentPage] = useState(1)

  const [daysInMonth, monthYear, daysMap] = useClassesDates()

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
            current={currentPage}
            total={daysInMonth}
            pageSize={1}
            showLessItems
            showTotal={() => <div>{monthYear}</div>}
            defaultCurrent={1}
            itemRender={(page, type, originalElement) => {
              if (type === 'page') {
                const day = daysMap[page]
                const isDisabled = daysWithoutClasses.has(day)

                return (
                  <span className={isDisabled ? 'pagination-disabled' : ''}>
                    {day || page}
                  </span>
                )
              }
              return originalElement
            }}
            defaultPageSize={4}
            onChange={(page) => {
              const day = daysMap[page]

              if (daysWithoutClasses.has(day)) {
                setCurrentPage(page)
                return
              }

              setCurrentPage(page)
              onDayChange(page, setShowedClasslist)
            }}
          />
        </ConfigProvider>

        <Select
          mode='tags'
          onChange={handleChange}
          options={filtersList}
          placeholder={schedule.selectPlaceholder}
        />
      </div>
      <div className='classesList flex flex-col w-full'>
        {Array.from(showedClassList.entries()).map(([date, classes]) => (
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

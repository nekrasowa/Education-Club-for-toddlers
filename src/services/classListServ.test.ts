import {
  createScheduledClassesList,
  filterClasses,
  getClassesFromDay,
  getDay,
  getDaysWithoutClasses,
} from './classListServ'
import { longClassList, shortClassList } from '@/tests/mocks/classList'

describe('createScheduledClassesList', () => {
  test('Create schedule for Class List', () => {
    const result = createScheduledClassesList(shortClassList)

    expect(result.get('June 01')).toEqual([
      expect.objectContaining({ id: '1' }),
      expect.objectContaining({ id: '2' }),
    ])

    expect(result.get('June 02')).toBeUndefined()

    expect(result.get('June 03')).toEqual([
      expect.objectContaining({ id: '3' }),
    ])
  })
})

describe('getDay', () => {
  test('Get number from date from string with number on the start', () => {
    expect(getDay('07 of May')).toBe('07')
  })

  test('Get number from date from string with number on the end', () => {
    expect(getDay('May 07')).toBe('07')
  })

  test('Get number from date from string with numbers only', () => {
    expect(getDay('07.05.2026')).toBe('07')
  })

  test('Get number from date from string without number', () => {
    expect(getDay('seventh of May')).toBeUndefined()
  })
  test('Get number from empty string', () => {
    expect(getDay('')).toBeUndefined()
  })
})

describe('getDaysWithoutClasses', () => {
  const dayList = ['01', '03', '21', '30']
  const classDaysOnly = new Set(
    shortClassList.map((item) => getDay(item.print_date)),
  )

  const result = getDaysWithoutClasses(dayList, classDaysOnly)

  test('Returns correct list', () => {
    expect(result).toEqual(['21', '30'])
  })
})

describe('filterClasses', () => {
  describe('when no filters selected', () => {
    const selectedTags: string[] = []
    test('empty filters array', () => {
      expect(filterClasses(longClassList, selectedTags)).toEqual(longClassList)
    })
  })

  describe('tutor filter', () => {
    test('one tutor', () => {
      const selectedTags: string[] = ['t-1']

      const result = filterClasses(longClassList, selectedTags)

      expect(result).toHaveLength(4)

      expect(result).toEqual([
        expect.objectContaining({ id: '1' }),
        expect.objectContaining({ id: '2' }),
        expect.objectContaining({ id: '9' }),
        expect.objectContaining({ id: '10' }),
      ])
    })

    test('two tutor', () => {
      const selectedTags: string[] = ['t-1', 't-2']

      const result = filterClasses(longClassList, selectedTags)

      expect(result).toHaveLength(6)

      expect(result).toEqual([
        expect.objectContaining({ id: '1' }),
        expect.objectContaining({ id: '2' }),
        expect.objectContaining({ id: '3' }),
        expect.objectContaining({ id: '4' }),
        expect.objectContaining({ id: '9' }),
        expect.objectContaining({ id: '10' }),
      ])
    })
  })

  describe('age filter', () => {
    test('one age gap', () => {
      const selectedTags: string[] = ['age-1']

      const result = filterClasses(longClassList, selectedTags)

      expect(result).toHaveLength(4)

      expect(result).toEqual([
        expect.objectContaining({ id: '1' }),
        expect.objectContaining({ id: '4' }),
        expect.objectContaining({ id: '7' }),
        expect.objectContaining({ id: '10' }),
      ])
    })

    test('two age gap', () => {
      const selectedTags: string[] = ['age-1', 'age-3']

      const result = filterClasses(longClassList, selectedTags)

      expect(result).toHaveLength(7)

      expect(result).toEqual([
        expect.objectContaining({ id: '1' }),
        expect.objectContaining({ id: '3' }),
        expect.objectContaining({ id: '4' }),
        expect.objectContaining({ id: '6' }),
        expect.objectContaining({ id: '7' }),
        expect.objectContaining({ id: '9' }),
        expect.objectContaining({ id: '10' }),
      ])
    })
  })
  describe('freeSpots filter', () => {
    test('free spots', () => {
      const selectedTags: string[] = ['freeSpots']

      const result = filterClasses(longClassList, selectedTags)

      expect(result).toHaveLength(7)

      expect(result).toEqual([
        expect.objectContaining({ id: '2' }),
        expect.objectContaining({ id: '3' }),
        expect.objectContaining({ id: '4' }),
        expect.objectContaining({ id: '5' }),
        expect.objectContaining({ id: '6' }),
        expect.objectContaining({ id: '8' }),
        expect.objectContaining({ id: '9' }),
      ])
    })
  })

  describe('combined filters', () => {
    test('free spots + age + tutor', () => {
      const selectedTags: string[] = ['freeSpots', 't-1', 'age-1']

      const result = filterClasses(longClassList, selectedTags)

      expect(result).toHaveLength(0)
    })

    test('free spots + age2 + tutor2', () => {
      const selectedTags: string[] = ['freeSpots', 't-2', 'age-3']

      const result = filterClasses(longClassList, selectedTags)

      expect(result).toHaveLength(1)

      expect(result).toEqual([expect.objectContaining({ id: '3' })])
    })

    test('age3 + tutor2 + tutor4', () => {
      const selectedTags: string[] = ['t-2', 't-4', 'age-3']

      const result = filterClasses(longClassList, selectedTags)

      expect(result).toHaveLength(2)

      expect(result).toEqual([
        expect.objectContaining({ id: '3' }),
        expect.objectContaining({ id: '6' }),
      ])
    })
  })
})

describe('getClassesFromDay', () => {
  test('first day', () => {
    const currentDay = 'Wed 01'
    const result = getClassesFromDay(longClassList, currentDay)

    expect(result).toHaveLength(10)
  })
  test('middle day', () => {
    const currentDay = 'Sun 05'
    const result = getClassesFromDay(longClassList, currentDay)

    expect(result).toHaveLength(6)

    expect(result).toEqual([
      expect.objectContaining({ id: '5' }),
      expect.objectContaining({ id: '6' }),
      expect.objectContaining({ id: '7' }),
      expect.objectContaining({ id: '8' }),
      expect.objectContaining({ id: '9' }),
      expect.objectContaining({ id: '10' }),
    ])
  })
  test('last day', () => {
    const currentDay = 'Tue 07'
    const result = getClassesFromDay(longClassList, currentDay)

    expect(result).toHaveLength(2)

    expect(result).toEqual([
      expect.objectContaining({ id: '9' }),
      expect.objectContaining({ id: '10' }),
    ])
  })
})

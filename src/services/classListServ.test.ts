import {
  createScheduledClassesList,
  filterClasses,
  getClassesFromDay,
  getDay,
  getDaysWithoutClasses,
} from './classListServ'

import { TClassItem } from '@/public/classesList'

const classList: TClassItem[] = [
  {
    id: '1',
    day: 'Thursday',
    print_date: 'June 01',
    tutorId: 't-1',
    tutor: 'Sam Hog',
    activity: 'Drawing Basics',
    age_group: '3-5',
    time: '15:00-16:00',
    duration: '1',
    freeSpots: 0,
    price: '25 RON',
    description: 'Learn basic drawing skills using simple shapes and lines.',
  },
  {
    id: '2',
    day: 'Thursday',
    print_date: 'June 01',
    tutorId: 't-1',
    tutor: 'Sam Hog',
    activity: 'Clay Modeling',
    age_group: '6-8',
    time: '16:15-17:15',
    duration: '1',
    freeSpots: 3,
    price: '30 RON',
    description: 'Create fun objects and figures using soft clay.',
  },
  {
    id: '3',
    day: 'Friday',
    print_date: 'June 03',
    tutorId: 't-2',
    tutor: 'Matty Smith',
    activity: 'Creative Crafts',
    age_group: '9-11',
    time: '17:30-18:30',
    duration: '1',
    freeSpots: 7,
    price: '28 RON',
    description: 'Explore creativity through hands-on craft projects.',
  },
]

const list = [
  {
    id: '1',
    day: 'Thursday',
    print_date: 'June 01',
    tutorId: 't-1',
    tutor: 'Sam Hog',
    activity: 'Drawing Basics',
    age_group: '3-5',
    time: '15:00-16:00',
    duration: '1',
    freeSpots: 0,
    price: '25 RON',
    description: 'Learn basic drawing skills using simple shapes and lines.',
  },
  {
    id: '2',
    day: 'Thursday',
    print_date: 'June 01',
    tutorId: 't-1',
    tutor: 'Sam Hog',
    activity: 'Clay Modeling',
    age_group: '6-8',
    time: '16:15-17:15',
    duration: '1',
    freeSpots: 3,
    price: '30 RON',
    description: 'Create fun objects and figures using soft clay.',
  },
  {
    id: '3',
    day: 'Friday',
    print_date: 'June 02',
    tutorId: 't-2',
    tutor: 'Matty Smith',
    activity: 'Creative Crafts',
    age_group: '9-11',
    time: '17:30-18:30',
    duration: '1',
    freeSpots: 7,
    price: '28 RON',
    description: 'Explore creativity through hands-on craft projects.',
  },
  {
    id: '4',
    day: 'Friday',
    print_date: 'June 02',
    tutorId: 't-2',
    tutor: 'Matty Smith',
    activity: 'Watercolor Painting',
    age_group: '3-5',
    time: '15:00-16:00',
    duration: '1',
    freeSpots: 5,
    price: '27 RON',
    description: 'Learn painting techniques using watercolor paints.',
  },
  {
    id: '5',
    day: 'Monday',
    print_date: 'June 05',
    tutorId: 't-4',
    tutor: 'Sam Smith',
    activity: 'Paper Crafts',
    age_group: '6-8',
    time: '16:15-17:15',
    duration: '1',
    freeSpots: 3,
    price: '22 RON',
    description: 'Make creative items using paper folding and cutting.',
  },
  {
    id: '6',
    day: 'Monday',
    print_date: 'June 05',
    tutorId: 't-4',
    tutor: 'Sam Smith',
    activity: 'Sculpting',
    age_group: '9-11',
    time: '17:30-18:30',
    duration: '1',
    freeSpots: 7,
    price: '30 RON',
    description: 'Build shapes and figures using sculpting techniques.',
  },
  {
    id: '7',
    day: 'Tuesday',
    print_date: 'June 06',
    tutorId: 't-3',
    tutor: 'Dicky Roper',
    activity: 'Coloring and Shapes',
    age_group: '3-5',
    time: '15:00-16:00',
    duration: '1',
    freeSpots: 0,
    price: '20 RON',
    description: 'Develop color recognition and shape skills through fun.',
  },
  {
    id: '8',
    day: 'Tuesday',
    print_date: 'June 06',
    tutorId: 't-3',
    tutor: 'Dicky Roper',
    activity: 'Cartoon Drawing',
    age_group: '6-8',
    time: '16:15-17:15',
    duration: '1',
    freeSpots: 3,
    price: '25 RON',
    description: 'Learn to draw simple and fun cartoon characters.',
  },
  {
    id: '9',
    day: 'Wednesday',
    print_date: 'June 07',
    tutorId: 't-1',
    tutor: 'Sam Hog',
    activity: 'Advanced Painting',
    age_group: '9-11',
    time: '17:30-18:30',
    duration: '1',
    freeSpots: 7,
    price: '30 RON',
    description: 'Improve painting skills with more advanced techniques.',
  },
  {
    id: '10',
    day: 'Wednesday',
    print_date: 'June 07',
    tutorId: 't-1',
    tutor: 'Sam Hog',
    activity: 'Finger Painting',
    age_group: '3-5',
    time: '15:00-16:00',
    duration: '1',
    freeSpots: 0,
    price: '20 RON',
    description: 'Have fun painting with fingers and bright colors.',
  },
]

describe('createScheduledClassesList', () => {
  test('Create schedule for Class List', () => {
    const result = createScheduledClassesList(classList)

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
    classList.map((item) => getDay(item.print_date)),
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
      expect(filterClasses(list, selectedTags)).toEqual(list)
    })
  })

  describe('tutor filter', () => {
    test('one tutor', () => {
      const selectedTags: string[] = ['t-1']

      const result = filterClasses(list, selectedTags)

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

      const result = filterClasses(list, selectedTags)

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

      const result = filterClasses(list, selectedTags)

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

      const result = filterClasses(list, selectedTags)

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

      const result = filterClasses(list, selectedTags)

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

      const result = filterClasses(list, selectedTags)

      expect(result).toHaveLength(0)
    })

    test('free spots + age2 + tutor2', () => {
      const selectedTags: string[] = ['freeSpots', 't-2', 'age-3']

      const result = filterClasses(list, selectedTags)

      expect(result).toHaveLength(1)

      expect(result).toEqual([expect.objectContaining({ id: '3' })])
    })

    test('age3 + tutor2 + tutor4', () => {
      const selectedTags: string[] = ['t-2', 't-4', 'age-3']

      const result = filterClasses(list, selectedTags)

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
    const result = getClassesFromDay(list, currentDay)

    expect(result).toHaveLength(10)
  })
  test('middle day', () => {
    const currentDay = 'Sun 05'
    const result = getClassesFromDay(list, currentDay)

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
    const result = getClassesFromDay(list, currentDay)

    expect(result).toHaveLength(2)

    expect(result).toEqual([
      expect.objectContaining({ id: '9' }),
      expect.objectContaining({ id: '10' }),
    ])
  })
})


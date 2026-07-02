import { TClassItem } from '@/public/classesList'
import { createScheduledClassesList } from './classListServ'

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

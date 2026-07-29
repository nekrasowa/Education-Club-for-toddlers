import '@testing-library/jest-dom'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import { FilteringClassesList } from './FilteringClassesList'
import { longClassList } from '@/tests/mocks/classList'
import { schedule } from '@/locales/en/schedule'
import { useClassesDates } from '@/services/dayjs'
import dayjs from 'dayjs'
import { classesListWithUtcDates } from '@/services/dayjs'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

jest.mock('@/services/dayjs', () => {
  const actual = jest.requireActual('@/services/dayjs')

  return {
    ...actual,
    useClassesDates: jest.fn(),
  }
})

const mockedUseClassesDates = jest.mocked(useClassesDates)
const testDate = dayjs('2026-06-05T12:00:00')

describe('FilteringClassesList', () => {
  beforeEach(() => {
    mockedUseClassesDates.mockReturnValue([
      5,
      10,
      'Jun 2026',
      [
        '',
        'Thu 01',
        'Fri 02',
        'Sat 03',
        'Sun 04',
        'Mon 05',
        'Tue 06',
        'Wed 07',
      ],
      classesListWithUtcDates(testDate, longClassList),
    ])
  })
 
  test('renders current month', () => {
    render(<FilteringClassesList />)

    expect(screen.getByText('Jun 2026')).toBeInTheDocument()
  })

  test('disabled bookBtns', () => {
    render(<FilteringClassesList />)

    const disabledButtons = screen
      .queryAllByRole('button', {
        name: schedule.book,
      })
      .filter((button) => button.classList.contains('isDisabled'))

    expect(disabledButtons).toHaveLength(6)
  })
})

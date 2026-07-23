import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import { HomePageContainer } from './HomePageContainer'

describe('HomePageContainer', () => {
  test('redirect to classes list', () => {
    render(<HomePageContainer />)
    const homePageBtn = screen.getByTestId('homePageContInfoBtn')

    expect(homePageBtn).toBeInTheDocument()

    
  })
})

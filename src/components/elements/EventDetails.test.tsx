import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { EventDetails } from './EventDetails'

describe('EventDetails', () => {
  const title = 'Test title'
  const btnText = 'Test text'
  const btnHref = 'Test link'

  test('click on collapse with extra text', async () => {
    const user = userEvent.setup()

    render(<EventDetails title={title} btnText={btnText} btnHref={btnHref} />)

    const collapseMoreBlock = screen.getByTestId('moreBlock')
    expect(screen.queryByTestId('extraText')).not.toBeInTheDocument()

    await user.click(collapseMoreBlock)

    expect(screen.getByTestId('extraText')).toBeInTheDocument()
  })
  test('with price', () => {
    const hasPayment = true
    const price = '25 $'
    render(
      <EventDetails
        title={title}
        hasPayment={hasPayment}
        price={price}
        btnText={btnText}
        btnHref={btnHref}
      />,
    )
    expect(screen.getByTestId('priceBlock')).toBeInTheDocument()
  })

  test('without price', () => {
    render(<EventDetails title={title} btnText={btnText} btnHref={btnHref} />)
    expect(screen.queryByTestId('priceBlock')).not.toBeInTheDocument()
  })
  
})

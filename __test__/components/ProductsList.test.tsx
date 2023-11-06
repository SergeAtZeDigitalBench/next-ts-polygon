import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProductsList from '@/components/ProductsList'

describe('ProductsList', () => {
  it('should render the component', () => {
    render(<ProductsList />)
    const component = screen.getByTestId('ProductsList')

    expect(component).toBeInTheDocument()
  })

  it('should display 6 fetched products initially', async () => {
    render(<ProductsList />)

    const products = await screen.findAllByTestId('ProductCard')
    expect(products).toHaveLength(6)
  })

  it('should display `Load More` button', async () => {
    render(<ProductsList />)
    const button = await screen.findByRole('button', {
      name: /load more/i,
    })

    expect(button).toBeInTheDocument()
  })

  it('should display 6 more fetched products on button click', async () => {
    render(<ProductsList />)
    const button = await screen.findByRole('button', {
      name: /load more/i,
    })

    await userEvent.click(button)
    await waitFor(async () => {
      const products = await screen.findAllByTestId('ProductCard')
      expect(products).toHaveLength(12)
    })
  })
})

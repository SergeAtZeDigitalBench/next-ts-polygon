/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import Navigation from '@/components/Navigation'

describe('Navigation', () => {
  it('renders the component', () => {
    render(<Navigation />)

    const heading = screen.getByRole('navigation')

    expect(heading).toBeInTheDocument()
  })
})

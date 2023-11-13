import { render, screen } from '@testing-library/react'
import React, { useState } from 'react'

const INIT_EMAIL = 'asdf@asdf.com'
const TEST_ID = {
  IMG_WRAPPER: 'image-wrapper',
} as const
const BUTTON_TITLE = 'Click when ready to submit'

const DataForm = () => {
  const [email, setEmail] = useState<string>(INIT_EMAIL)
  return (
    <form>
      <h3>Enter Data</h3>
      <div data-testid={TEST_ID.IMG_WRAPPER}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="data.jpeg" alt="data" />
      </div>
      <label htmlFor="inputEmail">Email</label>
      <input
        type="text"
        id="inputEmail"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
      />

      <label htmlFor="inputColor">Color</label>
      <input type="color" id="inputColor" placeholder="Red" />

      <button title={BUTTON_TITLE}>submit</button>
    </form>
  )
}

describe('DataForm, selecting by different criteria 😜', () => {
  it('should locate the elements by criteria', () => {
    render(<DataForm />)
    const elements: HTMLElement[] = [
      screen.getByRole('button', { name: /submit/i }),
      screen.getByLabelText(/email/i),
      screen.getByPlaceholderText('Red'),
      screen.getByText(/enter data/i),
      screen.getByDisplayValue(INIT_EMAIL),
      screen.getByAltText('data'),
      screen.getByTestId(TEST_ID.IMG_WRAPPER),
      screen.getByTitle(BUTTON_TITLE),
    ]

    for (const element of elements) {
      expect(element).toBeInTheDocument()
    }
  })
})

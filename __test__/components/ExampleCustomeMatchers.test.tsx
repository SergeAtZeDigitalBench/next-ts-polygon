import { render, screen, within } from '@testing-library/react'
import React from 'react'

const DataForm = () => {
  return (
    <div>
      <button>Go Back</button>
      <form aria-label="form">
        <button>Save</button>
        <button>Cancel</button>
      </form>
    </div>
  )
}

/**
 *
 * @description Custom matcher to assert that containing element has the elements by specified role
 */
function toContainRole(container: HTMLElement, role: string, quantity = 1) {
  const elements = within(container).getAllByRole(role)
  if (elements.length === quantity) {
    return {
      pass: true,
      message: () => '',
    }
  }

  return {
    pass: false,
    message: () =>
      `Expected to find ${quantity} ${role} elements. Found ${elements.length} instead.`,
  }
}
/**
 * create file `jest.d.ts`, then add extension below:
 * 
   declare namespace jest {
     interface Matchers<R> {
        toContainRole(role: string, quantity?: number): CustomMatcherResult
     }
   }
 */

expect.extend({ toContainRole })

describe('Custom matchers', () => {
  it('should display 2 form buttons', () => {
    render(<DataForm />)
    const formButtons = within(screen.getByRole('form')).getAllByRole('button')

    expect(formButtons).toHaveLength(2)
  })

  it('should display 2 form buttons, by custom matcher', () => {
    render(<DataForm />)
    const form = screen.getByRole('form')

    expect(form).toContainRole('button', 2)
  })
})

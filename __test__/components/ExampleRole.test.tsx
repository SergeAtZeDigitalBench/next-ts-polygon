import { render, screen } from '@testing-library/react'
import React from 'react'

const RoleExample = () => {
  return (
    <div>
      <a href="/">Link</a>
      <button>Button</button>
      <footer>ConentInfo</footer>
      <h1>Heading</h1>
      <header>Banner</header>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="" alt="description" /> Img
      <input type="checkbox" /> Checkbox
      <input type="number" /> Spinbutton
      <input type="radio" /> Radio
      <input type="text" /> Textbox
      <li>Listitem</li>
      <ul>Listgroup</ul>
    </div>
  )
}

const AccessibleName = () => {
  return (
    <div>
      <div>
        <label htmlFor="inputName">Name</label>
        <input type="text" id="inputName" />

        <label htmlFor="inputEmail">Email</label>
        <input type="text" id="inputEmail" />
      </div>
      <button>Submit</button>
      <button>Cancel</button>
    </div>
  )
}

const IconButtons = () => {
  return (
    <div>
      <button aria-label="check-circle">
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
      </button>

      <button aria-label="code-bracket">
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
          />
        </svg>
      </button>
    </div>
  )
}

const roles = [
  'link',
  'button',
  'contentinfo',
  'heading',
  'banner',
  'img',
  'checkbox',
  'spinbutton',
  'radio',
  'listitem',
  'list',
  'textbox',
]

describe('Example', () => {
  it('should find elements by role', () => {
    render(<RoleExample />)

    for (const role of roles) {
      const element = screen.getByRole(role)
      expect(element).toBeInTheDocument()
    }
  })
})

describe('AccessibleName', () => {
  it('should render the submit button', () => {
    render(<AccessibleName />)
    const button = screen.getByRole('button', {
      name: /submit/i, // Select by accessible name,
    })

    expect(button).toBeInTheDocument()
  })

  it('should render the cancel button', () => {
    render(<AccessibleName />)
    const button = screen.getByRole('button', {
      name: /cancel/i, // Select by accessible name
    })

    expect(button).toBeInTheDocument()
  })

  it('should render name input', () => {
    render(<AccessibleName />)
    const inputName = screen.getByRole('textbox', {
      name: 'Name',
      // Select by accessible name, in case of input, it will be the label's text value, but label needs to have for attribute set
    })

    expect(inputName).toBeInTheDocument()
  })

  it('should render email input', () => {
    render(<AccessibleName />)
    const inputEmail = screen.getByRole('textbox', {
      name: 'Email',
      // Select by accessible name, in case of input, it will be the label's text value, but label needs to have for attribute set
    })

    expect(inputEmail).toBeInTheDocument()
  })
})

describe('IconButtons', () => {
  it('should display check-circle icon-button', () => {
    render(<IconButtons />)
    const checkIconButton = screen.getByRole('button', {
      name: /check-circle/i,
    })

    expect(checkIconButton).toBeInTheDocument()
  })

  it('should display code-bracket icon-button', () => {
    render(<IconButtons />)
    const codeBracketButton = screen.getByRole('button', {
      name: /code-bracket/i,
    })

    expect(codeBracketButton).toBeInTheDocument()
  })
})

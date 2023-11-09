## Testing with Jest & React testing Library
- to view th current test render UI log: in your test case of interest, `screen.logTestingPlaygroundURL()`
- to run the RTL Book helper app: `npx rtl-book serve testing-notes.js`

### React testing Library, Find elements by Role
```jsx
import { render, screen, within } from '@testing-library/react';
import React from 'react';

const RoleExample = () => {
  return (
    <div>
      <a href="/">Link</a>
      <button>Button</button>
      <footer>ConentInfo</footer>
      <h1>Heading</h1>
      <header>Banner</header>
      <img src="" alt="description" /> Img
      <input type="checkbox" /> Checkbox
      <input type="number" /> Spinbutton
      <input type="radio" /> Radio
      <input type="text" /> Textbox
      <li>Listitem</li>
      <ul>Listgroup</ul>
    </div>
  );
};

const roles = [
    'link', // <a>
    'button', // <button>
    'contentinfo', // <footer>
    'heading', // <h1>
    'banner', // <header>
    'img', // <img>
    'checkbox', // <input type="checkbox" />
    'spinbutton', // <input type="number" />
    'radio',  // <input type="radio" />
    'textbox', // <input type="text" />
    'listitem', // <li>
    'list', // <ul>
]

it('should find elements by role', () => {
    render(<RoleExample />)

    for (const role of roles) {
      const element = screen.getByRole(role)
      expect(element).toBeInTheDocument()
    }
  })

```

### get by accessible name
When we query be role, if there is possble to have more that 1 element of the same role found,
then we need to use a selector, for example by accessible name `{ name: string | Regex }`

```jsx
import { render, screen, within } from '@testing-library/react';
import React from 'react';

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

  it('should render email input', () => {
    render(<AccessibleName />)
    const inputEmail = screen.getByRole('textbox', {
      name: 'Email',
      // Select by accessible name, in case of input, it will be the label's text value, but label needs to have for attribute set
    })

    expect(inputEmail).toBeInTheDocument()
  })
})
```

### Get by accessible name, assign directly an accessible name
What if we have a case when we don't have any text content or label referenced the element we are looking to test?
We may need to assign direcly the accessible name by attribute `aria-label="my-name"`, then we can use selector `{ name: /my-name/i }`

```jsx
import { render, screen } from '@testing-library/react'
import React from 'react'

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
```

### Intro to Next.js V3

https://scottmoss.notion.site/scottmoss/Intro-to-Next-js-V3-6cefbdba58d94e3897dcb8d7e7fc0337

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

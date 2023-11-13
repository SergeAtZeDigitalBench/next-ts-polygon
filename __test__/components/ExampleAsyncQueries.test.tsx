import { render, screen } from '@testing-library/react'
import React, { useState, useEffect } from 'react'

const COLOR_LIST = [
  { id: '1', title: 'Red' },
  { id: '2', title: 'Green' },
  { id: '3', title: 'Blue' },
]
const getData = (
  isReject = false
): Promise<
  {
    id: string
    title: string
  }[]
> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isReject) {
        reject(new Error('Error'))
      } else {
        resolve(COLOR_LIST)
      }
    }, 800)
  })

const ColorListAsync = ({ isError }: { isError?: boolean }) => {
  const [error, setError] = useState<null | string>(null)
  const [colors, setColors] = useState<
    {
      id: string
      title: string
    }[]
  >([])

  useEffect(() => {
    setError(null)
    getData(isError)
      .then((data) => {
        setColors(data)
      })
      .catch((e) => {
        setError('Error')
      })
  }, [isError])

  return (
    <>
      <ul>
        {colors.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
      {error && <p>{error}</p>}
    </>
  )
}

describe('ExampleAsyncQueries', () => {
  it('should find the match asynchronously by calling `findBy`', async () => {
    render(<ColorListAsync />)

    const components = await screen.findAllByRole('listitem')
    expect(components).toHaveLength(3)
  })

  it('should NOT find the match synchronously calling `getBy` or `queryBy`', () => {
    render(<ColorListAsync />)

    const components = screen.queryAllByRole('listitem')
    expect(components).toHaveLength(0)
    expect(() => screen.getAllByRole('listitem')).toThrow()
  })

  it('should throw and display error message if fetching error', async () => {
    render(<ColorListAsync isError />)
    let isThrown = false
    try {
      const listItems = await screen.findAllByRole('listitem')
    } catch (e) {
      isThrown = true
    }

    const erorMessage = await screen.findByText(/error/i)

    expect(isThrown).toEqual(true)
    expect(erorMessage).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import React from 'react'

const ColorList = () => (
  //  we have 1 list, 3 listintems
  //  we don't have: textbox
  <ul>
    <li>Red</li>
    <li>Green</li>
    <li>Blue</li>
  </ul>
)

describe('ColorList', () => {
  describe('how `getBy`, `findBy`, `queryBy` methods behave when they find 0 match', () => {
    it("should throw if `getBy` doesn't find a match", () => {
      render(<ColorList />)

      expect.assertions(1)
      expect(() => {
        screen.getByRole('textbox')
      }).toThrow()
    })

    it("should throw if `findBy` doesn't find a match", async () => {
      render(<ColorList />)
      let isError = false

      try {
        await screen.findByRole('textbox')
      } catch (error) {
        isError = true
      }

      expect(isError).toEqual(true)
    })

    it("should return `null` `queryBy` doesn't find a match", () => {
      render(<ColorList />)
      const el = screen.queryByRole('textbox')

      expect(el).not.toBeInTheDocument()
    })
  })

  describe('how `getBy`, `findBy`, `queryBy` methods behave when they find a match', () => {
    it('should assert `getBy` found a match', () => {
      render(<ColorList />)
      const component = screen.getByRole('list')

      expect(component).toBeInTheDocument()
    })

    it('should assert `queryBy` found a match', () => {
      render(<ColorList />)
      const component = screen.queryByRole('list')

      expect(component).toBeInTheDocument()
    })

    it('should assert `findBy` found a match async', async () => {
      render(<ColorList />)
      const componentPromise = screen.findByRole('list')
      const component = await componentPromise

      expect(componentPromise instanceof Promise).toBe(true)
      expect(component).toBeInTheDocument()
    })
  })

  describe('how `getBy`, `findBy`, `queryBy` methods behave when they find > 1 match', () => {
    it('should throw if `getBy` finds > 1 match', () => {
      render(<ColorList />)

      expect.assertions(1)
      expect(() => {
        screen.getByRole('listitem')
      }).toThrow()
    })

    it('should throw if `queryBy` finds > 1 match', () => {
      render(<ColorList />)

      expect.assertions(1)
      expect(() => {
        screen.queryByRole('listitem')
      }).toThrow()
    })

    it('should throw if `findBy` finds > 1 match', async () => {
      render(<ColorList />)
      let isError = false

      try {
        await screen.findByRole('listitem')
      } catch (error) {
        isError = true
      }

      expect(isError).toEqual(true)
    })
  })

  describe('how `getAllBy`, `findAllBy`, `queryAllBy` methods behave when they find more than one, > 1, match', () => {
    it('should assert `getAllBy` found list of components matching', () => {
      render(<ColorList />)
      const components = screen.getAllByRole('listitem')

      expect(components).toHaveLength(3)
    })

    it('should assert `queryAllBy` found list of components matching', () => {
      render(<ColorList />)
      const components = screen.queryAllByRole('listitem')

      expect(components).toHaveLength(3)
    })

    it('should assert `findAllBy` found list of components matching async', async () => {
      render(<ColorList />)
      const componentsPromise = screen.findAllByRole('listitem')
      const components = await componentsPromise

      expect(componentsPromise instanceof Promise).toBe(true)
      expect(components).toHaveLength(3)
    })
  })
})

import { render, screen } from "@testing-library/react"

interface IProps {
  maybeValue?: string | number
}

const MyComponent = ({ maybeValue }: IProps): JSX.Element => {
  const numberValue = Number(maybeValue)

  return (
    <>
      <h3>Converted to number plus 10: {numberValue + 10}</h3>
    </>
  )
}

describe("MyComponent", () => {
  it("should render with prop as a number", () => {
    render(<MyComponent maybeValue={11.5} />)
    expect(
      screen.getByText(`Converted to number plus 10: ${11.5 + 10}`)
    ).toBeInTheDocument()
  })

  it("should render with prop as a string", () => {
    render(<MyComponent maybeValue="11.5" />)
    expect(
      screen.getByText(`Converted to number plus 10: ${11.5 + 10}`)
    ).toBeInTheDocument()
  })

  it("should render with prop as an empty string", () => {
    render(<MyComponent maybeValue="" />)
    expect(
      screen.getByText(`Converted to number plus 10: ${0 + 10}`)
    ).toBeInTheDocument()
  })

  it("should render with prop as an `undefined`", () => {
    render(<MyComponent />)
    expect(
      screen.getByText(`Converted to number plus 10: ${0 + 10}`)
    ).toBeInTheDocument()
  })
})

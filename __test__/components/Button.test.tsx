import { render, screen } from "@testing-library/react"
import Button from "../../src/components/MockUI/Button"

const TEXT_CONTENT = "My button"

describe("Buton", () => {
  it("should render the component", () => {
    render(<Button>{TEXT_CONTENT}</Button>)

    expect(screen.getByText(TEXT_CONTENT)).toBeInTheDocument()
  })
})

import { render, screen, fireEvent } from "@testing-library/react"
import { SubscriptionsProvider } from "@/providers/SubscriptionsContext"
import { INewsletterSubscriptions } from "@/types"
import MockUI from "@/components/MockUI"
import { newsletters, DATA_TEST_ID } from "@/constants"

const {
  SUBSCRIBE_TO_ALL,
  SUBMIT_FORM,
  NEWSLETTERS_LIST,
  SUBSCRIBE_TO_ALL_BUTTON,
} = DATA_TEST_ID

const renderWithContext = (
  ui: React.ReactElement,
  value: Partial<INewsletterSubscriptions>
) => {
  return render(
    <SubscriptionsProvider initialServerState={value}>
      {ui}
    </SubscriptionsProvider>
  )
}

describe("SubscriptionsProvider", () => {
  const {
    input: { newsletters },
  } = generateTestData()

  it("should render all nested component tree", () => {
    renderWithContext(<MockUI />, { newsletters })

    expect(screen.getByTestId(SUBSCRIBE_TO_ALL)).toBeInTheDocument()
    expect(screen.getByTestId(NEWSLETTERS_LIST)).toBeInTheDocument()
    expect(screen.getByTestId(SUBMIT_FORM)).toBeInTheDocument()
  })

  it("should render initial state value - no subscriptions", () => {
    renderWithContext(<MockUI />, { newsletters })
    const buttons = screen.getAllByText("+")

    expect(buttons.length).toEqual(newsletters.length + 1)
    expect(screen.getByText(/You have 0 subscriptions/)).toBeInTheDocument()
  })

  it("should select all subscriptions, if select all button clicked", () => {
    renderWithContext(<MockUI />, { newsletters })
    const buttonSelectAll = screen.getByTestId(SUBSCRIBE_TO_ALL_BUTTON)

    fireEvent.click(buttonSelectAll)
    expect(screen.getByText(/You have 2 subscriptions/)).toBeInTheDocument()
  })

  it("should select one subscription, if select newsletter button clicked", () => {
    renderWithContext(<MockUI />, { newsletters })
    const buttons = screen.getAllByRole("button")

    fireEvent.click(buttons[1])
    expect(screen.getByText(/You have 1 subscriptions/)).toBeInTheDocument()
  })
})

function generateTestData() {
  return {
    input: {
      newsletters,
    },
    output: {},
  }
}

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import UserForm from '@/components/UserForm'

describe('UserForm', () => {
  let onUserAdd = jest.fn()
  const mockProps = { onUserAdd }
  const mockUser = {
    name: 'John Doe',
    email: 'john.doe@gmail.com',
  } as const

  afterEach(() => {
    onUserAdd.mockReset()
  })

  it('should render the component', () => {
    render(<UserForm {...mockProps} />)
    const component = screen.getByTestId('UserForm')

    expect(component).toBeInTheDocument()
  })

  it('should render 2 inputs and submit button', () => {
    render(<UserForm {...mockProps} />)
    const inputs = screen.getAllByRole('textbox')
    const submitButton = screen.getByRole('button', {
      name: /add user/i,
    })

    expect(inputs).toHaveLength(2)
    expect(submitButton).toBeInTheDocument()
  })

  it('should NOT call the `onUserAdd` callback on submit if the fields values are not valid or empty', async () => {
    render(<UserForm {...mockProps} />)
    const submitButton = screen.getByRole('button', {
      name: /add user/i,
    })

    await userEvent.click(submitButton)

    expect(onUserAdd).toHaveBeenCalledTimes(0)
  })

  it('should call the `onUserAdd` callback on submitif the fields values are valid', async () => {
    render(<UserForm {...mockProps} />)
    const submitButton = screen.getByRole('button', {
      name: /add user/i,
    })

    // Also can get by: const nameInput = screen.getByLabelText(/enter name/i)
    const nameInput = screen.getByRole('textbox', { name: /enter name/i })
    const emailInput = screen.getByRole('textbox', { name: /enter email/i })

    await userEvent.click(nameInput)
    await userEvent.keyboard(mockUser.name)

    await userEvent.click(emailInput)
    await userEvent.keyboard(mockUser.email)

    await userEvent.click(submitButton)

    expect(onUserAdd).toHaveBeenCalledTimes(1)
    expect(onUserAdd).toHaveBeenCalledWith(mockUser)
  })
})

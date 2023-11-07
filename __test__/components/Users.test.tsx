import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Users from '@/components/Users'

describe('Users', () => {
  const mockUser = {
    name: 'John Doe',
    email: 'john.doe@gmail.com',
  } as const

  it('should render the component', () => {
    render(<Users />)
    const component = screen.getByTestId('Users')

    expect(component).toBeInTheDocument()
  })

  it('should render both UserForm and UsersList as nested components', () => {
    render(<Users />)
    const componentUserForm = screen.getByTestId('UserForm')
    const componentUsersList = screen.getByTestId('UsersList')

    expect(componentUserForm).toBeInTheDocument()
    expect(componentUsersList).toBeInTheDocument()
  })

  it('should update the users list when new user is submitted', async () => {
    render(<Users />)
    // Also can get by: const nameInput = screen.getByLabelText(/enter name/i)
    const nameInput = screen.getByRole('textbox', { name: /enter name/i })
    const emailInput = screen.getByRole('textbox', { name: /enter email/i })

    await userEvent.click(nameInput)
    await userEvent.keyboard(mockUser.name)
    await userEvent.click(emailInput)
    await userEvent.keyboard(mockUser.email)
    await userEvent.keyboard('{Enter}')

    const newUserName = screen.getByRole('cell', {
      name: mockUser.name,
    })
    const newUserEmail = await screen.getByRole('cell', {
      name: mockUser.email,
    })

    expect(newUserName).toBeInTheDocument()
    expect(newUserEmail).toBeInTheDocument()
  })
})

import { render, screen, within } from '@testing-library/react'

import UsersList from '@/components/UsersList'

describe('UsersList', () => {
  const mockUsers = [
    {
      name: 'John Doe',
      email: 'john.doe@gmail.com',
    },
    {
      name: 'Jane Doe',
      email: 'jane.doe@gmail.com',
    },
  ]

  it('should render the component', () => {
    render(<UsersList users={[]} />)
    const component = screen.getByTestId('UsersList')

    expect(component).toBeInTheDocument()
  })

  it('should render `No  users` message if the users list is empty', () => {
    render(<UsersList users={[]} />)
    const component = screen.getByTestId('UsersList')

    expect(component).toHaveTextContent(/no users/i)
  })

  // here we want to assure the number of rows equal the number of users list elements
  // however, if we select the all table rows it will account the header rows and maybe some other rows
  // but we would like to count the rows within the table body only, for this example
  it('should render users table if the users list is not empty', () => {
    render(<UsersList users={mockUsers} />)
    const component = screen.getByRole('table')
    const bodyRows = within(screen.getByTestId('UsersList_tbody')).getAllByRole(
      'row'
    )

    // 1. within(< scope >) - this util will restrict the search ofr matching elements within the scope of a specified DOM element
    // 2. screen.logTestingPlaygroundURL() // 👍 logs all rendered html tree for this current test

    expect(component).toBeInTheDocument()
    expect(bodyRows).toHaveLength(mockUsers.length)
  })

  // as an alternative for the test case above, we can use `container.querySelector()`
  it('should render users table if the users list is not empty [:alternative] ', () => {
    const { container } = render(<UsersList users={mockUsers} />)
    const bodyRows = container.querySelectorAll('tbody tr')

    expect(bodyRows).toHaveLength(mockUsers.length)
  })
})

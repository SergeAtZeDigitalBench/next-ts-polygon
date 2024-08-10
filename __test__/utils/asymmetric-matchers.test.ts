import { v4 as id } from 'uuid'

type ComputerScientist = {
  id: string
  firstName: string
  lastName: string
  isCool?: boolean
}

const createComputerScientist = (
  firstName: string,
  lastName: string
): ComputerScientist => ({ id: 'cs-' + id(), firstName, lastName })

const addToCoolKidsClub = (p: ComputerScientist, club: unknown[]) => {
  club.push({ ...p, isCool: true })
}

it('basket has empire apples', () => {
  const basket = [
    {
      name: 'Empire',
      count: 1,
    },
  ]
  expect(basket).toEqual([expect.objectContaining({ name: 'Empire' })])
})

it('include cool computer scientists by virtue of them being in the club', () => {
  const people: ComputerScientist[] = []

  addToCoolKidsClub(createComputerScientist('Grace', 'Hopper'), people)
  addToCoolKidsClub(createComputerScientist('Ada', 'Lovelace'), people)
  addToCoolKidsClub(createComputerScientist('Annie', 'Easley'), people)
  addToCoolKidsClub(createComputerScientist('Dorothy', 'Vaughn'), people)

  expect(people).toEqual([
    expect.objectContaining({
      id: expect.stringContaining('cs-'),
      firstName: expect.any(String),
      lastName: expect.any(String),
      isCool: true,
    }),
    expect.objectContaining({
      id: expect.stringContaining('cs-'),
      firstName: expect.any(String),
      lastName: expect.any(String),
      isCool: true,
    }),
    expect.objectContaining({
      id: expect.stringContaining('cs-'),
      firstName: expect.any(String),
      lastName: expect.any(String),
      isCool: true,
    }),
    expect.objectContaining({
      id: expect.stringContaining('cs-'),
      firstName: expect.any(String),
      lastName: expect.any(String),
      isCool: true,
    }),
  ])
})

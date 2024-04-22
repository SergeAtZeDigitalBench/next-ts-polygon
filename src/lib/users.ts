const USERS = [
  { id: '123', email: 'john.doe@gmail.com', password: 'Secret123' },
]

export const verifyUser = ({
  email,
  password,
}: Record<'email' | 'password', string>): Promise<(typeof USERS)[number]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userFound = USERS.find(
        (current) => current.email === email && current.password === password
      )

      if (!userFound) {
        reject(new Error('Wrong credentials'))
      } else {
        resolve(userFound)
      }
    }, 800)
  })
}

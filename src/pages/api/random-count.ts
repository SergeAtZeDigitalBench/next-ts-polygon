import { NextApiHandler } from "next"

const wait = async (timeout = 500) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(null)
    }, timeout)
  })

interface IReturnType {}

const handler: NextApiHandler<IReturnType> = async (req, res) => {
  await wait(700)
  const randomNumber = Math.floor(Math.random() * 1000)

  res.status(200).json({ data: randomNumber })
}

export default handler

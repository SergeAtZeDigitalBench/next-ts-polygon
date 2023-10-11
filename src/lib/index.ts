interface IDelayProps {
  delay?: number
  error?: string
}

export const wait = ({ delay = 800, error }: IDelayProps) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!!error) {
        reject(new Error(error))
      } else {
        resolve(null)
      }
    }, delay)
  })

export const postMockData = async <D = any>(data: D, options: IDelayProps) => {
  await wait(options)
  console.log('API received data: ', data)
}

export const isServer = () => typeof window === 'undefined'

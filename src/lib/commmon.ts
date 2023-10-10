export const getRandomFromArray = <I = unknown>(arrList: I[]) => {
  if (arrList.length <= 1) return arrList[0]

  const randomIndex = Math.floor(Math.random() * arrList.length)

  return arrList[randomIndex]
}

export const wait = ({
  delay = 800,
  error,
}: {
  delay?: number
  error?: string
}) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject(new Error(error))
      } else {
        resolve(null)
      }
    }, delay)
  })

export const delay = (max = 2500, error?: string) => {
  const randomDelayTime = Math.floor(Math.random() * (max - 500 + 1))
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (error) {
        reject(new Error(error))
      } else {
        resolve(null)
      }
    }, randomDelayTime)
  )
}

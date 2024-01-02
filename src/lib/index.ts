export const wait = (timeout: number, error?: string) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject(error)
      } else {
        resolve(null)
      }
    }, timeout)
  })

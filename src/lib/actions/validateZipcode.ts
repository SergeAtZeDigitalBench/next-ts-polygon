'use server'

const wait = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })

export const validateZipCode = async (zipCode: string): Promise<boolean> => {
  console.log('validateZipcode on SERVER: ', zipCode)
  const REGEX_ZIP = /(^\d{5}$)|(^\d{5}-\d{4}$)/
  await wait()

  return REGEX_ZIP.test(zipCode) && zipCode.startsWith('9')
}

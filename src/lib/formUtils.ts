import { IRegisterInput, ILoginInput } from '@/types'

export const isFormValid = (values: IRegisterInput | ILoginInput) => {
  const isAnyEmpty = Object.values(values).some((value) => value.length === 0)

  return !isAnyEmpty
}

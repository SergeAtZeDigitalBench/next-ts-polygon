'use client'

import { Button, ButtonProps } from '@nextui-org/react'
import { useFormStatus } from 'react-dom'

interface Props extends ButtonProps {}

const SubmitButton = ({ children, ...restButtonProps }: Props): JSX.Element => {
  const status = useFormStatus()

  return (
    <Button type="submit" isLoading={status.pending} {...restButtonProps}>
      {children}
    </Button>
  )
}

export default SubmitButton

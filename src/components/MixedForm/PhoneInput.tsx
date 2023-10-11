'use client'

import { ChangeEvent } from 'react'

// Helper function for phone number formatting (just an example)
const formatPhoneNumber = (number: string) => {
  // Format the phone number as desired. This is just a basic example.
  return number.replace(/\D/g, '').slice(0, 10)
}

interface IProps {
  inputState: [string, React.Dispatch<React.SetStateAction<string>>]
}

const PhoneInput = ({ inputState }: IProps): JSX.Element => {
  const [phoneNumber, setPhoneNumber] = inputState

  const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Some function to format the phone number
    const formattedNumber = formatPhoneNumber(event.target.value)
    setPhoneNumber(formattedNumber)
  }

  return (
    <input
      type="tel"
      name="phoneNumber"
      placeholder="Phone Number"
      value={phoneNumber}
      onChange={handlePhoneNumberChange}
      className="px-2 py-1 border rounded border-slate-500"
    />
  )
}

export default PhoneInput

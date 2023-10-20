'use client'

import { useState } from 'react'

import { IServerActionResponse } from '@/types'

interface IState extends IServerActionResponse {
  pending?: boolean
}

interface IProps {
  handleDeleteAction: () => Promise<IServerActionResponse>
}

const DeleteButton = ({ handleDeleteAction }: IProps): JSX.Element => {
  const [status, setStatus] = useState<IState>({})

  const handleClick = async () => {
    setStatus({ pending: true })
    const res = await handleDeleteAction()
    setStatus(res)
  }

  return (
    <>
      <button
        onClick={handleClick}
        disabled={status.pending}
        className="px-2 py-1 bg-red-600 hover:bg-red-700 text-white rounded"
      >
        Delete
      </button>

      {status.error && (
        <p className="text-red-600 font-bold text-center my-2">
          {status.error}
        </p>
      )}
    </>
  )
}

export default DeleteButton

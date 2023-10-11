'use client'

import React, { useState } from 'react'

import { IServerActionResult } from '@/types'

interface IStatus {
  loading: boolean
  error: null | string
}
const INIT_STATUS: IStatus = { loading: false, error: null }

interface IProps {
  deleteServerAction: (id: string) => Promise<IServerActionResult>
  id: string
}

const DeleteTodoButton = ({ id, deleteServerAction }: IProps): JSX.Element => {
  const [state, setState] = useState<IStatus>(INIT_STATUS)

  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    setState({ ...INIT_STATUS, loading: true })
    const res = await deleteServerAction(id)
    setState({ loading: false, error: res.error || null })
  }

  return (
    <div>
      <button
        onClick={handleDelete}
        className="px-4 py-2 mb-2 rounded bg-red-700 hover:bg-red-800 disabled:bg-gray-400 text-white font-bold"
        disabled={state.loading}
      >
        delete
      </button>

      <div className="min-h-[50px]">
        {state.error && (
          <p className="text-red-600 font-semibold text-center">
            {state.error}
          </p>
        )}
      </div>
    </div>
  )
}

export default DeleteTodoButton

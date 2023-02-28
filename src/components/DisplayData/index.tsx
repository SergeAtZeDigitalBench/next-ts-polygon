import React, { useState, useEffect } from "react"
import useApiPolling from "@/hooks/useApiPolling"

const getCount = async () => {
  try {
    const res = await fetch("/api/random-count")
    if (!res.ok) {
      throw new Error(res.statusText || "Failed fetch count")
    }
    const { data } = await res.json()
    return { data, error: null }
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : "Failed fetch count",
    }
  }
}

interface IProps {
  [x: string]: unknown
}

const DisplayData = ({}: IProps): JSX.Element => {
  const [count, setCount] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleGetCount = async () => {
    setError(null)
    const { data, error } = await getCount()
    data && setCount(data)
    error && setError(error)
  }

  const endPolling = useApiPolling(handleGetCount, 1000)

  useEffect(() => {
    return () => {
      endPolling()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h4>Count: {count}</h4>
      {error && <p>{error}</p>}
    </div>
  )
}

export default DisplayData

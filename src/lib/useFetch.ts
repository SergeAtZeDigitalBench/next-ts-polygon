import { useState, useEffect, useCallback, useRef } from 'react'

interface IHookProps<Args extends any[], Data = unknown> {
  fetcherFn: (...args: Args) => Promise<Data>
  onSuccess?: (D: Data) => void
  onError?: (error: string) => void
  initialData?: Data
}

export const useLazyFetch = <Args extends any[], Data = unknown>({
  fetcherFn,
  initialData,
  onError,
  onSuccess,
}: IHookProps<Args, Data>): [
  (...args: Args) => Promise<void>,
  {
    data: Data | null
    loading: boolean
    error: string | null
  }
] => {
  const [data, setData] = useState<Data | null>(() => initialData || null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<null | string>(null)
  const mountedRef = useRef<boolean>(true)

  const handleFetch = useCallback(
    async (...args: Args) => {
      try {
        setLoading(true)
        setError(null)
        const data = await fetcherFn(...args)
        if (mountedRef.current) {
          setData(data)
          setLoading(false)
          onSuccess && onSuccess(data)
        }
      } catch (err) {
        if (mountedRef.current) {
          const message = err instanceof Error ? err.message : 'failed to fetch'
          setError(message)
          setLoading(false)
          onError && onError(message)
        }
      }
    },
    [fetcherFn, onError, onSuccess]
  )

  useEffect(() => {
    return () => {
      mountedRef.current = false
    }
  }, [])

  return [handleFetch, { data, loading, error }]
}

import { useEffect, useCallback, useRef, MouseEventHandler } from 'react'
import { useRouter } from 'next/navigation'

export const useModal = () => {
  const overlayRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const onDismiss = useCallback(() => {
    router.back()
  }, [router])

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlayRef.current || e.target === wrapperRef.current) {
        if (onDismiss) onDismiss()
      }
    },
    [onDismiss]
  )

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss()
    },
    [onDismiss]
  )

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onKeyDown])

  return { onClick, overlayRef, wrapperRef }
}

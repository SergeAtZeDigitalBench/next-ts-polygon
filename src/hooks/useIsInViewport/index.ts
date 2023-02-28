import React, { useState, useEffect, useMemo, useRef } from "react"

const useIsInViewport = (ref: React.RefObject<HTMLDivElement>) => {
  const [isIntersecting, setIsIntersecting] = useState(true)

  useEffect(() => {
    const cachedRef = ref.current
    if (!cachedRef) return

    const observer = new IntersectionObserver(([entry]) =>
      setIsIntersecting(entry.isIntersecting)
    )

    observer.observe(cachedRef)

    return () => {
      observer.disconnect()
    }
  }, [ref])

  return isIntersecting
}

export default useIsInViewport

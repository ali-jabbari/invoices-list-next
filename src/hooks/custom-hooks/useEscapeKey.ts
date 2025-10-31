import { useEffect } from 'react'

type EscapeHandler = () => void

let escapeStack: EscapeHandler[] = []

export const useEscapeKey = (handler: EscapeHandler, active: boolean) => {
  useEffect(() => {
    if (!active) return

    const wrappedHandler = () => {
      if (escapeStack[escapeStack.length - 1] === wrappedHandler) {
        handler()
        escapeStack.pop()
      }
    }

    escapeStack.push(wrappedHandler)

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        escapeStack[escapeStack.length - 1]?.()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      escapeStack = escapeStack.filter((h) => h !== wrappedHandler)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [handler, active])
}

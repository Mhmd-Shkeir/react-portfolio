import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

interface TypingTextProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  className?: string
}

export default function TypingText({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 1800,
  className = '',
}: TypingTextProps) {
  const prefersReducedMotion = useReducedMotion()
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>(
    'typing',
  )

  useEffect(() => {
    if (prefersReducedMotion) return

    const currentWord = words[wordIndex]

    if (phase === 'typing') {
      if (text.length < currentWord.length) {
        const timeout = setTimeout(
          () => setText(currentWord.slice(0, text.length + 1)),
          typingSpeed,
        )
        return () => clearTimeout(timeout)
      }
      const timeout = setTimeout(() => setPhase('pausing'), pauseDuration)
      return () => clearTimeout(timeout)
    }

    if (phase === 'pausing') {
      const timeout = setTimeout(() => setPhase('deleting'), pauseDuration)
      return () => clearTimeout(timeout)
    }

    if (text.length > 0) {
      const timeout = setTimeout(
        () => setText(currentWord.slice(0, text.length - 1)),
        deletingSpeed,
      )
      return () => clearTimeout(timeout)
    }

    const timeout = setTimeout(() => {
      setWordIndex((prev) => (prev + 1) % words.length)
      setPhase('typing')
    }, 0)
    return () => clearTimeout(timeout)
  }, [
    text,
    phase,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    prefersReducedMotion,
  ])

  const displayText = prefersReducedMotion ? words[0] : text

  return (
    <span className={className}>
      {displayText}
      {!prefersReducedMotion && (
        <span className="ml-1 inline-block w-[2px] animate-pulse bg-accent align-middle h-[1em]" />
      )}
    </span>
  )
}

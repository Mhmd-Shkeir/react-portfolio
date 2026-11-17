import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  /** `xl` is a near-full-height viewer panel with no inner padding. */
  size?: 'md' | 'xl'
}

const panelClasses = {
  md: 'max-h-[85vh] max-w-2xl overflow-y-auto p-8',
  xl: 'flex h-[90vh] max-w-4xl flex-col overflow-hidden',
}

const closeClasses = {
  md: 'right-6 top-6',
  xl: 'right-4 top-3.5',
}

export default function Modal({
  isOpen,
  onClose,
  children,
  size = 'md',
}: ModalProps) {
  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full rounded-2xl border border-border bg-surface ${panelClasses[size]}`}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className={`absolute z-10 text-muted transition-colors hover:text-ink ${closeClasses[size]}`}
            >
              <FiX size={20} />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { NAV_ITEMS } from '@/lib/constants'
import { useActiveSection } from '@/hooks/useActiveSection'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const activeId = useActiveSection(NAV_ITEMS.map((item) => item.id))

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (id: string) => {
    setIsOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        isScrolled
          ? 'border-b border-border bg-bg/80 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => handleNavClick('home')}
          className="font-mono text-sm font-semibold text-ink"
        >
          MAS<span className="text-accent">.</span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeId === item.id
                    ? 'text-accent'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-ink md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-b border-border bg-bg md:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full px-6 py-3 text-left text-sm font-medium ${
                    activeId === item.id ? 'text-accent' : 'text-muted'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}

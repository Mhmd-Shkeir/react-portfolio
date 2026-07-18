import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps extends ComponentPropsWithoutRef<'a'> {
  variant?: Variant
  children: ReactNode
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-accent text-white hover:bg-blue-500 border border-transparent',
  secondary:
    'bg-surface text-ink border border-border hover:bg-surface-hover',
  ghost: 'text-ink border border-transparent hover:text-accent',
}

export default function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}

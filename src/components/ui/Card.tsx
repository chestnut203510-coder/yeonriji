import type { ReactNode } from 'react'

interface CardProps {
  title?: string
  description?: string
  children: ReactNode
  className?: string
}

export function Card({ title, description, children, className = '' }: CardProps) {
  return (
    <section className={`overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-soft ${className}`}>
      {(title || description) && (
        <header className="mb-4">
          {title && <h2 className="text-xl font-semibold text-slate-900">{title}</h2>}
          {description && <p className="mt-1 text-sm text-slate-500">{description}</p>}
        </header>
      )}
      {children}
    </section>
  )
}

import type { ReactNode } from 'react'

interface PageWrapperProps {
  children: ReactNode
  title?: string
  description?: string
}

export function PageWrapper({ children, title, description }: PageWrapperProps) {
  return (
    <div className="space-y-6 py-8 md:py-10">
      {(title || description) && (
        <header className="space-y-2">
          {title && <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">{title}</h1>}
          {description && <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">{description}</p>}
        </header>
      )}
      {children}
    </div>
  )
}

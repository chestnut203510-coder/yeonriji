import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

export function Container({ children }: ContainerProps) {
  return <div className="mx-auto w-full max-w-7xl px-0 sm:px-4 md:px-6">{children}</div>
}

import { BottomNavigation } from './BottomNavigation'
import { Container } from './Container'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import type { ReactNode } from 'react'

interface LayoutShellProps {
  children: ReactNode
}

export function LayoutShell({ children }: LayoutShellProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 md:grid-cols-[250px_1fr] md:px-6 md:py-8">
        <Sidebar />
        <Container>
          <div className="min-h-[calc(100vh-8rem)] rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft md:p-8">
            {children}
          </div>
        </Container>
      </div>
      <BottomNavigation />
    </div>
  )
}

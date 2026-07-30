import '../styles/globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { LayoutShell } from '@/components/ui/LayoutShell'

export const metadata: Metadata = {
  title: 'Yeonriji',
  description: '관계 관리 웹 서비스',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  )
}

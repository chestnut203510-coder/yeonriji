'use client'

import { Container } from '@/components/ui/Container'
import { PageWrapper } from '@/components/ui/PageWrapper'

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="ko">
      <body>
        <Container>
          <PageWrapper title="문제가 발생했습니다" description="앱에서 오류가 발생했습니다. 다시 시도해주세요.">
            <div className="space-y-6 rounded-3xl border border-rose-200 bg-rose-50 p-10 text-center text-slate-900 shadow-soft">
              <p className="text-base font-medium">{error.message}</p>
              <button
                type="button"
                onClick={() => reset()}
                className="rounded-full bg-primary-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-600"
              >
                다시 시도
              </button>
            </div>
          </PageWrapper>
        </Container>
      </body>
    </html>
  )
}

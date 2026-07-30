import { checkSupabaseConnection } from '@/lib/supabaseHealth'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Health Check | Yeonriji',
}

export default async function HealthPage() {
  const health = await checkSupabaseConnection()

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 md:px-8">
      <section className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
        <h1 className="text-2xl font-semibold">Supabase Health Check</h1>
        <p className="mt-3 text-sm text-slate-600">Supabase 연결 상태를 확인합니다.</p>

        <div className="mt-8 space-y-4">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm text-slate-500">상태</p>
            <p className="mt-2 text-xl font-semibold text-slate-900">{health.status}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm text-slate-500">결과</p>
            <p className="mt-2 text-base text-slate-900">{health.message}</p>
          </div>
        </div>
      </section>
    </main>
  )
}

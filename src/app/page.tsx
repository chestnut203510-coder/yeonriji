import { PageWrapper } from '@/components/ui/PageWrapper'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 md:px-8">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
        <PageWrapper title="Yeonriji" description="Supabase 연결 테스트를 수행하는 초기 앱 쉘입니다.">
          <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm text-slate-500">현재 프로젝트는 Supabase 연결을 지원하도록 구성되어 있습니다.</p>
            <p className="text-sm text-slate-500">
              연결 상태를 확인하려면 <a className="font-semibold text-primary-600" href="/health">Health Check</a> 페이지를 방문하세요.
            </p>
          </div>
        </PageWrapper>
      </div>
    </main>
  )
}

export function Sidebar() {
  return (
    <aside className="sticky top-20 hidden h-[calc(100vh-5rem)] w-full flex-col gap-3 overflow-auto rounded-3xl border border-slate-200 bg-white p-5 shadow-soft md:flex">
      <div className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">네비게이션</div>
      <nav aria-label="사이드바" className="flex flex-1 flex-col gap-2">
        <a href="#" className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
          대시보드
        </a>
        <a href="#" className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
          관계 그래프
        </a>
        <a href="#" className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
          탐색기
        </a>
        <a href="#" className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
          설정
        </a>
      </nav>
    </aside>
  )
}

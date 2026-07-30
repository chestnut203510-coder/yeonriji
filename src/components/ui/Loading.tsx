export function Loading() {
  return (
    <div className="flex min-h-[160px] items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white p-6 text-slate-500 shadow-soft">
      <div className="flex items-center gap-3 text-base font-medium">
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-500 border-t-transparent" />
        로딩 중...
      </div>
    </div>
  )
}

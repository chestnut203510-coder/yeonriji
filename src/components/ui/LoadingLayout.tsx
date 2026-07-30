interface LoadingLayoutProps {
  message?: string
}

export function LoadingLayout({ message = '로딩 중...' }: LoadingLayoutProps) {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-50 px-4 py-10 text-slate-700">
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <span className="h-12 w-12 animate-spin rounded-full border-4 border-primary-500 border-t-transparent" />
        <p className="text-base font-medium">{message}</p>
      </div>
    </main>
  )
}

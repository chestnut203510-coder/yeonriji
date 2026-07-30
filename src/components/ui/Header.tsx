interface HeaderItem {
  label: string
  href: string
  current?: boolean
}

const navItems: HeaderItem[] = [
  { label: '홈', href: '#', current: true },
  { label: '대시보드', href: '#dashboard' },
  { label: '설정', href: '#settings' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-primary-500 text-base font-semibold text-white shadow-soft">
            Y
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Yeonriji</p>
            <p className="text-sm font-semibold text-slate-900">관계 기반 앱 쉘</p>
          </div>
        </div>
        <nav aria-label="헤더 내비게이션" className="hidden items-center gap-3 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`rounded-full px-3 py-2 text-sm transition ${
                item.current ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

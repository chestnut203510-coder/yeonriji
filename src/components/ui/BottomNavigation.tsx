const bottomItems = [
  { label: '홈', href: '#', icon: '🏠' },
  { label: '검색', href: '#search', icon: '🔍' },
  { label: '활동', href: '#activity', icon: '📌' },
  { label: '설정', href: '#settings', icon: '⚙️' },
]

export function BottomNavigation() {
  return (
    <nav
      aria-label="모바일 하단 네비게이션"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-soft backdrop-blur-sm md:hidden"
    >
      <ul className="flex items-center justify-between gap-2">
        {bottomItems.map((item) => (
          <li key={item.label} className="flex-1">
            <a
              href={item.href}
              className="flex flex-col items-center justify-center rounded-3xl px-2 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              <span>{item.icon}</span>
              <span className="mt-1">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

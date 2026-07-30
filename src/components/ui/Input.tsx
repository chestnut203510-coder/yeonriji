import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <label className="block text-sm text-slate-700">
      {label && <span className="mb-2 block font-medium">{label}</span>}
      <input
        className={`w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 shadow-sm transition focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100 disabled:cursor-not-allowed disabled:bg-slate-50 ${className}`}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${props.id}-error` : undefined}
        {...props}
      />
      {error ? (
        <p id={`${props.id}-error`} className="mt-2 text-sm text-rose-600">
          {error}
        </p>
      ) : null}
    </label>
  )
}

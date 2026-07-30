import { createClient } from '@supabase/supabase-js'
import { getPublicEnv, isSupabaseConfigured } from './env'

export function getBrowserSupabaseClient() {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase 환경 변수가 설정되지 않았습니다. NEXT_PUBLIC_SUPABASE_URL 및 NEXT_PUBLIC_SUPABASE_ANON_KEY를 확인하세요.')
  }

  const env = getPublicEnv()

  return createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
}

export function getServerSupabaseClient() {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase 환경 변수가 설정되지 않았습니다. NEXT_PUBLIC_SUPABASE_URL 및 NEXT_PUBLIC_SUPABASE_ANON_KEY를 확인하세요.')
  }

  const env = getPublicEnv()

  return createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
}

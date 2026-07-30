import { getServerSupabaseClient } from './supabaseClient'
import { isSupabaseConfigured } from './env'

export interface SupabaseHealthResult {
  ok: boolean
  status: 'ready' | 'missing-config' | 'error'
  message: string
}

export async function checkSupabaseConnection(): Promise<SupabaseHealthResult> {
  if (!isSupabaseConfigured()) {
    return {
      ok: false,
      status: 'missing-config',
      message: 'Supabase 환경 변수가 설정되지 않았습니다. .env.local을 확인하세요.',
    }
  }

  const client = getServerSupabaseClient()

  try {
    const { data, error } = await client.auth.getSession()

    if (error) {
      return {
        ok: false,
        status: 'error',
        message: `Supabase 연결 테스트 중 오류가 발생했습니다: ${error.message}`,
      }
    }

    return {
      ok: true,
      status: 'ready',
      message: data.session
        ? 'Supabase 연결 성공. 활성 세션이 감지되었습니다.'
        : 'Supabase 연결 성공. 유효한 익명 키로 연결되었습니다.',
    }
  } catch (error) {
    return {
      ok: false,
      status: 'error',
      message: error instanceof Error ? error.message : '알 수 없는 Supabase 연결 오류가 발생했습니다.',
    }
  }
}

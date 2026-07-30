import { Container } from '@/components/ui/Container'
import { PageWrapper } from '@/components/ui/PageWrapper'

export default function NotFound() {
  return (
    <Container>
      <PageWrapper title="페이지를 찾을 수 없습니다" description="요청하신 페이지가 없거나 이동 중입니다.">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-soft">
          <p className="text-sm text-slate-600">URL을 다시 확인하시거나 홈페이지로 돌아가세요.</p>
        </div>
      </PageWrapper>
    </Container>
  )
}

import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-purple-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            오늘부터 시작해보세요!
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            서비스 체험 기간 내 단기 채용 완료 시, <br /> 장기 채용 할인 쿠폰을
            제공드립니다. <br /> 채용 시장의 드라마틱한 변화를 직접
            체험해보세요.
            <br /> * 서비스 기간: 2024년 01월 ~ 07월
          </p>
          <Button href="/register" color="white" className="mt-10">
            시작하기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </div>
      </Container>
    </section>
  )
}

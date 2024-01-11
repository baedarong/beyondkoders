import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: '요구한 기한에 맞춰 입금되지 않는 상황 발생하면 어떻게 하나요?',
      answer: '선결제 시스템 도입을 통해 해당 상황은 발생되지 않습니다.',
    },
    {
      question:
        '약시 요구한 내용보다 더 많은 일을 요구하는 상황이 발생하면 어떻게 하나요?',
      answer:
        '전용 채팅창을 통한 로깅으로 사용자 신고 시 관리자가 중재 및 해결에 참여합니다.',
    },
    {
      question:
        '사용자가 선호하는 기술 스택이나 프로젝트 종류에 맞지 않는 매칭이 발생할 경우 어떻게 대응하나요?',
      answer:
        '인재 매칭 알고리즘은 사용자가 등록한 포트폴리오와 선호하는 기술 스택을 기반으로 매칭을 진행합니다. 그러나 만약 매칭 결과가 사용자의 기대와 맞지 않을 경우, 재매칭 서비스를 제공하여 사용자가 원하는 프로젝트에 참여할 수 있도록 합니다.',
    },
  ],
  [
    {
      question:
        '사용자가 포트폴리오를 뻥튀기하여 원하는 만큼의 작업을 보장해주지 못했을 경우는 어떻게 합니까?',
      answer:
        '롯데의 매칭 알고리즘과 기업의 면접 및 선택을 통해 이루어지는 매칭 프로세스에서 발생하는 문제이기에 롯데 및 기업의 책임으로 간주합니다. 이 경우 보상 서비스를 수립하여 책임을 절반씩 나누어 문제를 해결합니다.',
    },
    {
      question: '사용자가 업무를 완수하지 않은 채그만둘 가능성이 무서워요.',
      answer:
        'WBS Tracking과 형상관리시스템(GIT)을 활용하여 매일매일 진척율 체크 및 특정 임계치 위반 시 계약위배로 재매칭합니다.',
    },
    {
      question:
        '서비스 이용 중 발생하는 기술적인 문제에 대한 지원은 어떻게 이루어지나요?',
      answer:
        '플랫폼 내 채팅 시스템을 통한 실시간 문의 기능과 함께, 기술 지원팀을 구성하여 사용자 및 기업의 기술적인 문제에 대한 도움을 제공하고, 필요한 경우 원격으로 문제를 해결할 수 있도록 지원합니다.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-6xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            자주 묻는 질문
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            계약이 체결된 이후에도 꾸준한 모니터링으로 다양한 측면에서의
            해결책들을 도입하고 있습니다.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

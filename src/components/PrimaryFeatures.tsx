'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import screenshot1 from '@/images/screenshots/screenshot1.png'
import screenshot2 from '@/images/screenshots/screenshot2.png'
import screenshot3 from '@/images/screenshots/screenshot3.png'
import screenshot4 from '@/images/screenshots/screenshot4.png'
import screenshot5 from '@/images/screenshots/screenshot5.png'

const features = [
  {
    title: '사용자의 프로필 등록',
    description:
      '사용자의 직종 등록 및 원하는 근무 유형(파트타임, 단기, 장기)을 선택합니다.    ',
    image: screenshot1,
  },
  {
    title: '기업의 채용 의뢰',
    description:
      '기업이 필요한 직위를 등록하고 요구 사항을 명확히 설명합니다. 예를 들면 "React.js 및 Next, Tailwind, TanStack Query를 사용할 수 있으며 AI 프로젝트 경험이 있는 베트남 또는 인도네시아 프론트엔드 개발자 2명" 같은 세부 요건을 명시합니다.',
    image: screenshot2,
  },
  {
    title: '관리자의 인재 매칭',
    description:
      'AI 기반 매칭 시스템을 활용하여 기업이 요구한 인재를 선별하고 기업에 추천합니다.',
    image: screenshot3,
  },
  {
    title: '사용자, 기업 간 계약 체결',
    description:
      '선별된 후보자 중 선택한 인재와 화상 미팅 또는 현지 관리자를 통해 채용 계약을 체결합니다.',
    image: screenshot4,
  },
  {
    title: '비용처리 및 운영',
    description:
      '기업은 채용 플랫폼에 지불을 수행하고, 플랫폼은 지급금액을 사용자에게 전달합니다.',
    image: screenshot5,
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>(
    'horizontal',
  )

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-purple-600 pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            지구 반대편에서 이뤄지는 AI 기반 완벽한 매칭 서비스
          </h2>
          <p className="mt-6 text-lg tracking-tight text-purple-100">
            AI 기반의 완벽한 인재 매칭 서비스와 순조로운 계약 이행을 위한 AI
            요약, 다국어 번역 채팅 시스템을 제공합니다. <br />
            PG 간편결제 서비스를 활용한 간단한 비용 체결로 사용자 편의성을
            제공하고 있습니다.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5',
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg ui-not-focus-visible:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-purple-600 lg:text-white'
                              : 'text-purple-100 hover:text-white lg:text-white',
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-purple-100 group-hover:text-white',
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-purple-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}

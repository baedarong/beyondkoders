import { Container } from '@/components/Container'
import { NavLink } from '@/components/NavLink'
import Link from 'next/link'
import Image from 'next/image'
import logoImage from '@/images/logos/logo.png'
export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="flex flex-col items-center py-16 ">
          <Link href="#" aria-label="Home">
            <Image
              className="flex"
              src={logoImage}
              alt=""
              width={300}
              height={150}
              unoptimized
            />
          </Link>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="#features">특징</NavLink>
              <NavLink href="#faq">자주 묻는 질문</NavLink>
              <NavLink href="#pricing">가격</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10">
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} BeyondKoders. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import cameronReeceLogo from '@/assets/images/cameronreecelogo.png'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <>
      <nav
        className={[
          'fixed inset-x-0 top-0 z-[1000] border-b transition-all duration-300',
          scrolled
            ? 'border-white/10 bg-black/85 backdrop-blur-xl'
            : 'border-transparent bg-[#0a0a0a]/95 backdrop-blur-md',
        ].join(' ')}
      >
        <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between px-5 md:px-8">
          <Link
            href="/"
            aria-label="Cameron Reece home"
            className="relative z-[1100] inline-flex items-center"
            onClick={closeMenu}
          >
            <Image
              src={cameronReeceLogo}
              alt="Cameron Reece logo"
              priority
              className="h-auto max-h-[42px] w-auto object-contain md:max-h-[64px]"
            />
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={[
                      'group relative rounded-sm px-4 py-2 text-[0.875rem] font-semibold uppercase tracking-[0.06em] transition-colors duration-200',
                      isActive
                        ? 'text-[#4791b2]'
                        : 'text-[#8a8a8a] hover:text-[#4791b2]',
                    ].join(' ')}
                  >
                    {link.label}
                    <span
                      className={[
                        'absolute bottom-1 left-4 right-4 h-[1.5px] origin-left bg-[#c8ff00] transition-transform duration-200',
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                      ].join(' ')}
                    />
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="hidden rounded-[3px] bg-[#4791b2] px-5 py-[0.55rem] text-[0.8rem] font-bold uppercase tracking-[0.08em] text-white transition duration-200 hover:-translate-y-[1px] hover:bg-[#c8ff00] hover:text-black md:inline-flex"
            >
              Let&apos;s Talk
            </Link>

            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen((prev) => !prev)}
              className="relative z-[1100] flex h-11 w-11 items-center justify-center md:hidden"
            >
              <span className="relative block h-6 w-7">
                <span
                  className={[
                    'absolute left-0 block h-[2px] rounded-full bg-[#4791b2] transition-all duration-300 ease-out',
                    open
                      ? 'top-[11px] w-[26px] rotate-45'
                      : 'top-[5px] w-[28px] rotate-0',
                  ].join(' ')}
                />
                <span
                  className={[
                    'absolute left-0 block h-[2px] rounded-full bg-[#4791b2] transition-all duration-300 ease-out',
                    open
                      ? 'top-[11px] w-[26px] -rotate-45'
                      : 'top-[17px] w-[20px] rotate-0',
                  ].join(' ')}
                />
              </span>
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        aria-hidden={!open}
        className={[
          'fixed inset-0 z-[999] flex flex-col bg-[#0a0a0a] px-8 pb-12 pt-[100px] transition-all duration-300 md:hidden',
          open
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-3 opacity-0',
        ].join(' ')}
      >
        <ul className="flex flex-1 flex-col">
          {navLinks.map((link, index) => (
            <li
              key={link.href}
              className={[
                'border-b border-white/10 transition-all duration-300',
                open ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0',
              ].join(' ')}
              style={{
                transitionDelay: open ? `${(index + 1) * 50}ms` : '0ms',
              }}
            >
              <Link
                href={link.href}
                onClick={closeMenu}
                className="group flex items-center justify-between py-[1.1rem] font-semibold tracking-[-0.03em] text-[#4791b2] transition-colors duration-200 hover:text-[#c8ff00]"
              >
                <span className="text-[2.25rem]">{link.label}</span>
                <span className="translate-x-[-6px] text-[1.25rem] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                  ↗
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div
          className={[
            'flex items-center justify-between transition-all duration-300',
            open ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-2 opacity-0',
          ].join(' ')}
        >
          <span className="text-[0.8rem] tracking-[0.04em] text-[#666]">
            © 2026 Cameron Reece
          </span>

          <Link
            href="/contact"
            onClick={closeMenu}
            className="rounded-[3px] bg-[#4791b2] px-6 py-[0.65rem] text-[0.8rem] font-bold uppercase tracking-[0.08em] text-black transition hover:bg-[#c8ff00]"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </>
  )
}
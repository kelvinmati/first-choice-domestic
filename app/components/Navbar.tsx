import React, { useEffect, useState } from 'react'
import logo from "../../public/logo-removebg.png"
import { useBookingModal } from '~/context/BookingModalContext'

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About Us', href: '/#about-us' },
  { label: 'Services', href: '/#services' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Why Us', href: '/#why-us' },
  // { label: 'Contact Us', href: '/#contact-us' },
]

const Navbar = () => {
  const { openModal } = useBookingModal()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  return (
    <header
      className='relative h-16 inset-x-0 top-0 z-20 bg-white text-black/90 backdrop-blur-sm'
 
    >
      <nav className='mx-auto flex h-full max-w-6xl items-center justify-between px-4 pl-32 sm:px-6 sm:pl-44 lg:px-8'>
        <a  href='/' className={`${isMobileMenuOpen ? 'absolute -bottom-20 left-4 z-30 translate-y-1/2 sm:left-6 hidden' : 'absolute -bottom-20 left-4 z-30 translate-y-1/2 sm:left-6'} `}>
          <img
            src={logo}
            alt='Logo'
            className='h-[300px] w-[400px] object-contain'
          />
        </a>

        <ul className='ml-auto hidden items-center gap-8 md:flex lg:pr-2'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className='text-sm font-semibold tracking-wide transition-colors hover:text-[#b09a2e]'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className='ml-10 hidden md:block'>
          <button
            onClick={openModal}
            className='px-6 py-2 bg-[#b09a2e] text-white font-semibold rounded-full hover:bg-[#a08a2e] transition-colors duration-200'
          >
            Book Now
          </button>
        </div>

        <button
          type='button'
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className='ml-auto inline-flex items-center justify-center rounded-full border border-black/10 p-2 text-black/80 transition-colors hover:bg-black/5 md:hidden'
          aria-label='Toggle navigation menu'
          aria-expanded={isMobileMenuOpen}
        >
          <svg viewBox='0 0 24 24' className='h-6 w-6 fill-none stroke-current stroke-2' aria-hidden='true'>
            {isMobileMenuOpen ? (
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 6l12 12M18 6 6 18' />
            ) : (
              <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
            )}
          </svg>
        </button>
      </nav>

      <div
        className={`relative z-20 md:hidden overflow-hidden border-t border-black/5 bg-white shadow-lg transition-all duration-300 ease-out ${
          isMobileMenuOpen ? 'max-h-96 translate-y-0 opacity-100' : 'max-h-0 -translate-y-2 opacity-0'
        }`}
      >
        <div className='mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 sm:px-6'>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className='rounded-xl px-4 py-3 text-sm font-semibold text-black/80 transition-colors hover:bg-black/5 hover:text-[#b09a2e]'
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={() => {
              setIsMobileMenuOpen(false)
              openModal()
            }}
            className='mt-2 rounded-full bg-[#b09a2e] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#a08a2e]'
          >
            Book Now
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <button
          type='button'
          aria-label='Close navigation menu'
          className='fixed inset-0 top-16 z-10 cursor-default bg-black/25 md:hidden'
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  )
}

export default Navbar

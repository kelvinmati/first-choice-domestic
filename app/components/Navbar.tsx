import React from 'react'
import logo from "../../public/logo-removebg.png"

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About Us', href: '/#about-us' },
  { label: 'Services', href: '/#services' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Why Us', href: '/#why-us' },
  { label: 'Contact Us', href: '/#contact-us' },
]

const Navbar = () => {
  return (
    <header
      className='relative h-16 inset-x-0 top-0 z-20 bg-white text-black/90 backdrop-blur-sm'
 
    >
      <nav className='mx-auto flex h-full max-w-6xl items-center justify-between px-4 pl-32 sm:px-6 sm:pl-44 lg:px-8'>
        <a href='/' className='absolute -bottom-20 left-4 z-30 translate-y-1/2 sm:left-6'>
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
      </nav>
    </header>
  )
}

export default Navbar

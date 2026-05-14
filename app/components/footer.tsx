import React from 'react'

const quickLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About Us', href: '/#about-us' },
  { label: 'Services', href: '/#services' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Why Us', href: '/#why-us' },
  { label: 'Contact Us', href: '/#contact-us' },
]

const Footer = () => {
  return (
    <footer id='contact-us' className='relative scroll-mt-24 overflow-hidden bg-[#0e3a5c] text-white'>
      <div className='pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#2f7bb4]/40 blur-3xl' />
      <div className='pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#b09a2e]/25 blur-3xl' />

      <div className='relative mx-auto grid w-[90%] max-w-6xl gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4'>
        <div className='lg:col-span-2'>
          <h3 className='text-2xl font-bold'>First Choice Domestic</h3>
          <p className='mt-3 max-w-md text-sm leading-7 text-white/80'>
            Reliable home and commercial cleaning services delivered by vetted,
            professional staff. Fresh spaces, flexible scheduling, and trusted
            support for every client.
          </p>
        </div>

        <div>
          <h4 className='text-sm font-semibold uppercase tracking-[0.14em] text-white/75'>Quick Links</h4>
          <ul className='mt-4 space-y-3'>
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className='text-sm text-white/90 transition-colors hover:text-[#f1d87a]'
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className='text-sm font-semibold uppercase tracking-[0.14em] text-white/75'>Contact</h4>
          <ul className='mt-4 space-y-3 text-sm text-white/90'>
            <li>
              <a href='tel:+447781103864' className='inline-flex items-start gap-2 transition-colors hover:text-[#f1d87a]'>
                <svg viewBox='0 0 24 24' className='mt-0.5 h-4 w-4 shrink-0 fill-current' aria-hidden='true'>
                  <path d='M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.2-.2.5-.3.8-.2 1 .3 2 .5 3 .5.4 0 .8.4.8.8V20c0 .4-.4.8-.8.8C10.2 20.8 3.2 13.8 3.2 5.2c0-.4.4-.8.8-.8H7.6c.4 0 .8.4.8.8 0 1 .2 2 .5 3 .1.3 0 .6-.2.8l-2.1 1.8z' />
                </svg>
                <span>+44 7781 103864</span>
              </a>
            </li>
            <li>
              <a
                href='mailto:firstchoicedomestic@suremail.gg'
                className='inline-flex items-start gap-2 break-all transition-colors hover:text-[#f1d87a]'
              >
                <svg viewBox='0 0 24 24' className='mt-0.5 h-4 w-4 shrink-0 fill-current' aria-hidden='true'>
                  <path d='M3.8 5.2h16.4c.9 0 1.6.7 1.6 1.6v10.4c0 .9-.7 1.6-1.6 1.6H3.8c-.9 0-1.6-.7-1.6-1.6V6.8c0-.9.7-1.6 1.6-1.6zm8.2 6.6 7.9-5H4.1l7.9 5zm0 1.7L4 8.6v8.6h16V8.6l-8 4.9z' />
                </svg>
                <span>firstchoicedomestic@suremail.gg</span>
              </a>
            </li>
            <li className='inline-flex items-start gap-2 text-white/90'>
              <svg viewBox='0 0 24 24' className='mt-0.5 h-4 w-4 shrink-0 fill-current' aria-hidden='true'>
                <path d='M12 2.8a7.2 7.2 0 0 0-7.2 7.2c0 4.8 6.1 10.8 6.4 11 .5.5 1.1.5 1.6 0 .3-.2 6.4-6.2 6.4-11A7.2 7.2 0 0 0 12 2.8zm0 9.8a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2z' />
              </svg>
              <span>Guernsey, Saint Peter Port, Guernsey</span>
            </li>
        
          </ul>
        </div>
      </div>

      <div className='relative border-t border-white/20 py-4'>
        <p className='mx-auto w-[90%] max-w-6xl text-center text-xs text-white/70 sm:text-sm'>
          © {new Date().getFullYear()} First Choice Domestic. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/FirstChoiceGSY',
    icon: (
      <svg viewBox='0 0 24 24' className='h-5 w-5 fill-current' aria-hidden='true'>
        <path d='M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z' />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg viewBox='0 0 24 24' className='h-5 w-5 fill-current' aria-hidden='true'>
        <path d='M12 2.2c3.2 0 3.6 0 4.9.1 3.3.2 4.8 1.7 5 5 .1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.2 3.3-1.7 4.8-5 5-1.3.1-1.6.1-4.9.1s-3.6 0-4.8-.1c-3.3-.2-4.8-1.7-5-5C2.2 15.6 2.2 15.3 2.2 12s0-3.6.1-4.8c.2-3.3 1.7-4.8 5-5C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.2 0-3.5 0-4.7.1-2.2.1-3.2 1.1-3.3 3.3C4 8.5 4 8.8 4 12s0 3.5.1 4.7c.1 2.2 1.1 3.2 3.3 3.3C8.5 20 8.8 20 12 20s3.5 0 4.7-.1c2.2-.1 3.2-1.1 3.3-3.3.1-1.2.1-1.5.1-4.7s0-3.5-.1-4.7c-.1-2.2-1.1-3.2-3.3-3.3C15.5 4 15.2 4 12 4zm0 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6zm0 1.8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm4.8-3.2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z' />
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com',
    icon: (
      <svg viewBox='0 0 24 24' className='h-5 w-5 fill-current' aria-hidden='true'>
        <path d='M18.3 4h-2.1l-3.9 4.7L8.6 4H4l5.8 8.1L4.2 20h2.1l4.3-5.2 3.8 5.2H19l-6-8.4L18.3 4zm-2.6 14.5-10-14h1.6l10 14h-1.6z' />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg viewBox='0 0 24 24' className='h-5 w-5 fill-current' aria-hidden='true'>
        <path d='M4.98 3.5a2 2 0 1 1-.04 4 2 2 0 0 1 .04-4zM3 8.98h4V21H3V8.98zm7 0h3.84v1.65h.05c.54-1 1.84-2.05 3.79-2.05C21 8.58 21.4 11 21.4 14.5V21h-4v-5.9c0-1.4 0-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1V21h-4V8.98z' />
      </svg>
    ),
  },
]

const quickLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About Us', href: '/#about-us' },
  { label: 'Services', href: '/#services' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Why Us', href: '/#why-us' },

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

          {/* Social Media Icons */}
          <div className='mt-6 flex items-center gap-3'>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={social.label}
                className='flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white/80 transition-all duration-200 hover:border-[#f1d87a] hover:bg-[#f1d87a] hover:text-[#0e3a5c]'
              >
                {social.icon}
              </a>
            ))}
          </div>
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
        <div className=' text-center '>
          <p className='text-xs text-white/70 sm:text-sm'>
            © {new Date().getFullYear()} First Choice Domestic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

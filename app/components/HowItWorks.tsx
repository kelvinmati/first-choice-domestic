import React from 'react'

const steps = [
  {
    title: 'Tell Us Your Needs',
    description:
      'Share your home size, preferred days, and any areas you want extra attention on.',
  },
  {
    title: 'Get Your Plan',
    description:
      'We recommend the right cleaner and provide a clear, tailored cleaning plan for your home.',
  },
  {
    title: 'Book Your Visit',
    description:
      'Choose a convenient slot, confirm details, and we lock in your first service date.',
  },
  {
    title: 'Relax While We Clean',
    description:
      'Your trusted cleaner arrives on time and delivers a thorough, reliable clean every visit.',
  },
]

const HowItWorks = () => {
  return (
    <section id='how-it-works' className='relative scroll-mt-24 overflow-hidden bg-slate-50 py-20'>
      <div
        className='pointer-events-none absolute -left-24 top-8 h-64 w-64 rounded-full opacity-20 blur-3xl'
        style={{ background: '#2f7bb4' }}
      />
      <div
        className='pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full opacity-20 blur-3xl'
        style={{ background: '#b09a2e' }}
      />

      <div className='relative mx-auto w-[90%] max-w-6xl'>
        <div className='mx-auto max-w-2xl text-center'>
          <p className='section-label'>
            How It Works
          </p>
          <h2 className='text-3xl font-bold text-slate-900 sm:text-4xl'>
            Four Simple Steps To A Cleaner Home
          </h2>
          <p className='mt-4 text-slate-600'>
            A clear process from first message to spotless results.
          </p>
        </div>

        <div className='relative mt-14'>
          <div className='absolute left-[22px] top-0 hidden h-full w-px bg-slate-200 md:block' />
          <div className='absolute left-0 right-0 top-7 hidden h-px bg-slate-200 lg:block' />

          <div className='grid gap-6 lg:grid-cols-4'>
            {steps.map((step, index) => (
              <article
                key={step.title}
                className='relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'
              >
                <div className='mb-5 flex items-center gap-4'>
                  <span
                    className='inline-flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white'
                    style={{ background: '#1a5a8a' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className='text-lg font-semibold text-slate-900'>{step.title}</h3>
                </div>

                <p className='text-sm leading-7 text-slate-600'>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

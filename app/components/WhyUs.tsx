import React from 'react'

const WhyUs = () => {
  return (
    <section id='why-us' className='scroll-mt-24 bg-white py-20'>
      <div className='mx-auto grid w-[90%] max-w-6xl items-center gap-10 lg:grid-cols-2'>
        <div className='relative'>
          <img
            src='/img8.jpeg'
            alt='Professional cleaner preparing a bright modern home'
            className=' w-full rounded-2xl object-cover shadow-xl'
          />
          <div className='absolute -bottom-6 left-6 rounded-xl bg-[#1a5a8a] px-6 py-4 text-white shadow-lg'>
            <p className='text-xs uppercase tracking-[0.18em] text-white/80'>Trusted Team</p>
            <p className='mt-1 text-lg font-semibold'>15+ Years Of Reliable Service</p>
          </div>
        </div>

        <div>
          <p className='section-label'>Why Choose Us</p>
          <h2 className='mt-3 text-3xl font-bold text-slate-900 sm:text-4xl'>
            We Clean With Care, Consistency, And Pride
          </h2>
          <p className='mt-5 text-slate-600'>
            First Choice Domestic is built around one simple promise: make your home feel fresh, safe, and stress-free every single visit. Our vetted cleaners follow clear checklists, show up on time, and treat your home like their own.
          </p>

          <div className='mt-8 grid gap-4 sm:grid-cols-2'>
            <article className='rounded-xl border border-slate-200 p-4'>
              <h3 className='text-base font-semibold text-slate-900'>Fully Insured Staff</h3>
              <p className='mt-2 text-sm text-slate-600'>
                Background-checked and insured professionals for total peace of mind.
              </p>
            </article>
            <article className='rounded-xl border border-slate-200 p-4'>
              <h3 className='text-base font-semibold text-slate-900'>Tailored Cleaning Plans</h3>
              <p className='mt-2 text-sm text-slate-600'>
                From weekly maintenance to deep cleans, we adapt to your priorities.
              </p>
            </article>
            <article className='rounded-xl border border-slate-200 p-4'>
              <h3 className='text-base font-semibold text-slate-900'>Reliable Scheduling</h3>
              <p className='mt-2 text-sm text-slate-600'>
                Easy booking, punctual arrivals, and updates you can count on.
              </p>
            </article>
            <article className='rounded-xl border border-slate-200 p-4'>
              <h3 className='text-base font-semibold text-slate-900'>Quality Guarantee</h3>
              <p className='mt-2 text-sm text-slate-600'>
                If anything is missed, we make it right quickly and professionally.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs

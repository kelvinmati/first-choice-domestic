import React from 'react'

const domesticServices = [
  'Regular home',
  'Weekly cleaning',
  'Fortnighty cleaning',
  'One off cleaning',
  'Spring clean',
  'After Builder clean',
  'After party clean',
  'Short nice clean',
  '24/7 clean',
  'More services',
]

const commercialServices = [
  'Commercial cleaning',
  'Office cleaning',
  'Early morning bar and restaurant cleaning',
  'Glass house, allotments and storage units available',
]

const Services = () => {
  return (
    <section id='services' className='relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-[#f7fbff] via-[#ffffff] to-[#edf5ff] py-20'>
      <div className='services-shape-float pointer-events-none absolute -left-28 top-8 h-72 w-72 rounded-full bg-[#2f7bb4]/30 blur-3xl' />
      <div className='services-shape-float services-shape-delay pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#b09a2e]/25 blur-3xl' />
      <div className='pointer-events-none absolute left-1/2 top-14 h-40 w-40 -translate-x-1/2 rotate-12 rounded-[2rem] border border-[#1a5a8a]/15 bg-white/25 backdrop-blur-sm' />

      <div className='relative mx-auto w-[90%] max-w-6xl'>
        <div className='mx-auto max-w-3xl text-center'>
          <p className='section-label'>Services</p>
          <h2 className='mt-3 text-3xl font-bold text-slate-900 sm:text-4xl'>
            Cleaning Services Built Around Your Schedule
          </h2>
          <p className='mt-4 text-slate-600'>
            From regular domestic visits to specialist commercial support, we deliver reliable cleaning that keeps homes and workplaces fresh.
          </p>
        </div>

        <div className='mt-12 grid gap-6 lg:grid-cols-2'>
          <article className='services-card-hover rounded-2xl border border-[#2f7bb4]/15 bg-gradient-to-br from-white via-white to-[#f2f8ff] p-6 shadow-md backdrop-blur'>
            <div className='mb-5 flex items-center justify-between'>
              <h3 className='text-xl font-semibold text-slate-900'>Domestic Services</h3>
              <span className='rounded-full bg-[#2f7bb4]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#1a5a8a]'>
                Home
              </span>
            </div>

            <ul className='grid gap-3 sm:grid-cols-2'>
              {domesticServices.map((service, index) => (
                <li
                  key={service}
                  className='services-item-rise rounded-lg border border-[#2f7bb4]/10 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-transform duration-300 hover:-translate-y-0.5 hover:border-[#2f7bb4]/40 hover:shadow-sm'
                  style={{ animationDelay: `${0.08 + index * 0.05}s` }}
                >
                  {service}
                </li>
              ))}
            </ul>
          </article>

          <article className='services-card-hover services-card-delay rounded-2xl border border-[#b09a2e]/20 bg-gradient-to-br from-white via-white to-[#fff9e8] p-6 shadow-md backdrop-blur'>
            <div className='mb-5 flex items-center justify-between'>
              <h3 className='text-xl font-semibold text-slate-900'>Commercial Services</h3>
              <span className='rounded-full bg-[#b09a2e]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#8a6d1a]'>
                Business
              </span>
            </div>

            <ul className='grid gap-3'>
              {commercialServices.map((service, index) => (
                <li
                  key={service}
                  className='services-item-rise rounded-lg border border-[#b09a2e]/20 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-transform duration-300 hover:-translate-y-0.5 hover:border-[#b09a2e]/45 hover:shadow-sm'
                  style={{ animationDelay: `${0.22 + index * 0.07}s` }}
                >
                  {service}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Services

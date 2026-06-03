import React from 'react'
import { useBookingModal } from '~/context/BookingModalContext'

const Rates = () => {
  const { openModal } = useBookingModal()

  return (
    <section className='mx-auto w-[90%] max-w-7xl py-8 md:py-10'>
      <div className='flex min-h-[130px] flex-col items-start justify-between gap-4 rounded-2xl border border-[#2f7bb4]/15 bg-yellow-500 text-white px-5 py-5 sm:flex-row sm:items-center sm:px-8'>
        <div>
          <p className='text-xs font-semibold uppercase tracking-[0.12em] '>Hourly Cleaning Rates</p>
          <h3 className='mt-1 text-2xl font-bold '>22.50 Euros Per Cleaner Per Hour</h3>
          <p className='mt-1 max-w-xl text-sm '>
            Professional domestic cleaning tailored to your schedule, with reliable and friendly cleaners you can trust.
          </p>
        </div>
        <button
          type='button'
          onClick={openModal}
          className='rounded-full  border border-white px-6 py-3 text-sm font-semibold uppercase cursor-pointer tracking-[0.08em] bg-white text-black transition hover:scale-[1.02] '
        >
          Get Started
        </button>
      </div>
    </section>
  )
}

export default Rates

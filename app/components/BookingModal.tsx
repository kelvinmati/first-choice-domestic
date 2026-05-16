import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

type BookingModalProps = {
  isOpen: boolean
  onClose: () => void
}

type BookingFormState = {
  fullName: string
  email: string
  phone: string
  postcode: string
  propertyType: string
  bedrooms: string
  bathrooms: string
  cleaningType: string
  frequency: string
  preferredDate: string
  preferredTime: string
  notes: string
}

// const initialFormState: BookingFormState = {
//   fullName: '',
//   email: '',
//   phone: '',
//   postcode: '',
//   propertyType: '',
//   bedrooms: '',
//   bathrooms: '',
//   cleaningType: '',
//   frequency: '',
//   preferredDate: '',
//   preferredTime: '',
//   notes: '',
// }

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
//   const [formState, setFormState] = useState<BookingFormState>(initialFormState)
  const [submitted, setSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)
    const form = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

//   const handleChange = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = event.target
//     setFormState((prev) => ({ ...prev, [name]: value }))
//   }




  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSending) return

    if (!form.current) {
      console.error('Booking form reference is missing.');
      return;
    }

    console.log('Sending booking request with form data:', new FormData(form.current));
    setIsSending(true)

    emailjs
      .sendForm('service_fp2uqzn', 'template_4trnwpk', form.current, {
        publicKey: 'user_GQR0KqhGk7eUTDPiSP1Of',
      })
      .then(
        () => {
          setSubmitted(true)
          form.current?.reset()
          console.log('Booking request sent successfully.');
        },
        (error) => {
          console.log('FAILED...', error);
        },
      )
      .finally(() => {
        setIsSending(false)
      })
  };

  const handleClose = () => {
    if (isSending) return
    setSubmitted(false)
    // setFormState(initialFormState)
    onClose()
  }

  return (
    <div
      className='fixed inset-0 z-[100] flex items-center justify-center bg-black/55 px-4 py-8'
      role='dialog'
      aria-modal='true'
      aria-labelledby='booking-modal-title'
      onClick={handleClose}
    >
      <div
        className='w-full max-w-3xl rounded-2xl bg-white shadow-2xl'
        onClick={(event) => event.stopPropagation()}
      >
        <div className='flex items-start justify-between border-b border-slate-200 px-6 py-5'>
          <div>
            <h2 id='booking-modal-title' className='text-2xl font-bold text-[#0e3a5c]'>
              Book Home Cleaning
            </h2>
            <p className='mt-1 text-sm text-slate-600'>
              Fill in your details and we will confirm your booking shortly.
            </p>
          </div>
          <button
            type='button'
            onClick={handleClose}
            disabled={isSending}
            className='rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800'
            aria-label='Close booking form'
          >
            <svg viewBox='0 0 24 24' className='h-5 w-5 fill-current' aria-hidden='true'>
              <path d='M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7l1.4-1.4 6.3 6.3 6.3-6.3z' />
            </svg>
          </button>
        </div>

        {submitted ? (
          <div className='px-6 py-10 text-center'>
            <h3 className='text-xl font-semibold text-[#0e3a5c]'>Booking request received</h3>
            <p className='mx-auto mt-2 max-w-lg text-slate-600'>
              Thank you. Our team will contact you shortly to confirm your cleaner,
              schedule, and final quote.
            </p>
            <button
              type='button'
              onClick={handleClose}
              className='mt-6 rounded-full bg-[#b09a2e] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#9a8728]'
            >
              Close
            </button>
          </div>
        ) : (
          <form ref={form} onSubmit={sendEmail} className='max-h-[75vh] overflow-y-auto px-6 py-6'>
            <div className='grid gap-4 sm:grid-cols-2'>
              <label className='text-sm font-medium text-slate-700'>
               Username <span className='text-red-500'>*</span>
                <input
                  name='name'   
                     required
                  className='mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-[#2f7bb4] focus:outline-none'
                  placeholder='John Smith'
                />
              </label>

              <label className='text-sm font-medium text-slate-700'>
                Email <span className='text-red-500'>*</span>
                <input
                  required
                  type='email'
                  name='email'
                  className='mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-[#2f7bb4] focus:outline-none'
                  placeholder='you@example.com'
                />
              </label>

              <label className='text-sm font-medium text-slate-700'>
                Phone Number (optional)
                <input
                  type='tel'
                  name='phone'
                  className='mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-[#2f7bb4] focus:outline-none'
                  placeholder='07781 103864'
                />
              </label>

              <label className='text-sm font-medium text-slate-700'>
            address  <span className='text-red-500'>*</span>
                <input
                  required
                  name='address'
          
         
                  className='mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm uppercase focus:border-[#2f7bb4] focus:outline-none'
                  placeholder='GY1 1AA'
                />
              </label>

              <label className='text-sm font-medium text-slate-700'>
                Property Type <span className='text-red-500'>*</span>
                <select
                  required
                  name='property_type'

                  className='mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-[#2f7bb4] focus:outline-none'
                >
                  <option value=''>Select type</option>
                  <option value='flat'>Flat / Apartment</option>
                  <option value='house'>House</option>
                  <option value='office'>Office</option>
                </select>
              </label>

              <label className='text-sm font-medium text-slate-700'>
                Cleaning Type <span className='text-red-500'>*</span>
                <select
                  required
                  name='cleaning_type'
                  className='mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-[#2f7bb4] focus:outline-none'
                >
                  <option value=''>Select service</option>
                  <option value='regular'>Regular Cleaning</option>
                  <option value='deep'>Deep Cleaning</option>
                  <option value='end-of-tenancy'>End of Tenancy</option>
                  <option value='one-off'>One-off Cleaning</option>
                </select>
              </label>


              {/* <label className='text-sm font-medium text-slate-700'>
                Frequency <span className='text-red-500'>*</span>
                <select
                  required
                  name='frequency'

                  className='mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-[#2f7bb4] focus:outline-none'
                >
                  <option value=''>Select frequency</option>
                  <option value='weekly'>Weekly</option>
                  <option value='fortnightly'>Fortnightly</option>
                  <option value='monthly'>Monthly</option>
                  <option value='one-off'>One-off</option>
                </select>
              </label> */}

              <label className='text-sm font-medium text-slate-700'>
                Preferred Date <span className='text-red-500'>*</span>
                <input
                  required
                  type='date'
                  name='date'

         
                  className='mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-[#2f7bb4] focus:outline-none'
                />
              </label>

              <label className='text-sm font-medium text-slate-700'>
                Preferred Time (optional)
                <input
                  type='time'
                  name='time'
                  className='mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-[#2f7bb4] focus:outline-none'
                />
              </label>
            </div>

            <label className='mt-4 block text-sm font-medium text-slate-700'>
              Special Instructions
              <textarea
                name='instructions'
                rows={4}
                className='mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-[#2f7bb4] focus:outline-none'
                placeholder='Access notes, pets, parking info, priorities, etc.'
              />
            </label>

            <div className='mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end'>
              <button
                type='button'
                onClick={handleClose}
                disabled={isSending}
                className='rounded-full border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100'
              >
                Cancel
              </button>
              <button
                type='submit'
                disabled={isSending}
                className='rounded-full bg-[#b09a2e] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#9a8728] disabled:cursor-not-allowed disabled:opacity-70'
              >
                {isSending ? 'Submitting...' : 'Submit Booking Request'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default BookingModal

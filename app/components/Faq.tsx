import React from 'react'

const faqs = [
  {
    question: 'Do I need to provide cleaning supplies?',
    answer:
      'No. Our team arrives with professional-grade supplies and equipment. If you prefer specific products for allergy or scent reasons, we are happy to use what you provide.',
  },
  {
    question: 'Are your cleaners background checked?',
    answer:
      'Yes. Every cleaner is vetted, background checked, and trained before joining our team, so you can feel confident about who is in your home.',
  },
  {
    question: 'How long does cleaning take?',
    answer:
      'Most standard visits take between 2 and 4 hours depending on property size, room condition, and the level of service selected.',
  },
  {
    question: 'Can I reschedule?',
    answer:
      'Absolutely. You can reschedule by contacting us in advance, and we will do our best to offer the next available slot that suits your schedule.',
  },
  {
    question: 'Do you offer same-day cleaning?',
    answer:
      'Yes, same-day appointments are available when slots open up. Contact us early and we will confirm availability right away.',
  },
]

const Faq = () => {
  return (
    <section className='bg-slate-50 py-20'>
      <div className='mx-auto w-[90%] max-w-4xl'>
        <div className='text-center'>
          <p className='text-sm font-semibold uppercase tracking-[0.2em] text-[#1a5a8a]'>FAQ</p>
          <h2 className='mt-3 text-3xl font-bold text-slate-900 sm:text-4xl'>
            Frequently Asked Questions
          </h2>
          <p className='mt-4 text-slate-600'>
            Quick answers to the most common questions about our cleaning services.
          </p>
        </div>

        <div className='mt-10 space-y-4'>
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className='group rounded-xl border border-slate-200 bg-white p-5 shadow-sm open:border-[#1a5a8a]/30'
            >
              <summary className='flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-slate-900'>
                <span>{faq.question}</span>
                <span className='text-xl leading-none text-[#1a5a8a] transition-transform group-open:rotate-45'>+</span>
              </summary>
              <p className='pt-4 text-sm leading-7 text-slate-600'>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq

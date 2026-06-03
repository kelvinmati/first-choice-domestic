import React from 'react'
import burnerImg from "../../public/burner.jpg"
import cleaningImg from "../../public/img9.jpeg"
import cleaningImg2 from "../../public/img6.jpeg"



const Burner = () => {
  return (
    <div>
      <div className='mx-auto grid w-[90%] max-w-6xl grid-cols-1 gap-5 py-12 md:grid-cols-2 md:items-stretch'>
        <div className='grid grid-cols-1 gap-5 md:grid-rows-2'>
          <img
            src={burnerImg}
            alt='Burner'
            className='h-56 w-full rounded-lg object-cover shadow-lg md:h-full'
          />
          <img
            src={cleaningImg2}
            alt='Cleaning2'
            className='h-56 w-full rounded-lg object-cover shadow-lg md:h-full'
          />
        </div>
        <div className='md:h-full'>
          <img
            src={cleaningImg}
            alt='Cleaning'
            className='h-56 w-full rounded-lg object-cover shadow-lg md:h-full'
          />
        </div>
      </div>
    </div>
  )
}

export default Burner

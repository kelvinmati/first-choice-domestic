import React from 'react'
import burnerImg from "../../public/burner.jpg"
const Burner = () => {
  return (
    <div>
      <img src={burnerImg} alt="Burner" className="w-full h-40 md:h-[500px] rounded-lg shadow-lg" />
    </div>
  )
}

export default Burner

import React from 'react'
import "./Doctors.scss"
import DoctorCard from '../Cards/DoctorCard'

function Doctors() {
  return (
    <>
    <div className="doctors">
        <div className="doctors__container">
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        </div>
    </div>
      
    </>
  )
}

export default Doctors
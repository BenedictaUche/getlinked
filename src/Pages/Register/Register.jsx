import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import RegisterForm from '../../Components/Register-form/RegisterForm'

export default function Register() {
  return (
    <>
        <Navbar />
        <div className='flex justify-between'>
            <div>
                <img src="./images/3d-graphic-designer.png" alt="man wearing smart glasses" />
            </div>
            <div>
                <RegisterForm />
            </div>
        </div>
    </>
  )
}

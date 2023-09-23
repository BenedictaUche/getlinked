import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import RegisterForm from '../../Components/Register-form/RegisterForm'
import './Register.css'

export default function Register() {
  return (
    <>
        <Navbar />
        <div className='register-conts flex flex-col md:flex-row justify-between mr-0 md:mr-20'>
            <div className='register-images'>
                <img src="./images/3d-graphic-designer.png" alt="man wearing smart glasses" style={{width: '717px', height: '717px'}} />
            </div>
            <div className='my-14 mb-20 register_forms'>
                <RegisterForm />
            </div>
        </div>
    </>
  )
}

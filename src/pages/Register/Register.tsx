import React, { useState } from 'react'
import isValidEmail from '../../utils/validateEmail'
import isValidPassword from '../../utils/validatePassword'
import toast from 'react-hot-toast'
import Swal from 'sweetalert2'

const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [terms, setTerms] = useState(false)

  const emailInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const passwordInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const termsHandler = () => {
    setTerms(!terms)
  }

  const termsModal = () => {
    Swal.fire({
      title: 'Terms and Conditions',
      text: 'This website is a personal project, not a real store. When making a payment you will not receive any real product. Only make a purchase in case what you want to make is a donation, to the creator of the project.',
      icon: 'info',
      iconColor: '#000',
      color: '#000',
      confirmButtonColor: "#000",
    })
  }

  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log(email, password, terms);
    const validEmail = isValidEmail(email)
    const validPassword = isValidPassword(password)
    if (!validEmail || !validPassword || !terms) {
      !validEmail && toast.error('Invalid email')
      !validPassword && toast.error('Invalid password')
      !terms && toast.error('Accept terms and conditions')
    }
    else {
      toast.success('Registration successful')
    }
  }


  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-white w-full md:m-auto md:max-w-md lg:max-w-full md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
flex items-center justify-center">
        <div className="w-full h-[calc(100vh-124px)] max-w-sm">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Register your account</h1>
          <form className="mt-6" action="#" method="POST">
            <div>
              <label className="block text-zinc-600">Email Address</label>
              <input onChange={(e) => emailInputHandler(e)} type="email" placeholder="Enter Email Address" className="w-full px-4 py-3 bg-zinc-100 border-0  mt-2 focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete='true' required />
            </div>
            <div className="mt-4">
              <label className="block text-zinc-600">Password</label>
              <input onChange={(e) => passwordInputHandler(e)} type="password" placeholder="Enter Password" minLength={6} className="w-full px-4 py-3 bg-zinc-100 border-0  mt-2 focus:border-blue-500
      focus:bg-white focus:outline-none" required />
            </div>
            <div className='form-check my-4'>
              <input onClick={termsHandler} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label inline-block text-sm font-semibold text-zinc-600" htmlFor="flexCheckDefault">
                I agree&nbsp;
              </label>
              <strong onClick={termsModal} className='cursor-pointer text-blue-500 hover:text-blue-700 font-semibold text-sm'>Terms and Conditions</strong>
            </div>
            <button type="submit" onClick={(e) => submitHandler(e)} className="w-full block bg-black hover:bg-zinc-800 focus:bg-zinc-800 text-white font-semibold
      px-4 py-3 mt-6 transition-colors">Register</button>
          </form>
          <hr className="my-6 border-gray-300 w-full" />
          <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold px-4 py-3 border border-gray-300">
            <div className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" /></defs><clipPath id="b"><use xlinkHref="#a" overflow="visible" /></clipPath><path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" /><path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" /><path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" /><path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" /></svg>
              <span className="ml-4">
                Continue
                with
                Google</span>
            </div>
          </button>
          <p className="mt-4 text-sm font-semibold text-zinc-600">Already have an account? <a href="/login" className="text-blue-500 hover:text-blue-700 font-semibold">Log in</a></p>
        </div>
      </div>
    </section>
  )
}

export default Register
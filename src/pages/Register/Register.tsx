import React, { useState, useContext, useEffect } from 'react'
import isValidEmail from '../../utils/validateEmail'
import isValidPassword from '../../utils/validatePassword'
import toast from 'react-hot-toast'
import Swal from 'sweetalert2'
import { Link, Navigate } from 'react-router-dom'
import { Input } from '@material-tailwind/react'
import { BiShow, BiHide } from 'react-icons/bi'
import { AuthContext } from '../../context/AuthContext'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [terms, setTerms] = useState(false)

  const emailInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmail(e.target.value)
  }

  useEffect(() => {
    if (isLoggedIn) {
      toast.error('You are already logged in')
    }
  }, [])

  const passwordInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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
      confirmButtonColor: '#000'
    })
  }

  const { handleLogin, isLoggedIn } = useContext(AuthContext)

  const submitHandler = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault()
    const validEmail = isValidEmail(email)
    const validPassword = isValidPassword(password)
    if (!validEmail || !validPassword || !terms) {
      !validEmail && toast.error('Invalid email')
      !validPassword && toast.error('Invalid password')
      !terms && toast.error('Accept terms and conditions')
    } else {
      const res = await fetch('http://localhost:3000/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      })
      const data = await res.json()
      if (res.ok) {
        handleLogin(data.token)
        toast.success('Account created successfully')
      } else {
        toast.error('Error creating account')
      }
    }
  }

  const [viewPassword, setViewPassword] = useState(false)

  return (
    <section className='flex flex-col md:flex-row h-screen items-center'>
      {isLoggedIn && <Navigate to='/' replace={true} />}
      <div
        className='bg-white w-full md:m-auto md:max-w-md lg:max-w-full md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
flex items-center justify-center'>
        <div className='w-full h-[calc(100vh-124px)] max-w-sm'>
          <h1 className='text-xl md:text-3xl font-bold leading-tight mt-12 text-center'>
            Register your account
          </h1>
          <form className='mt-6' action='#' method='POST'>
            <div>
              <Input
                variant='standard'
                label='Email'
                type={'email'}
                onChange={(e) => emailInputHandler(e)}
                className='border-r-0 border-t-0 border-l-0 outline-none focus:ring-0'
                autoFocus
                autoComplete='true'
                required
              />
            </div>
            <div className='mt-4 relative w-full h-full'>
              <Input
                variant='standard'
                label='Password'
                type={viewPassword ? 'text' : 'password'}
                className='border-r-0 border-t-0 border-l-0 outline-none focus:ring-0 pr-10'
                onChange={(e) => passwordInputHandler(e)}
                minLength={6}
                required
              />
              {viewPassword ? (
                <BiHide
                  onClick={() => setViewPassword(!viewPassword)}
                  className='absolute right-0 top-0 mt-4 mr-4 cursor-pointer'
                />
              ) : (
                <BiShow
                  onClick={() => setViewPassword(!viewPassword)}
                  className='absolute right-0 top-0 mt-4 mr-4 cursor-pointer'
                />
              )}
            </div>
            <div className='form-check my-4'>
              <input
                onClick={termsHandler}
                className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                type='checkbox'
                value=''
                id='flexCheckDefault'
              />
              <label
                className='form-check-label inline-block text-sm font-semibold text-zinc-600'
                htmlFor='flexCheckDefault'>
                I agree&nbsp;
              </label>
              <strong
                onClick={termsModal}
                className='cursor-pointer text-blue-500 hover:text-blue-700 font-semibold text-sm'>
                Terms and Conditions
              </strong>
            </div>
            <button
              type='submit'
              onClick={(e) => submitHandler(e)}
              className='w-full block bg-black hover:bg-zinc-800 focus:bg-zinc-800 text-white font-semibold
      px-4 py-3 mt-6 transition-colors'>
              Register
            </button>
          </form>
          <hr className='my-6 border-gray-300 w-full' />
          <p className='mt-4 text-sm font-semibold text-zinc-600 text-center'>
            Already have an account?{' '}
            <Link
              to='/login'
              className='text-blue-500 hover:text-blue-700 font-semibold'>
              Log in
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Register

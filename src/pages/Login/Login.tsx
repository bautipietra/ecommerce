import React, { useContext, useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { Link, Navigate, redirect } from 'react-router-dom'
import { GrCircleAlert } from 'react-icons/gr'
import { Input } from '@material-tailwind/react'
import { BiShow, BiHide } from 'react-icons/bi'
import { AuthContext } from '../../context/AuthContext'

const Login = () => {
  const { handleLogin, isLoggedIn } = useContext(AuthContext)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    if (isLoggedIn) {
      toast.error('You are already logged in')
    }
  }, [])

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const submitHandler = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault()
    const { email, password } = formData
    const res = await fetch(
      'https://ecommerce-backend-production-2600.up.railway.app/user/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      }
    )
    const data = await res.json()
    if (res.ok) {
      console.log('acepte login')
      toast.success('Logged in successfully')
      handleLogin(data.token)
    } else {
      toast.error('Error logging in')
    }
  }

  const [viewPassword, setViewPassword] = useState(false)

  return (
    <section className='flex flex-col md:flex-row h-screen items-center'>
      {isLoggedIn && <Navigate to='/' replace={true} />}
      <div
        className='bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
flex items-center justify-center'>
        <div className='w-full h-[calc(100vh-124px)] max-w-sm'>
          <h1 className='text-xl md:text-3xl font-bold leading-tight mt-12 text-center'>
            Log in to your account
          </h1>
          <form className='mt-6' action='#' method='POST'>
            <div>
              <Input
                variant='standard'
                label='Email'
                type='email'
                className='border-r-0 border-t-0 border-l-0 outline-none focus:ring-0'
                autoFocus
                autoComplete='true'
                required
                name='email'
                value={formData.email}
                onChange={(e) => inputHandler(e)}
              />
            </div>
            <div className='mt-4 relative h-full w-full'>
              <Input
                variant='standard'
                label='Password'
                type={viewPassword ? 'text' : 'password'}
                minLength={6}
                className='border-r-0 border-t-0 border-l-0 outline-none focus:ring-0 pr-10'
                required
                name='password'
                value={formData.password}
                onChange={(e) => inputHandler(e)}
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
            <div className='mt-4'>
              <Link
                to='#'
                className='text-sm font-semibold text-black hover:text-black focus:text-black transition-colors flex items-center gap-1'>
                <GrCircleAlert></GrCircleAlert>Forgot Password?
              </Link>
            </div>
            <button
              type='submit'
              onClick={(e) => submitHandler(e)}
              className='w-full block bg-black hover:bg-zinc-800 focus:bg-zinc-800 text-white font-semibold
    px-4 py-3 mt-6 transition-colors'>
              Log In
            </button>
          </form>
          <hr className='my-6 border-gray-300 w-full' />
          <p className='mt-4 text-sm font-semibold text-zinc-600 text-center'>
            Need an account?{' '}
            <Link
              to='/register'
              className='text-blue-500 hover:text-blue-700 font-semibold'>
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Login

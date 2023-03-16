import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import isValidEmail from '../utils/validateEmail';

const Footer = () => {

    const [email, setEmail] = useState('')

    const emailInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const suscribeHandler = async () => {
        const isValid = await isValidEmail(email)
        setEmail('')
        if (!isValid) return toast.error('you have entered an invalid email')
    }

    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    <div className="sm:col-span-2">
                        <h1 className="max-w-lg text-3xl font-semibold tracking-tight text-gray-800 xl:text-4xl dark:text-white">Subscribe to our newsletter to get update.</h1>

                        <div className="flex flex-col mx-auto mt-8 space-y-3 md:space-y-0 md:flex-row">
                            <input id="email" type="text" value={email} onChange={(e) => emailInputHandler(e)} className="px-4 py-2 bg-gray-100 text-gray-700 bg-white border-0 font-normal focus:border-gray-900 dark:focus:border-gray-900 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-gray-900" placeholder="Email Address" />
                            <button onClick={suscribeHandler} className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-black hover:bg-gray-900 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Quick Link</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <Link to="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-gray-900 hover:underline hover:text-gray-900">Home</Link>
                            <Link to="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-gray-900 hover:underline hover:text-gray-900">Who We Are</Link>
                            <Link to="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-gray-900 hover:underline hover:text-gray-900">Our Philosophy</Link>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Industries</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <Link to="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-gray-900 hover:underline hover:text-gray-900">Retail & E-Commerce</Link>
                            <Link to="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-gray-900 hover:underline hover:text-gray-900">Information Technology</Link>
                            <Link to="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-gray-900 hover:underline hover:text-gray-900">Finance & Insurance</Link>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

                <div className="flex items-center justify-between">
                    <Link to="#" className="text-2xl font-bold text-gray-800 transition-colors duration-300 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Sneakers</Link>

                    <span className='text-gray-600'>Made with 🖤 by <a href="https://www.linkedin.com/in/bautista-pietraroia/" target={'_blank'} className='font-semibold text-black hover:underline'>Bautista Pietraroia</a></span>

                    <div className="flex -mx-2">
                        <Link to="https://github.com/bautipietra" target={'_blank'} className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-900" aria-label="Reddit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </Link>

                        <Link to="https://www.linkedin.com/in/bautista-pietraroia/" target={'_blank'} className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-900" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="flex items-center h-full p-16 min-h-[calc(100vh-100px)]">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
          <p className="mt-4 mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
          <Link to="/" className="justify-self-center lg:justify-self-start inline-flex items-center px-6 py-4 font-semibold text-white transition-all duration-200 bg-black hover:bg-zinc-900 focus:bg-zinc-900">
            Back to homepage
            <svg className="w-6 h-6 ml-8 -mr-2 bi bi-arrow-left-circle" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Error
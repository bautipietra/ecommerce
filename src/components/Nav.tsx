import { Link } from 'react-router-dom'
import React, { useState, useEffect, useContext } from 'react'
import Logo from '../../public/sneakers.png'
import User from './User'
import MobileNav from './MobileNav'
import Cart from './Cart'
import { ProductsContext } from '../context/ProductsContext'

const Nav = () => {
  const [cart, setCart] = useState(false)
  const [menu, setMenu] = useState(false)
  useEffect(() => {
    if (!menu) document.body.style.overflow = 'unset'
    else document.body.style.overflow = 'hidden'
  }, [menu])

  const { productsId, setProductsId } = useContext(ProductsContext)

  return (
    <div>
      <div className='bg-black text-white flex items-center justify-center'>
        <p className='uppercase text-xs tracking-widest text-center px-4 py-3'>
          Up to 50% OFF with the <strong>SUMMER2023</strong> coupon
        </p>
      </div>
      <nav className='flex justify-between bg-white text-black w-screen'>
        <div className='px-5 xl:px-12 py-6 flex w-full items-center'>
          <Link className='text-3xl font-bold font-heading' to='/'>
            Sneakers
          </Link>
          {/* Nav Links */}
          <ul className='hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12'>
            <li>
              <Link className='hover:text-zinc-900' to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='hover:text-zinc-900' to='/sneakers'>
                Sneakers
              </Link>
            </li>
            <li>
              <Link className='hover:text-zinc-900' to='/faq'>
                FAQ
              </Link>
            </li>
          </ul>
          {/* Header Icons */}
          <div className='hidden md:flex space-x-5 items-center'>
            <div
              className='flex items-center hover:text-zinc-900 cursor-pointer'
              onClick={() => setCart(true)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
              {productsId?.length ? (
                <span className='flex absolute -mt-5 ml-4'>
                  <span className='animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75' />
                  <span className='relative inline-flex rounded-full h-3 w-3 bg-pink-500'></span>
                </span>
              ) : null}
            </div>
            {/* Sign In / Register      */}
            <User></User>
          </div>
        </div>
        {/* Responsive navbar */}
        <div className='flex gap-4 items-center'>
          <div
            className='md:hidden flex items-center cursor-pointer'
            onClick={() => setCart(true)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 hover:text-zinc-900'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
              />
            </svg>
            {productsId?.length ? (
              <span className='flex absolute -mt-5 ml-4'>
                <span className='animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75' />
                <span className='relative inline-flex rounded-full h-3 w-3 bg-pink-500'></span>
              </span>
            ) : null}
          </div>
          <div className='md:hidden'>
            <User></User>
          </div>
          <button
            onClick={() => setMenu(!menu)}
            className='navbar-burger self-center mr-12 md:hidden z-20'>
            {menu ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='#000'
                className='bi bi-x-lg h-6 w-6'
                viewBox='0 0 16 16'>
                <path d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z' />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='#000'
                className='bi bi-list h-6 w-6'
                viewBox='0 0 16 16'>
                <path
                  fillRule='evenodd'
                  d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
                />
              </svg>
            )}
          </button>
          {menu && <MobileNav setMenu={setMenu}></MobileNav>}
        </div>
      </nav>
      {/* Cart */}
      <Cart
        cart={cart}
        setCart={setCart}
        productsId={productsId}
        setProductsId={setProductsId}></Cart>
    </div>
  )
}

export default Nav

import { Input, Radio } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import Range from 'rc-slider';
import 'rc-slider/assets/index.css';
import products from './products.json'
import { Link } from 'react-router-dom';
import FiveStars from './FiveStars';
import FourStars from './FourStars';

const Sneakers = () => {

  const [productsFiltered, setProductsFiltered] = useState([])

  const [order, setOrder] = useState(0)
  const [gender, setGender] = useState('both')
  const [search, setSearch] = useState('')

  const [price, setPrice] = useState([50, 400])
  const priceHandler = (e: Array<number>) => {
    setPrice(e)
  }

  const resetHandler = () => {
    setGender('both')
    setPrice([50, 400])
    setOrder(0)
    setSearch('')
  }

  useEffect(() => {
    setProductsFiltered([])
    let aux = products.filter(p => p.retailPrice >= price[0] && p.retailPrice <= price[1])
    if (search != '') {
      aux = aux.filter(p => p.shoe.toLowerCase().includes(search.toLowerCase()))
    }
    if (gender != 'both') {
      aux = aux.filter(p => p.gender == gender)
    }
    if (order != 0) {
      if (order == 1) {
        aux = aux.sort((a, b) => a.retailPrice - b.retailPrice)
      } else if (order == 2) {
        aux = aux.sort((a, b) => b.retailPrice - a.retailPrice)
      } else if (order == 3) {
        aux = aux.sort((a, b) => b.rating - a.rating)
      }
    }
    setProductsFiltered(aux)
  }, [gender, price, order, search])

  return (
    <div className='w-full max-w-7xl m-auto px-4 my-12 grid lg:grid-cols-12 min-h-[calc(100vh-100px)] divide-x gap-8'>

      <div className='lg:col-span-4 xl:col-span-3 w-full flex flex-col gap-8'>

        {/* Bread crumb */}
        <nav className="flex justify-center py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white" >
                <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                <Link to='' className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Sneakers</Link>
              </div>
            </li>
          </ol>
        </nav>

        {/* Filters */}

        {/* Search */}
        <Input value={search} variant="standard" label="Search" id='search' onChange={(e) => setSearch(e.target.value)} icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>}
        />

        {/* Order */}
        <div>
          <div className="w-full">
            <div>
              <label htmlFor="underline_select" className="sr-only">Underline select</label>
              <select id="underline_select" value={order} onChange={(e) => setOrder(Number(e.target.value))} className="block py-2.5 px-0 w-full text-sm text-blue-gray-500 bg-transparent border-0 border-b-[1px] border-blue-gray-200 appearance-none focus:outline-none focus:ring-0 peer">
                <option value="0" selected defaultChecked>Order by...</option>
                <option value="1">Price low to high</option>
                <option value="2">Price high to low</option>
                <option value="3">Customer rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className='grid gap-2'>
          <h2 className='text-lg text-center'>Price</h2>
          <div className='flex gap-4 items-center'>
            <span>${price[0]}</span>
            <Range onChange={(e) => priceHandler(e)} value={price} allowCross={false} defaultValue={[50, 400]} min={50} max={400} range={true} pushable={5} railStyle={{ background: '#aaa' }} trackStyle={{ background: '#000' }} handleStyle={{ background: '#000', border: 'none', outline: 'none' }} />
            <span>${price[1]}</span>
          </div>
        </div>

        {/* Gender */}
        <div className='grid gap-2'>
          <h2 className='text-lg text-center'>Gender</h2>
          <div className='flex gap-2 justify-between'>
            <Radio onClick={() => setGender('both')} id="both" name="type" className='text-gray-200 bg-gray-200' label="Both" color={'gray'} checked={gender == 'both' ? true : false} />
            <Radio onClick={() => setGender('men')} id="men" name="type" className='text-gray-200 bg-gray-200' label="Men" color={'gray'} checked={gender == 'men' ? true : false} />
            <Radio onClick={() => setGender('women')} id="women" name="type" className='text-gray-200 bg-gray-200' label="Women" color={'gray'} checked={gender == 'women' ? true : false} />
          </div>
        </div>

        {/* Reset */}
        <button onClick={resetHandler} className="flex items-center justify-center gap-2 w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform text-center focus:outline-none bg-black hover:bg-gray-900 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
          Remove filters</button>
      </div>

      {/* Products */}
      <div className='h-full lg:col-span-8 xl:col-span-9 w-full lg:pl-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
        {productsFiltered?.map((p) => (
          <div key={p.id} className="group relative cursor-pointer p-2 border-solid border-[1px] border-black/5 rounded-lg">
            <div className="w-full bg-black/5 px-2 rounded-lg overflow-hidden">
              <img src={p.media.smallImageUrl} alt={p.name} className="h-full w-full object-cover object-center mix-blend-multiply group-hover:scale-105 transition-transform" />
            </div>
            <div className="pt-4 grid justify-between gap-4">
              <div>
                <h3 className="text-lg text-black font-semibold">
                  {p.shoe}
                </h3>
              </div>
              <span className='flex gap-2 items-center'>
                {
                  p.rating == 4 ? (
                    <FourStars></FourStars>
                  ) : (
                    <FiveStars></FiveStars>
                  )
                }
                <span className='text-gray-600 flex items-center text-sm'>
                  ({(p.reviews) + ' Reviews'})
                </span>
              </span>
              <div className='flex gap-4 items-center'>
                <p className="text-base font-normal text-gray-600 line-through">${p.retailPrice + 10.01}</p>
                <p className="text-lg font-medium text-black">${p.retailPrice}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Pagination */}

        <nav className='m-auto md:col-span-2 xl:col-span-3 mt-8 '>
          <ul className="list-style-none flex items-center">
            <li>
              <a className="pointer-events-none relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg>
              </a>
            </li>
            <li>
              <a className="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white" href="#!">1</a>
            </li>
            <li aria-current="page">
              <a className="relative block rounded bg-neutral-800 py-1.5 px-3 text-sm font-medium text-neutral-50 transition-all duration-300 dark:bg-neutral-900" href="#!">2
                <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">(current)</span>
              </a>
            </li>
            <li>
              <a className="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white" href="#!">3</a>
            </li>
            <li>
              <a className="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white" href="#!">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>



      </div>
    </div>
  )
}

export default Sneakers
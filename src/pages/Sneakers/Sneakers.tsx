import { Input, Radio } from '@material-tailwind/react'
import React, { useState } from 'react'
import Range from 'rc-slider';
import 'rc-slider/assets/index.css';
import products from './products.json'

const Sneakers = () => {
  const searchHandler = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      console.log('hola')
    }
  }

  const [color, setColor] = useState(false)

  return (
    <div className='w-full max-w-7xl m-auto px-4 my-12 grid lg:grid-cols-12 min-h-[calc(100vh-100px)] divide-x gap-8'>

      {/* Filters */}
      <div className='lg:col-span-4 xl:col-span-3 w-full flex flex-col gap-8'>
        <Input label="Search" onKeyDown={(e) => searchHandler(e)} icon={
          <svg onClick={(e) => searchHandler(e)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search cursor-pointer" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>}
        />
        <div>
          <div className="w-full">
            <div>
              <label htmlFor="underline_select" className="sr-only">Underline select</label>
              <select id="underline_select" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                <option selected>Order by...</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
        </div>
        <div className='grid gap-2'>
          <h2 className='text-lg text-center'>Price</h2>
          <div className='flex gap-4 items-center'>
            <span>50</span>
            <Range allowCross={false} defaultValue={[50, 400]} min={50} max={400} range={true} pushable={5} railStyle={{ background: '#aaa' }} trackStyle={{ background: '#000' }} handleStyle={{ background: '#000', border: 'none', outline: 'none' }} />
            <span>400</span>
          </div>
        </div>
        <div className='grid gap-2'>
          <h2 className='text-lg text-center'>Gender</h2>
          <div className='flex gap-2 justify-between'>
            <Radio id="both" name="type" className='text-gray-200 bg-gray-200' label="Both" defaultChecked color={'gray'} />
            <Radio id="men" name="type" className='text-gray-200 bg-gray-200' label="Men" color={'gray'} />
            <Radio id="women" name="type" className='text-gray-200 bg-gray-200' label="Women" color={'gray'} />
          </div>
        </div>
      </div>

      {/* Products */}
      <div className='h-full lg:col-span-8 xl:col-span-9 w-full lg:pl-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3'>
        {products.map((p, i) => (
          <div key={p.id} className="group relative overflow-hidden cursor-pointer shadow p-2">
            <div className="w-full bg-gray-200 group-hover:scale-105 transition-transform">
              <img src={p.media.smallImageUrl} alt={p.name} className="h-full w-full object-cover object-center" />
            </div>
            <div className="pt-4 flex justify-between">
              <div>
                <h3 className="text-lg text-gray-700">
                  {p.name}
                </h3>
              </div>
              <p className="text-lg font-medium text-gray-700">${p.retailPrice}</p>
            </div>
          </div>
        ))}

        {/* Pagination */}
        <nav aria-label="Page navigation example" className='m-auto md:col-span-2 xl:col-span-3'>
          <ul className="inline-flex items-center -space-x-px">
            <li>
              <a href="#" className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">
                <span className="sr-only">Previous</span>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              </a>
            </li>
            <li>
              <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a>
            </li>
            <li>
              <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
            </li>
            <li>
              <a href="#" aria-current="page" className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">3</a>
            </li>
            <li>
              <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">4</a>
            </li>
            <li>
              <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">5</a>
            </li>
            <li>
              <a href="#" className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">
                <span className="sr-only">Next</span>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sneakers
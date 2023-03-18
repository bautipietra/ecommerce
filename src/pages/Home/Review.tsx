import React, { useState } from 'react'
import { MdRateReview, MdClose } from 'react-icons/md'
import { Textarea } from "@material-tailwind/react";
import { toast } from 'react-hot-toast';

interface ComponentProps {
  setReviewModal: (arg: boolean) => void;
}

const Review = ({ setReviewModal }: ComponentProps) => {
  const [stars, setStars] = useState(0)
  const [review, setReview] = useState('')
  const sendHandler = () => {
    if (stars == 0) {
      toast.error('Please select a star')
    }
    else if (review.length < 10 || review.length > 300) {
      toast.error('Review must be between 10 and 300 characters')
    }
    else {
      toast.success('Review sent successfully')
      setReviewModal(false)
    }
  }
  return (
    <div className='fixed bg-black/30 left-0 top-0 h-screen w-screen flex items-center justify-center p-4'>
      <div className='bg-white p-8 grid w-full max-w-2xl relative rounded-lg gap-4'>
        <svg onClick={() => setReviewModal(false)} xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="#000" className="z-10 bi bi-x absolute right-4 top-4 cursor-pointer" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
        <h2 className='text-2xl font-bold text-center'>Leave your review</h2>
        <div className="flex items-center m-auto">
          <svg onClick={() => setStars(1)} aria-hidden="true" className={`w-5 h-5 ${stars >= 1 ? 'text-yellow-600' : 'text-gray-400'} cursor-pointer`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          <svg onClick={() => setStars(2)} aria-hidden="true" className={`w-5 h-5 ${stars >= 2 ? 'text-yellow-600' : 'text-gray-400'} cursor-pointer`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          <svg onClick={() => setStars(3)} aria-hidden="true" className={`w-5 h-5 ${stars >= 3 ? 'text-yellow-600' : 'text-gray-400'} cursor-pointer`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          <svg onClick={() => setStars(4)} aria-hidden="true" className={`w-5 h-5 ${stars >= 4 ? 'text-yellow-600' : 'text-gray-400'} cursor-pointer`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          <svg onClick={() => setStars(5)} aria-hidden="true" className={`w-5 h-5 ${stars >= 5 ? 'text-yellow-600' : 'text-gray-400'} cursor-pointer`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
        </div>
        <Textarea value={review} onChange={(e) => setReview(e.target.value)} label="Message" className='focus:ring-0' />
        <div className='grid gap-2 grid-cols-2'>
          <button onClick={() => setReviewModal(false)} className="flex mt-4 items-center justify-center gap-2 w-full px-6 py-2.5 text-sm font-medium tracking-wider text-black transition-colors duration-300 transform text-center focus:outline-none border-solid border-[1px] border-black/10 hover:bg-gray-100 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
            <MdClose fill='#000'></MdClose>
            Cancel</button>
          <button onClick={sendHandler} className="flex mt-4 items-center justify-center gap-2 w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform text-center focus:outline-none bg-black hover:bg-gray-900 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
            <MdRateReview></MdRateReview>
            Send</button>
        </div>
      </div>
    </div>
  )
}

export default Review
import React from 'react'
import {FaRegCommentDots, FaGlobe, FaBalanceScale, FaWallet} from 'react-icons/fa'

export default function FeaturedCardsA() {
    return (
            <div className='absolute bg-white shadow-2xl h-40 w-full max-w-7xl -top-20 rounded-none left-1/2 -translate-x-1/2 overflow-hidden md:rounded-xl'>
              <div className='grid grid-cols-4 h-full'>

                  <div className='flex flex-wrap md:flex-nowrap justify-evenly items-center h-full border-r'>
                      <FaRegCommentDots className='text-green-400' size={45}/>
                      <div className='flex flex-col'>
                            <h2 className='text-sm text-center md:text-left font-semibold capitalize'>Quick Response</h2>
                            <p className='text-gray-500 mt-2 text-xs text-center md:text-left'>24/7 Client Support</p>
                      </div>
                  </div>


                  <div className='flex  flex-wrap md:flex-nowrap justify-evenly items-center h-full border-r'>
                      <FaGlobe className='text-green-400' size={45}/>
                      <div className='flex flex-col'>
                            <h2 className='text-sm text-center md:text-left font-semibold capitalize'>Expert Support</h2>
                            <p className='text-gray-500 mt-2 text-xs text-center md:text-left'>Worldwide Specialists</p>
                      </div>
                  </div>

                  <div className='flex flex-wrap md:flex-nowrap justify-evenly items-center h-full border-r'>
                      <FaBalanceScale className='text-green-400' size={45}/>
                      <div className='flex flex-col'>
                            <h2 className='text-sm text-center md:text-left font-semibold capitalize'>Flexible Payment</h2>
                            <p className='text-gray-500 mt-2 text-xs text-center md:text-left'>Flexible Payment</p>
                      </div>
                  </div>


                  <div className='flex  flex-wrap md:flex-nowrap justify-evenly items-center h-full border-r'>
                      <FaWallet className='text-green-400' size={45}/>
                      <div className='flex flex-col'>
                            <h2 className='text-sm text-center md:text-left font-semibold capitalize'>Affordable Prices</h2>
                            <p className='text-gray-500 mt-2 text-xs text-center md:text-left'>Easy Payment Methods</p>
                      </div>
                  </div>

              </div>
          </div>
    )
}

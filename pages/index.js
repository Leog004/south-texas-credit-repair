import Head from 'next/head'
import Image from 'next/image'
import {FaRegCommentDots, FaGlobe, FaBalanceScale, FaWallet} from 'react-icons/fa'

export default function Home() {
  return (
    <main className='h-full w-full bg-white'>
        <section className='h-full min-h-screen w-full -my-28 md:-mt-24 bg-cover object-cover bg-center' style={{backgroundImage: `linear-gradient(to left, rgba(42, 51, 78, .8), rgba(42, 51, 78, .8)), url(https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80)`}}>
          <div className='absolute bottom-72 md:bottom-0 md:top-1/2 -translate-y-1/4 left-0 px-10 md:pl-36 motion-safe:animate-fadeIn'>
                  <div className='flex flex-col w-full md:w-[50rem]'>
                      <h2 className='text-[rgb(51,214,135)] text-xl md:text-2xl font-semibold leading-10 tracking-widest mb-1'>New location in Pharr Texas.</h2>
                      <h1 className='text-white text-4xl md:text-6xl font-semibold mb-10 tracking-normal leading-snug md:leading-[4.5rem]'>We Take Care of Your Taxes and Credit.</h1>
                      <div className='flex w-full justify-start'>
                          <button className='mr-10 px-6 py-3 bg-[#4e86ff] rounded-md text-white font-semibold hover:scale-105 hover:shadow-xl hover:bg-[#2e6ef8] transition-all duration-100'>
                            Learn More
                          </button>
                          <button className='mr-10 px-6 py-3 bg-[rgba(255,255,255,.2)] text-white font-semibold hover:scale-105 hover:shadow-xl hover:bg-[255,255,255,.4] transition-all duration-100 rounded-md'>
                            How We Work
                          </button>
                      </div>
                  </div>
          </div>
        </section>


        <section className='h-full min-h-screen w-full bg-zinc-50 relative'>

          <div className='absolute bg-white shadow-2xl h-40 w-full max-w-7xl -top-20 rounded-xl left-1/2 -translate-x-1/2'>
              <div className='grid grid-cols-4 h-full'>

                  <div className='flex flex-wrap md:flex-nowrap justify-evenly items-center h-full border-r'>
                      <FaRegCommentDots className='text-green-400' size={45}/>
                      <div className='flex flex-col'>
                            <h2 className='font-semibold capitalize'>Quick Response</h2>
                            <p className='text-gray-500 mt-2'>24/7 Client Support</p>
                      </div>
                  </div>


                  <div className='flex  flex-wrap md:flex-nowrap justify-evenly items-center h-full border-r'>
                      <FaGlobe className='text-green-400' size={45}/>
                      <div className='flex flex-col'>
                            <h2 className='font-semibold capitalize'>Expert Support</h2>
                            <p className='text-gray-500 mt-2'>Worldwide Specialists</p>
                      </div>
                  </div>

                  <div className='flex flex-wrap md:flex-nowrap justify-evenly items-center h-full border-r'>
                      <FaBalanceScale className='text-green-400' size={45}/>
                      <div className='flex flex-col'>
                            <h2 className='font-semibold capitalize'>Flexible Payment</h2>
                            <p className='text-gray-500 mt-2'>Flexible Payment</p>
                      </div>
                  </div>


                  <div className='flex  flex-wrap md:flex-nowrap justify-evenly items-center h-full border-r'>
                      <FaWallet className='text-green-400' size={45}/>
                      <div className='flex flex-col'>
                            <h2 className='font-semibold capitalize'>Affordable Prices</h2>
                            <p className='text-gray-500 mt-2'>Easy Payment Methods</p>
                      </div>
                  </div>

              </div>
          </div>

        </section>


    </main>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import { FeaturedCardsA, ScheduleSignUpForm } from '../components'

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


        <section className='h-full min-h-screen w-full bg-zinc-50 relative py-20'>

          <FeaturedCardsA />

          <div className='grid grid-cols-1 md:grid-cols-2 pt-28 px-10 max-w-7xl mx-auto'>
              <div className='grid grid-cols-2 gap-x-10 md:gap-x-0'>
                  <div className='rounded-md overflow-hidden z-10'>
                    <img src='https://images.unsplash.com/photo-1554224155-cfa08c2a758f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=275&q=100&h=500' />
                  </div>

                  <div className='rounded-md overflow-hidden z-0 self-end'>
                    <img src='https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=275&q=100&h=500' />
                  </div>
                  
              </div>

              <div className='flex w-full'>
                <div className='px-10 md:pl-20 md:pr-10 py-10'>
                    <h2 className='text-[rgb(51,214,135)] text-xl md:text-2xl font-semibold leading-10 tracking-widest mb-4'>let's talk about us</h2>
                    <h1 className='text-4xl md:text-5xl font-semibold mb-10 tracking-normal leading-snug md:leading-[3.2rem]'>We Take Care of Your Taxes and Credit.</h1>
                    <p className='text-gray-700 text-base leading-loose'>
                      The groups serve every single significant segment. of the business. 
                      Our work draw on over 25+ years of experience, conveyed by 5,800 experts on the planet's most significant monetary focuses.

                      The groups serve every single significant segment. of the business. 
                      Our work draw on over 25+ years of experience, conveyed by 5,800 experts on the planet's most significant monetary focuses.
                    </p>

                   <p className='text-gray-700 text-base leading-loose mt-10 mb-4'>Call us 24/7. We can answer for <span className='text-black font-semibold'>all your questions.</span></p>
                   <p><span className='text-black font-semibold mr-5'>+1 956 784-2009</span> or <span className='text-black font-semibold ml-5  '>inquiry@youremail.com</span></p>
                </div>
              </div>
          </div>


        </section>


        <section className='h-full min-h-screen w-full relative py-20 px-10 md:px-0'>
        
        <div className='flex flex-col w-full justify-center items-center py-10'>
          <h2 className='text-[rgb(51,214,135)] text-xl md:text-2xl font-semibold leading-10 tracking-widest mb-4'>Free Consultation</h2>
          <h1 className='text-4xl md:text-5xl font-semibold mb-10 tracking-normal leading-snug md:leading-[3.2rem]'>We Take Care of Your Taxes and Credit.</h1>
        </div>

        <ScheduleSignUpForm />

        </section>


    </main>
  )
}

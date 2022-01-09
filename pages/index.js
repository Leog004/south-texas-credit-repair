import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='h-full w-full bg-white'>
        <section className='h-full min-h-screen w-full -my-28 md:-mt-24 bg-cover object-cover' style={{backgroundImage: `linear-gradient(to left, rgba(42, 51, 78, .8), rgba(42, 51, 78, .8)), url(https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80)`}}>
          <div className='absolute top-1/2 -translate-y-1/4 left-0 pl-36'>
                  <div className='flex flex-col w-[50rem]'>
                      <h2 className='text-[rgb(51,214,135)] text-2xl font-semibold leading-10 tracking-widest mb-1'>New location in Pharr Texas.</h2>
                      <h1 className='text-white text-6xl font-semibold mb-10 tracking-normal leading-[4.5rem]'>We Take Care of Your Taxes and Credit.</h1>
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
    </main>
  )
}

import React from 'react'
import { BlockSection, FeatureSection, Hero, ScheduleSignUpForm } from '../../components'

export default function index() {
    return (
        <main className='bg-white'>
            <Hero title={'Tax Service'} />
            <FeatureSection/>
            <BlockSection/>

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

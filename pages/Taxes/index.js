import React from 'react'
import { BlockSection, FeatureSection, Hero, ScheduleSignUpForm } from '../../components'
import { getTaxPageData } from '../../services';

export default function index({data}) {

    return (
        <main className='bg-white'>
            <Hero image={data.header.backgroundImage.url} title={data.header.title} description={'_'} />
            <FeatureSection data={data}/>
            <BlockSection data={data} />

        <section id='calender' className='h-full min-h-screen w-full relative py-20 px-10 md:px-0'>
        
        <div className='flex flex-col w-full justify-center items-center py-10'>
          <h2 className='text-[rgb(51,214,135)] text-xl md:text-2xl font-semibold leading-10 tracking-widest mb-4'>Free Consultation</h2>
          <h1 className='text-4xl md:text-5xl font-semibold mb-10 tracking-normal leading-snug md:leading-[3.2rem]'>We Take Care of Your Taxes and Credit.</h1>
        </div>

        <ScheduleSignUpForm />

        </section> 
        </main>
    )
}



// this method runs when page is loaded. Pulls data from server
export async function getServerSideProps() {

    const data = (await getTaxPageData()) || [];
  
    // console.log(data);
  
    try{
  
        return {
            props: { data }, // return them to our front end as props
          };
  
    }catch(err){
        console.log(err);
    }
  
  }
  
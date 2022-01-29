import React from 'react'
import { BlockSection, FeatureSection, Hero, ScheduleSignUpForm } from '../../components'
import { getCreditRepairPageData } from '../../services';

export default function index({data}) {
    return (
        <main className='bg-white'>
            <Hero image={data.header.backgroundImage.url} title={data.header.title} description={'_'} />
<section className="text-gray-600 body-font max-w-7xl mx-auto mt-36">
        <div className='flex flex-col w-full justify-center items-center py-20'>
          <h1 className='text-4xl md:text-5xl font-semibold mb-10 tracking-normal leading-snug md:leading-[3.2rem]'>{data.sectionTitle}</h1>
        </div>
  <div className="container px-5 mx-auto flex flex-wrap">
    <div className="flex flex-wrap w-full">
      <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
        {
          data.stepComponents.map((el) => (
            <div key={el.title} className="flex relative pb-12 last:pb-0">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[rgb(51,214,135)] inline-flex items-center justify-center text-white relative z-10">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">{el.title}</h2>
              <p className="leading-relaxed">{el.description}</p>
            </div>
          </div>
          ))
        }

      </div>
      <img className="lg:w-3/5 md:w-1/2 object-contain object-center rounded-lg md:mt-0 mt-12" src={data.stepImage.url} alt="step" />
    </div>
  </div>
</section>


            <section  id='calender' className='h-full min-h-screen w-full relative py-20 px-10 md:px-0'>
        
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

  const data = (await getCreditRepairPageData()) || [];

  // console.log(data);

  try{

      return {
          props: { data }, // return them to our front end as props
        };

  }catch(err){
      console.log(err);
  }

}

import React, { useState, useEffect } from 'react'
import { Hero } from '../../components'
import { getLocationPageData } from '../../services';
import { toast } from 'react-toastify';
import {SendEmailContact_Message} from '../../Email/index'
import {checkIfEmailValid} from '../../services/util'

import 'react-toastify/dist/ReactToastify.css'
toast.configure();


export default function index({data}) {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });


  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;


    if(email && name && message && checkIfEmailValid(email)){
 
        const emailObj = {
            Username : name,
            Useremail :  email,
            UserMessage : message
          };
    
        let response = await SendEmailContact_Message(emailObj);
        //console.log(response);

    }else{

        // toast properties
        toast.error(`Please make sure that you entered the required information.`, {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: true,
            closeOnClick: true
        });

        if(!email || !checkIfEmailValid(email)){
            document.getElementById('form-email').style.border = '2px solid red'
        }else{
            document.getElementById('form-email').style.border = 'transparent'
        }

        if(!name){
            document.getElementById('form-name').style.border = '2px solid red'
        }else{
            document.getElementById('form-name').style.border = 'transparent'

        }

        if(!phone){
            document.getElementById('form-phone').style.border = '2px solid red'
        }else{
            document.getElementById('form-phone').style.border = 'transparent'

        }
    }
}

const onInputChange = (e) => {
  const { target } = e;
  if (target.type === 'checkbox') {
    setFormData((prevState) => ({
      ...prevState,
      [target.name]: target.checked,
    }));
  } else {
    setFormData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  }
};
    return (
        <main className='bg-white'>
            <Hero image={data.header.backgroundImage.url} title={data.header.title} description={'_'} />

          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-col">
              <div className="lg:w-5/6 mx-auto">
                <div className="rounded-lg h-64 overflow-hidden shadow-xl">
                  <img alt="content" className="object-cover object-center h-full w-full" src={data.bigImage.url} />
                </div>
                <div className="flex flex-col sm:flex-row mt-10">
                  <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                    <div className="w-28 h-28 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 overflow-hidden">
                        <img className='w-full h-full' src={data.profileImage.url} />
                    </div>
                    <div className="flex flex-col items-center text-center justify-center">
                      <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{data.profileName}</h2>
                      <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                      <p className="text-base">{data.profileDescription}</p>
                    </div>
                  </div>
                  <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                    <p class="leading-relaxed text-lg mb-4">{data.sectionDescription}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
              <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"> 
                <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14321.667539897193!2d-98.12165849737416!3d26.183113739848054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1642228116378!5m2!1sen!2sus" style={{filter: 'grayscale(1) contrast(1.2) opacity(0.4);'}}></iframe>
                <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                  <div className="lg:w-1/2 px-6">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                    <p className="mt-1">501 S. Alamo Road | Alamo, Tx. 78516</p>
                  </div>
                  <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                    <a href='mailto:southtexascreditrepair2019@gmail.com' className="text-indigo-500 leading-relaxed">southtexascreditrepair2019@gmail.com</a>
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                    <a href='tel:+1956601-0284' className="leading-relaxed">+1 956 601 0284</a>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
                <p className="leading-relaxed mb-5 text-gray-600">We will love to hear from you</p>
                <div className="relative mb-4">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                  <input value={formData.name} onChange={onInputChange}  type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  required/>
                </div>
                <div className="relative mb-4">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input value={formData.email} onChange={onInputChange}  type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
                </div>
                <div className="relative mb-4">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                  <textarea value={formData.message} onChange={onInputChange}  id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                <button onClick={handleSubmit} type='button' className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                <p className="text-xs text-gray-500 mt-3"></p>
              </div>
            </div>
          </section>

        </main>
    )
}


// this method runs when page is loaded. Pulls data from server
export async function getServerSideProps() {

  const data = (await getLocationPageData()) || [];

  // console.log(data);

  try{

      return {
          props: { data }, // return them to our front end as props
        };

  }catch(err){
      console.log(err);
  }

}
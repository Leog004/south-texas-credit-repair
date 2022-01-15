import moment from 'moment';
import React, { useState, useEffect } from 'react'

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { getAppointmentsByData } from '../../services';
import {FaPhone, FaUser, FaMailBulk} from 'react-icons/fa'

export default function ScheduleSignUpForm() {
    const [value, onChange] = useState(new Date);
    const [availibity, setAvailibity] = useState([]);
    const [appointment, setAppointment] = useState('');


    useEffect(() => {
        getDaysAvailable();
    }, [value])

    const getDaysAvailable = async () => {



         await getAppointmentsByData(value.toLocaleDateString('sv-SE')).then((result) => {

            const timeAvailable = [

                {
                    available: true,
                    time: '10:00 - 10:30',
                    morning: true,
                    consultent: 'Javi Martinez'
                },
    
                {
                    available: true,
                    time: '11:00 - 11:30',
                    morning: true,
                    consultent: 'Javi Martinez'
                },
                {
                    available: true,
                    time: '12:00 - 12:30',
                    morning: false,
                    consultent: 'Javi Martinez'
                },
                {
                    available: true,
                    time: '1:00 - 1:30',
                    morning: false,
                    consultent: 'Javi Martinez'
                },
                {
                    available: true,
                    time: '2:00 - 2:30',
                    morning: false,
                    consultent: 'Javi Martinez'
                },
                {
                    available: true,
                    time: '3:00 - 3:30',
                    morning: false,
                    consultent: 'Javi Martinez'
                },
            ];

            const myArrayFiltered = timeAvailable.filter((el) => {
                return result.some((f) => {
                  return f.time !== el.time;
                });
              });

            console.log(result, value.toLocaleDateString('sv-SE'), myArrayFiltered, timeAvailable);
            setAvailibity(myArrayFiltered.length > 0 ? myArrayFiltered : timeAvailable);
        })


    }

    const setAppointmentClick = (el) => {
        setAppointment(el);
    }

    return (
            <form className="bg-white rounded-lg shadow sm:max-w-xl sm:w-full sm:mx-auto sm:overflow-hidden">
                <div className="px-4 py-8 sm:px-10">
                    <div className="relative mt-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300">
                            </div>
                        </div>
                        <div className="relative flex justify-center text-sm leading-5">
                            <span className="px-2 text-gray-700 bg-white font-semibold">
                                Schedule a free consultation appointment.
                            </span>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="w-full space-y-6">
                            <div className="w-full">
                                <div className=" relative ">
                                <FaUser className='absolute top-1/2 -translate-y-1/2 left-5 text-green-600'/>

                                    <input type="text" id="form-name" className="pl-12 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="Your name" required/>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="relative">
                                <FaMailBulk className='absolute top-1/2 -translate-y-1/2 left-5 text-green-600'/>

                                    <input type="email" id="form-email" className="pl-12 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="Your email" required/>
                                </div>
                            </div>

                            <div className="w-full">
                                <div className="relative h-full items-center">
                                     <FaPhone className='absolute top-1/2 -translate-y-1/2 left-5 text-green-600'/>
                                    <input type='text' id="form-phone" className="pl-12 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="Your Phone" required/>
                                </div>
                            </div>
                            <div className="w-full">
                                    {
                                    !appointment
                                        ? <>
                                                <div className="w-full flex justify-center">
                                                    <div className="relative">
                                                    <Calendar
                                                        onChange={(date) => onChange(date)}
                                                        value={value}
                                                        minDate={new Date()}
                                                        calendarType='US'
                                                        onClickDay={getDaysAvailable}
                                                    />
                                                    </div>
                                                </div>

                                                <div className="w-full">
                                                <h2 className='my-4 font-semibold'>Availability: </h2>
                                                    <div className="relative flex flex-wrap gap-y-10 gap-x-10 justify-evenly bg-gray-100 p-5">

                                                        
                                                                {
                                                                    availibity.map((el) => (
                                                                        el.available &&
                                                                        <div onClick={() => setAppointmentClick(`${el.time} ${el.morning ? "AM"  : "PM"}`)} key={el.time} className='flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden mb-2 cursor-pointer w-1/3 hover:shadow-2xl hover:bg-slate-400 transition-all duration-100'>
                                                                            <div className="w-full p-4">
                                                                                <h1 className="text-gray-900 font-bold text-sm md:text-2xl">
                                                                                    {el.time} <span className='text-xs'>{el.morning ? "AM"  : "PM"}</span>
                                                                                </h1>
                                                                                {/* <p className="mt-2 text-gray-600 text-sm">
                                                                                    {el.consultent}
                                                                                </p> */}
                                                                            </div>
                                                                        </div>
                            
                                                                    ))
                                                                } 
                                                    </div>
                                                </div>
                                            </>
                                        :
                                        <div className="w-full p-4 bg-green-200">
                                            <h1 className="text-gray-900 font-bold text-2xl">
                                                {value.toLocaleDateString("en-US")} | {appointment} 
                                            </h1>
                                        </div>
                                        }
                                </div>
                            <div>
                                <span className="block w-full rounded-md shadow-sm">
                                    <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        Schedule
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
                    <p className="text-xs leading-5 text-gray-500">
                        *Check for a confirmation email.
                    </p>
                </div>
            </form>
    )
}

import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import {GiHamburgerMenu, GiExitDoor} from 'react-icons/gi'
import {FaWindowClose} from 'react-icons/fa'

export default function Header() {

    const [navbar, setNavbar] = useState(false);
    const [mobileNav, setmobileNav] = useState(false);

    const changeBackground = () => {
        window.scrollY >= 80 ? setNavbar(true) : setNavbar(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
    })

    const setNavMobileOnClick = () => {
        setmobileNav((mobileNav) => !mobileNav);
    }

    return (
        <header className={`w-full h-full md:h-24 sticky top-0 bg-gray-700 p-4 ${navbar ? 'md:bg-gray-700' : 'md:bg-transparent'} md:p-0 z-20 shadow-2xl motion-safe:animate-fadeIn`}>
            <div className='flex flex-wrap justify-between h-full'>


                {/* LEFT SIDE | LOGO */}
                <div className='flex h-full items-center md:w-1/4 justify-center'>
                 <Link href={'/'}>
                    <img className='h-12 md:h-24 w-auto cursor-pointer' src='/Logo/SouthTexasCreditRepairLogo_W.jpg' />
                    </Link>
                </div>
                
                {/* MIDDLE | NAVIGATION */}
                <nav className='hidden md:flex h-full items-center w-full md:w-2/4 justify-center gap-x-10 text-white'>
                    <Link href={'/'}>
                        <a className='text-base font-semibold cursor-pointer hover:text-green-400 hover:scale-105 my-5'>Home</a>
                    </Link>

                    <Link href={'/Credit'}>
                    <a className='text-base font-semibold cursor-pointer hover:text-green-400 hover:scale-105 my-5'>Credit Repair</a>
                    </Link>

                    <Link href={'/Taxes'}>
                    <a className='text-base font-semibold cursor-pointer hover:text-green-400 hover:scale-105 my-5'>Tax Returns</a>
                    </Link>
                
                    <a onClick={() => document.getElementById('calender').scrollIntoView()} className='text-base font-semibold cursor-pointer text-yellow-400 hover:scale-105 underline underline-offset-8 my-5'>Book Appointment</a>
                    
                   <Link href={'/Location'}>
                    <a className='text-base font-semibold cursor-pointer hover:text-green-400 hover:scale-105 my-5'>Our Location</a>
                    </Link>
                </nav>

                {/* RIGHT SIDE | Contant  */}
                <div className='hidden md:flex h-full items-center w-full md:w-1/4 justify-center'>
                    <a href='tel:+1956601-0284' className='bg-[rgb(51,214,135)] px-4 py-2 rounded-md text-gray-50 font-semibold shadow-lg my-5'>
                        +1 956 601 0284
                    </a>
                </div>


                    {/* MOBILE NAV */}
                <div onClick={setNavMobileOnClick} className='flex sm:hidden h-full items-center md:w-1/4 justify-center cursor-pointer'>
                    <GiHamburgerMenu size={30} className='text-gray-200' />
                </div>

            </div>
                {/* MIDDLE | NAVIGATION */}
                <nav className={`${mobileNav ? '' : 'hidden'} flex flex-col gap-y-10 min-h-screen bg-gray-700 w-full fixed top-0 mx-auto justify-center items-center align-middle pb-20 text-white left-0 right-0 bottom-0`}>
                {/* MOBILE NAV */}
                <div onClick={setNavMobileOnClick} className='flex w-full items-end self-end justify-self-end justify-end pr-10 -mt-40 cursor-pointer'>
                    <FaWindowClose size={30} className='text-gray-200' />
                </div>
                                    {/* LEFT SIDE | LOGO */}
                <div className='flex'>
                        <Link onClick={setNavMobileOnClick} href={'/'}>
                            <img onClick={setNavMobileOnClick} className='h-12 w-auto cursor-pointer' src='/Logo/SouthTexasCreditRepairLogo_W.jpg' />
                        </Link>
                </div>

                    <Link href={'/'}>
                        <a onClick={setNavMobileOnClick} className='flex text-base font-semibold cursor-pointer hover:text-green-400 hover:scale-105'>Home</a>
                    </Link>

                    <Link href={'/Credit'}>
                        <a onClick={setNavMobileOnClick} className='flex text-base font-semibold cursor-pointer hover:text-green-400 hover:scale-105'>Credit Repair</a>
                    </Link>

                    <Link href={'/Taxes'}>
                        <a onClick={setNavMobileOnClick} className='flex text-base font-semibold cursor-pointer hover:text-green-400 hover:scale-105'>Tax Returns</a>
                    </Link>
                
                    <a onClick={() => document.getElementById('calender').scrollIntoView()} className='flex text-base font-semibold cursor-pointer text-yellow-400 hover:scale-105 underline underline-offset-8'>Book Appointment</a>
                    
                   <Link href={'/Location'}>
                        <a onClick={setNavMobileOnClick} className='flex text-base font-semibold cursor-pointer hover:text-green-400 hover:scale-105'>Our Location</a>
                   </Link>

                    
                </nav>
            
        </header>
    )
}

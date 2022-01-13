import React, {useEffect, useState} from 'react'

export default function Header() {

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        window.scrollY >= 80 ? setNavbar(true) : setNavbar(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
    })

    return (
        <header className={`w-full h-full md:h-24 sticky top-0 bg-gray-700 p-4 ${navbar ? 'md:bg-gray-700' : 'md:bg-transparent'} md:p-0 z-20 shadow-2xl motion-safe:animate-fadeIn`}>
            <div className='flex flex-wrap justify-between h-full'>

                {/* LEFT SIDE | LOGO */}
                <div className='flex h-full items-center w-full md:w-1/4 justify-center'>
                    <img className='h-12 md:h-24 w-auto' src='/Logo/SouthTexasCreditRepairLogo_W.jpg' />
                </div>
                
                {/* MIDDLE | NAVIGATION */}
                <nav className='hidden md:flex h-full items-center w-full md:w-2/4 justify-center gap-x-10 text-white'>
                    <a className='text-base font-semibold cursor-pointer hover:text-green-400 hover:scale-105'>Home</a>
                    <a className='text-base font-semibold cursor-pointer hover:text-green-400 hover:scale-105'>Credit Repair</a>
                    <a className='text-base font-semibold cursor-pointer hover:text-green-400 hover:scale-105'>Tax Returns</a>
                    <a className='text-base font-semibold cursor-pointer text-yellow-400 hover:scale-105 underline underline-offset-8'>Book Appointment</a>
                    <a className='text-base font-semibold cursor-pointer hover:text-green-400 hover:scale-105'>Our Location</a>

                </nav>

                {/* RIGHT SIDE | Contant  */}
                <div className='hidden md:flex h-full items-center w-full md:w-1/4 justify-center'>
                    <a href='tel:+1956784-2009' className='bg-[rgb(51,214,135)] px-4 py-2 rounded-md text-gray-50 font-semibold shadow-lg'>
                        +1 956 784-2009
                    </a>
                </div>
            </div>
        </header>
    )
}

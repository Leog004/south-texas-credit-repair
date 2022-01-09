import React from 'react'

export default function Header() {
    return (
        <header className='w-full h-full md:h-24 sticky top-0 bg-gray-700 p-4 md:bg-transparent md:p-0 z-20'>
            <div className='flex flex-wrap justify-between h-full'>

                {/* LEFT SIDE | LOGO */}
                <div className='flex h-full items-center w-full md:w-1/4 justify-center'>
                    <img className='h-12 w-auto' src='https://spertyhtml.websitedesigntemplates.net/img/logos/logo-inner.png' />
                </div>
                
                {/* MIDDLE | NAVIGATION */}
                <nav className='hidden md:flex h-full items-center w-full md:w-2/4 justify-center gap-x-10 text-white'>
                    <a className='text-base font-semibold cursor-pointer'>Home</a>
                    <a className='text-base font-semibold cursor-pointer'>Credit Repair</a>
                    <a className='text-base font-semibold cursor-pointer'>Tax Returns</a>
                    <a className='text-base font-semibold cursor-pointer'>Book Appointment</a>
                </nav>

                {/* RIGHT SIDE | Contant  */}
                <div className='hidden md:flex h-full items-center w-full md:w-1/4 justify-center'>
                    <button className='bg-[rgb(51,214,135)] px-4 py-2 rounded-md text-gray-50 font-semibold shadow-lg'>
                        +1 123 456 789
                    </button>
                </div>
            </div>
        </header>
    )
}

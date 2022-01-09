import React from 'react'

export default function Header() {
    return (
        <header className='w-full h-24 bg-transparent'>
            <div className='flex justify-between h-full'>

                {/* LEFT SIDE | LOGO */}
                <div className='flex h-full items-center w-1/4 justify-center'>
                    <img className='h-12 w-auto' src='https://spertyhtml.websitedesigntemplates.net/img/logos/logo-inner.png' />
                </div>
                
                {/* MIDDLE | NAVIGATION */}
                <nav className='flex h-full items-center w-2/4 justify-center gap-x-10'>
                    <a className='text-base font-semibold cursor-pointer'>Home</a>
                    <a className='text-base font-semibold cursor-pointer'>Credit Repair</a>
                    <a className='text-base font-semibold cursor-pointer'>Tax Returns</a>
                    <a className='text-base font-semibold cursor-pointer'>Book Appointment</a>
                </nav>

                {/* RIGHT SIDE | Contant  */}
                <div className='flex h-full items-center w-1/4 justify-center'>
                    <button className='bg-green-400 px-4 py-2 rounded-md text-gray-50 font-semibold shadow-lg'>
                        +1 123 456 789
                    </button>
                </div>
            </div>
        </header>
    )
}

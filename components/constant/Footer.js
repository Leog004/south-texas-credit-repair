import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className='w-full h-full bg-[rgb(42,51,78)]'>
            <div className='py-20 px-5 max-w-7xl mx-auto container'>
                <div className='grid grid-cols-1 md:grid-cols-6 gap-8'>

                    <div className='col-span-1 md:col-span-2 pr-28'>
{/* image */}
                    <Link href={'/'}>
                        <img className='h-12 md:h-16 w-auto cursor-pointer' src='/Logo/SouthTexasCreditRepairLogo_W.jpg' />
                    </Link>
   
                        <p className='text-white mt-6'>Follow us on social media.</p>
                        <a href='https://www.facebook.com/SOUTHTEXASCREDITREPAIR19' target={'_blank'} className='cursor-pointer'>
                            <img className='rounded-lg h-14 py-2 shadow-lg overflow-hidden' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/1200px-Facebook_New_Logo_%282015%29.svg.png'/>
                        </a>
                        {/* <div className='flex gap-x-2 mt-6 items-center self-center align-middle'>
                            <span className='bg-gray-200 px-3 py-1 rounded-full'>F</span>
                            <span className='bg-gray-200 px-3 py-1 rounded-full'>a</span>
                            <span className='bg-gray-200 px-3 py-1 rounded-full'>a</span>
                            <span className='bg-gray-200 px-3 py-1 rounded-full'>a</span>
                        </div> */}
                    </div>

                    <div className='col-span-1 md:col-span-4 '>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-10'>
                            <div>
{/* image */}
                            <Link href={'/'}>
                                <a className='text-base text-white font-semibold cursor-pointer hover:text-green-400 hover:scale-105 my-5'>Home</a>
                            </Link>
                            </div>

                            <div>
{/* image */}                                
                            <Link href={'/Credit'}>
                                <a className='text-base text-white font-semibold cursor-pointer hover:text-green-400 hover:scale-105 my-5'>Credit Repair</a>
                            </Link>
                            </div>

                            <div>
{/* image */}                                
                            <Link href={'/Taxes'}>
                                <a className='text-base text-white font-semibold cursor-pointer hover:text-green-400 hover:scale-105 my-5'>Tax Returns</a>
                            </Link>
                            </div>

                            <div>
                               {/* image */}
                               <Link href={'/Location'}>
                                <a className='text-base text-white font-semibold cursor-pointer hover:text-green-400 hover:scale-105 my-5'>Our Location</a>
                                </Link>
                            </div>                           
                        </div>

                        <hr className='my-10 border-slate-50 ' />

                        <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 gap-x-10'>
 

                            <div>
                                {/* image */}
                                <h2 className='text-white font-semibold'>Address</h2>
                                <p className='text-white mt-2'>501 S. Alamo Road | Alamo, Tx. 78516</p>
                            </div>

                            <div className='flex gap-x-4 w-full flex-wrap'>
                                {/* image */}
                                <h2 className='text-white font-semibold self-start'>Phone: </h2>
                                <a href='tel:+1956601-0284' className='bg-[rgb(51,214,135)] px-4 py-2 rounded-md text-gray-50 font-semibold shadow-lg self-start'>
                                    +1 956 601 0284
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

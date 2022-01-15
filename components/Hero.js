import React from 'react'

const LinearGradient = 'linear-gradient(to left, rgba(42, 51, 78, .8), rgba(42, 51, 78, .8))'


export default function Hero({title, description, image}) {

    const defaultImage = 'https://images.unsplash.com/flagged/photo-1557296126-ae91316e5746?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';

    const HeaderTitle = title || "There is no title";
    
    const HeaderDesc = description || "Change This header to anything by using the UX Builder. You can also remove it. It's only visible on the blog homepage.";
    
    if(!image) image = defaultImage;

    return (
        <div className='-my-28 md:-mt-24 bg-background h-lg bg-cover bg-center bg-no-repeat' style={{backgroundImage: `${LinearGradient},url(${image})`}}>
            <div className='flex flex-col gap-y-5 max-w-6xl mx-auto justify-center items-center h-full px-10'>
                <h1 className='text-white text-5xl'>{HeaderTitle}</h1>
                <p className='text-gray-300 text-base'>{HeaderDesc}</p>
            </div>
        </div>
    )
    
}

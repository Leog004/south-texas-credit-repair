import React from 'react'

export default function BlockSection({data}) {
    return (
        <div className="max-w-7xl p-4 mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="pb-28">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="lg:col-start-2 lg:max-w-2xl ml-auto">
                    <p className="text-base leading-6 text-indigo-500 font-semibold uppercase">
                        {data.sectionTitle}
                    </p>
                    <h4 className="mt-2 text-2xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                        {data.sectionTitle}
                    </h4>
                    <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                        {data.description}
                    </p>
                    <ul className="mt-8 md:grid md:grid-cols-2 gap-6">
                        {
                            data.checkmarks.map((el) => (
                                <li key={el} className="mt-6 lg:mt-0">
                                    <div className="flex">
                                        <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                           {el}
                                        </span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
                    <div className="relative space-y-4">
                        <div className="flex items-end justify-center lg:justify-start space-x-4 flex-wrap">
                            {
                                data.images.map((el) => (
                                    <img key={el.fileName} className="rounded-lg shadow-lg w-32 md:w-32" width="200" src={el.url} alt="1"/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

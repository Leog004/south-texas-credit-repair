import React from 'react'
import { BlockSection, FeatureSection, Hero } from '../../components'

export default function index() {
    return (
        <main className='bg-white'>
            <Hero title={'Credit Repair Service'} />
            <FeatureSection/>
            <BlockSection/>
        </main>
    )
}

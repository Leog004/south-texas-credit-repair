import React from 'react'
import { BlockSection, FeatureSection, Hero } from '../../components'

export default function index() {
    return (
        <main className='bg-white'>
            <Hero title={'Our Location'} />
            <FeatureSection/>
            <BlockSection/>
        </main>
    )
}

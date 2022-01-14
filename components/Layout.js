import React from "react";
import { Header, Footer } from '../components' 
import Head from 'next/head'

export default function Layout({children}) {
    return (
        <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Spectral:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
            <title>South Texas Credit Repair</title>
        
            {/* Meta Tag */}
            <meta charSet="UTF-8" />
            <meta name="description" content="My MyEquibrand" key='description' />
            <meta name="keywords" content="Classic Equine, Classic Rope, MyEquibrand, Rattler Rope, Cashel" key='keyWords' />
            <meta name="author" content="Equibrand" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />      
        
        </Head>
            <Header />
                {children}
            <Footer/>
        </>
    )
}
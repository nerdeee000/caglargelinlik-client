import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

export default function MainLayout({children}) {

    return (
        <div>
            <Banner/>
            <Navbar/>
            {children}
            
        </div>
    )
}

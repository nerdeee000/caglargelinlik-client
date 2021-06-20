import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

export default function MainLayout({children}) {
    return (
        <div>
            <Banner/>
            <Navbar/>
            {children}
        </div>
    )
}

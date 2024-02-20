import React from 'react'
import Navbar from '../Components/Navbar'
import ScrollTopButton from '../Components/ScrollTopButton'
import Topbar from '../Components/Topbar'

export default function Layout({ page }) {
    return (
        <div>
            <Topbar />
            <div className="m-3 mt-20 mb-20">
                {page}
            </div>
            <Navbar />
            <ScrollTopButton />
        </div>
    )
}

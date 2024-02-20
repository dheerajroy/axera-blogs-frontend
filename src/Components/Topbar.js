import React from 'react'
import Logo from './Logo'

export default function Topbar() {
    return (
        <div className='fixed top-3 left-1/2 -translate-x-1/2 bg-color2 text-white p-3 rounded-3xl shadow-md'>
            <Logo />
        </div>
    )
}

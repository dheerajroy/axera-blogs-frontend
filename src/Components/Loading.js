import React, { useEffect, useState } from 'react'
import { GrRefresh } from 'react-icons/gr'

export default function Loading() {
    const [empty, setEmpty] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setEmpty(true)
        }, 5000)
    }, [])

    return (
        <>
            <div className='w-full flex items-center flex-col mt-[20px] mb-[20px]'>
                {
                    empty ? '' : <div className='flex'>
                        <div style={{ animationDelay: '0.1s' }} className='bg-color2 w-3 h-3 m-1 rounded-full animate-bounce'></div>
                        <div style={{ animationDelay: '0.2s' }} className='bg-color1 w-3 h-3 m-1 rounded-full animate-bounce'></div>
                        <div style={{ animationDelay: '0.3s' }} className='bg-color5 w-3 h-3 m-1 rounded-full animate-bounce'></div>
                    </div>

                }
            </div>
        </>
    )
}

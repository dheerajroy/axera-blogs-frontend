import React, { useEffect } from 'react'
import Layout from './Layout'
import logo from '../logo.svg'
import { AiFillMail } from 'react-icons/ai'

export default function About() {
    useEffect(() => {
        document.title = 'Axera Blogs - About'
    }, [])
    return (
        <Layout page={
            <center>
                <img src={logo} alt="" width={250} className='m-[-50px]' />
                <div className='text-left w-fit'>
                    <h2>Axera Blogs provides (within our website):</h2>
                    <ul className='list-disc list-inside text-lg ml-5'>
                        <li>Ad-free experience</li>
                        <li>Privacy</li>
                        <li>Wide variety</li>
                        <li>No login/signup</li>
                        <li>Free content</li>
                    </ul>
                    <br />
                    <h2>Affiliate Mentions:</h2>
                    <p className='text-lg ml-5'>Place a request to <a href="mailto:contactaxera@gmail.com">contactaxera@gmail.com</a></p>
                    <br />
                    <h2>Our Founder:</h2>
                    <div className='ml-5'>
                        <h3 className='font-bold'>D Dheeraj Roy</h3>
                        <p className='text-lg'>Full-stack developer, digital marketer and an AI enthusiast.</p>
                        <a href="mailto:contactaxera@gmail.com" className='text-2xl'><p className='flex items-center'><AiFillMail />&nbsp;E-Mail</p></a>
                    </div>
                </div>
            </center>
        } />
    )
}

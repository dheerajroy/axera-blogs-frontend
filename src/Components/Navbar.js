import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { MdExplore } from 'react-icons/md'
import { BsFillInfoCircleFill } from 'react-icons/bs'

export default function Navbar() {
  const location = useLocation()
  
  function getColor(current) {
    if (location.pathname.slice(1, ) === current) {
      return '#2EC4B6'
    }
    else {
      return 'white'
    }
  }

  return (
    <nav className='fixed bottom-3 left-1/2 -translate-x-1/2 bg-color5 text-white p-3 rounded-3xl shadow-md'>
      <Link to='/'>
        <button style={{color: getColor('')}}><AiFillHome /></button>
      </Link>
      <Link to='/explore'>
        <button style={{color: getColor('explore')}}><MdExplore /></button>
      </Link>
      <Link to='/about'>
        <button style={{color: getColor('about')}}><BsFillInfoCircleFill /></button>
      </Link>
    </nav>
  )
}

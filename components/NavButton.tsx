import Link from 'next/link'
import React from 'react'

export const NavButton = ({ }) => {
  return (
    <Link 
      className='flex items-center bg-dark-blue py-[0.25rem] px-[2.5rem] rounded-[1rem]' 
        href="#">
          Login
    </Link>
  )
}

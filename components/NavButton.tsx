import Link from 'next/link'
import React from 'react'
import UserIcon from '@/public/user.svg'
import Image from 'next/image'

export const NavButton = ({ }) => {
  return (
    <Link 
      className='flex items-center justify-center gap-[4px] bg-dark-blue py-[0.25rem] px-[2.5rem] rounded-[1rem]' 
        href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          Login
    </Link>
  )
}

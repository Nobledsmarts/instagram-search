import React from 'react'
import Link from 'next/link'

export const Nav = () => {
  return (
    <nav className='flex justify-between py-[1.4rem] text-[1rem] leading-[2.5rem]'>
        <div>Logo</div>
        <div className='flex gap-[1rem]'>
            <Link href="#" className='flex items-center'>
                How it works
            </Link>
            <Link className='flex items-center bg-[#0D1426] py-[0.5rem] px-[2.5rem] rounded-[1rem]' href="#">
                Login
            </Link>
        </div>
    </nav>
  )
}

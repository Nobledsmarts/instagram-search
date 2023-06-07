import React from 'react'
import Link from 'next/link'
import { NavButton } from './NavButton'
import { NavItem } from './NavItem'
import NavLogo from './NavLogo'
// import 

export const Nav = () => {
  return (
    <nav className='flex justify-between py-[1.4rem] text-[1rem] leading-[2rem]'>
        <NavLogo />
        <div className='flex gap-[1rem]'>
            <NavItem />
            <NavButton />
        </div>
    </nav>
  )
}

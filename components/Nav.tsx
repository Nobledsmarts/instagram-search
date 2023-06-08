import React from 'react'
import Link from 'next/link'
import { NavButton } from './NavButton'
import { NavItem } from './NavItem'
import NavLogo from './NavLogo'
// import 

type NavProps = {
  showLogin : React.MouseEventHandler<HTMLAnchorElement>
}
export const Nav = (props : NavProps) => {
  const { showLogin } = props;
  return (
    <nav className='flex justify-between py-[1.4rem] text-[1rem] leading-[2rem]'>
        <NavLogo firstpart='Insta' secondpart='Search' />
        <div className='flex gap-[1rem]'>
            <NavItem />
            <NavButton showLogin={showLogin}/>
        </div>
    </nav>
  )
}

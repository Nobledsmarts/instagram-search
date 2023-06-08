import Link from 'next/link'
import React from 'react'
// import UserIcon from '@/public/user.svg'
import Image from 'next/image'
import UserIcon from './UserIcon'

type NavButtonProps = {
  showLogin : React.MouseEventHandler<HTMLAnchorElement>
}

export const NavButton = (props : NavButtonProps) => {
  const { showLogin } = props;
  return (
    <Link 
      onClick={showLogin}
      className='flex items-center justify-center gap-[4px] bg-dark-blue py-[0.25rem] px-[2.5rem] rounded-[1rem]' 
        href="#">
          <UserIcon size="18"/>
          Login
    </Link>
  )
}

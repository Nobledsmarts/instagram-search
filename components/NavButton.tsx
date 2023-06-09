import Link from 'next/link'
import React, { useContext, useEffect } from 'react'
// import UserIcon from '@/public/user.svg'
import Image from 'next/image'
import UserIcon from './UserIcon'
import { SignInModalContext } from './SignInModal'
import { UseModal } from './context/ModalContext'

type NavButtonProps = {
  showLogin : React.MouseEventHandler<HTMLAnchorElement>
}

export const NavButton = (props : NavButtonProps) => {
  const { showLogin } = props;
  const { state, dispatch } = UseModal();

  // useEffect(() => {
  //   // console.log('stat');
  // }, [state]);
  
  return (
    <Link 
      onClick={() => dispatch({ type : 'showLogin', payload : true }) }
      className='flex items-center justify-center gap-[4px] bg-dark-blue py-[0.25rem] px-[2.5rem] rounded-[1rem]' 
        href="#">
          <UserIcon size="18"/>
          Login
    </Link>
  )
}

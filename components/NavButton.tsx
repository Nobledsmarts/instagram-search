import Link from 'next/link'
import React from 'react'
import UserIcon from './UserIcon'
import { useSigninModal } from './store/UseSigninModal'


export const NavButton = () => {
  const signInModal = useSigninModal((state) => state);
  return (
    <Link 
      onClick={() => signInModal.show(true) }
      className='flex items-center justify-center gap-[4px] bg-dark-blue py-[0.25rem] px-[2.5rem] rounded-[1rem]' 
        href="#">
          <UserIcon size="18"/>
          Login
    </Link>
  )
}

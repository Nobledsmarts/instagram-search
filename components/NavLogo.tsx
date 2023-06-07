import Link from 'next/link';
import React from 'react'

type NavLogoProps = {
    firstpart? : string,
    secondpart? : string,
    className? : string
}

const NavLogo = (props : NavLogoProps) => {
    const {firstpart, secondpart, className} = props;
    return (
      <Link href={''} className={`flex items-center font-bold justify-center ${className}`}>
          <span className='text-secondary'>
              {firstpart}
          </span>
          <span className='text-sky-50'>
              {secondpart}
          </span>
      </Link>
    )
}

export default NavLogo
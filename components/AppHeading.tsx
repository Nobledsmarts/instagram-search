import React from 'react'
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ weight : "700", subsets : ['latin'] })

type AppHeadingProps = {
    firstpart? : string,
    secondpart? : string,
}

const AppHeading = (props : AppHeadingProps) => {
    const {firstpart, secondpart} = props;
    return (
        <div className={`${montserrat.className} p-2 leading-[2rem] text-[3.5rem] flex justify-center items-center`}>
            <span className='text-secondary'>
                {firstpart}
            </span>
            <span className='text-sky-50'>
                {secondpart}
            </span>
        </div>
    )
}

export default AppHeading
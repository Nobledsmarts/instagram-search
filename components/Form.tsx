import React from 'react'
import { Montserrat } from 'next/font/google';

type FormProps = {
  title: string,
  children : React.ReactNode
  modalMessage? : React.ReactElement
}

const montserrat = Montserrat({ weight : "200", subsets : ['latin']});

export const Form = (props : FormProps) => {
  const { children, title, modalMessage } = props;

  return (
    <div className='rounded-[1rem] bg-dark-blue max-w-[766px] min-w-[400px] p-[1.25rem] flex flex-col justify-center items-center gap-4'>
      <div className={`flex justify-center text-[#B4C5F0] ${montserrat.className}`}>
        {title}
      </div>
      { modalMessage && modalMessage }
      <div className='flex flex-col gap-4 w-full'>
        { children }
      </div>
    </div>
  )
}

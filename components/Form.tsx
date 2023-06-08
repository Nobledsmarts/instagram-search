import React from 'react'
import { Montserrat } from 'next/font/google';
import CancelIcon from './CancelIcon';

type FormProps = {
  title: string,
  children : React.ReactNode
  modalMessage? : React.ReactElement,
  showLogin : any
}

const montserrat = Montserrat({ weight : "200", subsets : ['latin']});

export const Form = (props : FormProps) => {
  const { children, title, modalMessage, showLogin } = props;

  return (
    <div className='relative rounded-[1rem] bg-dark-blue max-w-[766px] min-w-[400px] p-[1.25rem] flex flex-col justify-center items-center gap-4'>
      <div onClick={() => showLogin(false)} className='border-solid overflow-hidden border-[2.5px] border-[#596688] absolute flex items-center justify-center w-7 h-7 hover:cursor-pointer rounded-full -right-2 -top-2 bg-secondary'>
        <CancelIcon size='16' className='bg-secondary'/>
      </div>
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

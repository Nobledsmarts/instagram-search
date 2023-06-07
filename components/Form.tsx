import React from 'react'

type FormProps = {
  title: string,
  children : React.ReactNode
}


export const Form = (props : FormProps) => {
  const { children, title } = props;

  return (
    <div className='bg-darkblue max-w-[600px]'>
      <div>
        {title}
      </div>
      <div className='flex flex-col gap-4'>
        { children }
      </div>
    </div>
  )
}

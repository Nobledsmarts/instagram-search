import React from 'react'

type FormInputProps = {
  name : string,
  onInput : React.FormEventHandler<HTMLInputElement>,
  placeholder : string,
  value : string,
  type : string,
}

export const FormInput = (props : FormInputProps) => {
  const { name, type = 'text', onInput, placeholder, value } = props;
  return (
    <div className='
        border-solid border-[1px] border-lightblue outline outline-offset-4 
        outline-1 outline-dark-blue  relative flex bg-dark-blue 
        p-2 justify-center items-center rounded-[2rem]
    '>
      {
        type == "password" ? 
      }
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
      <div className='flex bg-dark-blue px-1 justify-center align-center'>
        <input className='bg-transparent outline-none border-none placeholder:text-lighter-blue placeholder:text-[1rem]' type="text" name={name} placeholder={placeholder} value={value} onInput={onInput} />
      </div>
    </div>
  )
}

export default FormInput
import React from 'react'

type FormInputProps = {
  name : string,
  onInput : React.FormEventHandler<HTMLInputElement>,
  placeholder : string,
  value : string,
  type : string,
  leftIcon? : React.ReactNode,
  rightIcon? : React.ReactNode,
}

export const FormInput = (props : FormInputProps) => {
  const { name, type = 'text', onInput, placeholder, value, rightIcon, leftIcon } = props;
  return (
    <div className='
        border-solid border-[0.5px] border-[#596688] outline outline-offset-4 
        outline- outline-dark-blue  relative flex bg-dark-blue 
        p-2 justify-center items-center rounded-[1rem]
    '>
      { 
      leftIcon &&
      <div className='h-full flex bg-dark-blue px-1 justify-center items-center hover:cursor-pointer'>
        { leftIcon }
      </div>
      }
     
      <div className='flex bg-dark-blue basis-full px-1 justify-center align-center'>
        <input className='bg-transparent w-full outline-none border-none placeholder:text-[#94A2C8] placeholder:text-[1rem]' type={type} name={name} placeholder={placeholder} value={value} onInput={onInput} />
      </div>
      { 
        rightIcon  &&
        <div className='flex bg-dark-blue px-1 justify-center align-center hover:cursor-pointer'>
          { rightIcon }
        </div>
       }
    </div>
  )
}

export default FormInput
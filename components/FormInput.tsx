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
    <div className='flex bg-dark-blue px-1 justify-center align-center rounded-[2rem] border-lightblue'>
      <input className='bg-transparent outline-none border-none placeholder:text-lighter-blue placeholder:text-[1rem]' type={type} placeholder={placeholder} value={value} onInput={onInput} />
    </div>
  )
}

export default FormInput
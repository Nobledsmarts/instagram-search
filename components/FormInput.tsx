import React from 'react'

export const FormInput = () => {
  return (
    <div className='flex bg-dark-blue px-1 justify-center align-center'>
      <input className='bg-transparent outline-none border-none placeholder:text-lighter-blue placeholder:text-[1rem]' type="text" placeholder={placeholder} value={value} onInput={onInput} />
    </div>
  )
}

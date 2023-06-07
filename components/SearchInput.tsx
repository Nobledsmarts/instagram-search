import React from 'react'

type SearchInputProps = {
  placeholder : string,
  value : string,
  onInput : React.FormEventHandler<HTMLInputElement>
}

export const SearchInput = (props : SearchInputProps) => {
  const { placeholder, value, onInput } = props;
  return (
    <div className='
        border-solid border-[1px] border-lightblue outline outline-offset-4 
        outline-1 outline-dark-blue  relative flex bg-dark-blue 
        p-2 justify-center items-center rounded-[2rem]
    '>
      <div className='h-full flex bg-dark-blue px-1 justify-center items-center hover:cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-sliders">
          <line x1="4" y1="21" x2="4" y2="14"></line>
          <line x1="4" y1="10" x2="4" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12" y2="3"></line>
          <line x1="20" y1="21" x2="20" y2="16"></line>
          <line x1="20" y1="12" x2="20" y2="3"></line>
          <line x1="1" y1="14" x2="7" y2="14"></line>
          <line x1="9" y1="8" x2="15" y2="8"></line>
          <line x1="17" y1="16" x2="23" y2="16"></line>
        </svg>
      </div>
      <div className='flex bg-dark-blue px-1 justify-center align-center'>
        <input className='bg-transparent outline-none border-none placeholder:text-lighter-blue placeholder:text-[1rem]' type="text" placeholder={placeholder} value={value} onInput={onInput} />
      </div>
      <div className='flex bg-dark-blue px-1 justify-center align-center hover:cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
    </div>
  )
}

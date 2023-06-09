import React from 'react'
import FilterIcon from './FilterIcon';
import SearchIcon from './SearchIcon';

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
        <FilterIcon size='18'/>
      </div>
      <div className='flex bg-dark-blue px-1 justify-center align-center'>
        <input className='bg-transparent outline-none border-none placeholder:text-lighter-blue placeholder:text-[1rem]' type="text" placeholder={placeholder} value={value} onInput={onInput} />
      </div>
      <div className='flex bg-dark-blue px-1 justify-center align-center hover:cursor-pointer'>
        <SearchIcon size='18'/>
      </div>
    </div>
  )
}

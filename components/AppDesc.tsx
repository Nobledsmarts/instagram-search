import React from 'react'

const AppDesc = (props : {content : string}) => {
    const { content } = props;
  return (
    <div className='leading-[2rem] text-[1.25rem] p-2 text-center max-w-[600px] mx-auto'>
        {content}
    </div>
  )
}

export default AppDesc
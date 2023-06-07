import React from 'react'

type FormProps = {
  title: string,
  children : React.ReactNode
}


export const Form = (props : FormProps) => {
  const { children, title } = props;

  return (
    <div>
      <div>
        {title}
      </div>
      <div>
        { children }
      </div>
    </div>
  )
}

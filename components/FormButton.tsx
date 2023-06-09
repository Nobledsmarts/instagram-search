import React from 'react'

type FormButtonProps = {
    text : string,
}


const FormButton = (props : FormButtonProps) => {
    const { text } = props;
    return (
        <button type='submit' className='outline-none border-none rounded-[1rem] bg-blue-color hover:bg-blue-hover p-2'>
            {text}
        </button>
    )
}

export default FormButton
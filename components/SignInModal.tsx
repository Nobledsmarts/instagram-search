import React, { useState } from 'react'
import Modal from './Modal'
import FormInput from './FormInput'

export const SignInModal = () => {
  const [field, setField] = useState({
    username : "",
    password : ""
  });

  const changeInputValue = (e : any) => {
    setField({ ...field, [e.target.name] : e.target.value });
  }

  return (
    <Modal active={false} title='Login'>
        <FormInput 
          onInput={changeInputValue} 
          name='username' type='text' placeholder='Enter Username' value=''/>
        <FormInput onInput={changeInputValue} name='password' type='password' placeholder='Enter Password' value=''/>
    </Modal>
  )
}

// export default SignInModal
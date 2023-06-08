import React, { useState } from 'react'
import Modal from './Modal'
import FormInput from './FormInput'
import UserIcon from './UserIcon';
import LockIcon from './LockIcon';

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
          leftIcon={<UserIcon size='16'/>}
          onInput={changeInputValue} 
          name='username' 
          type='text' 
          placeholder='Enter Username' 
          value=''
        />
        <FormInput 
          leftIcon={<LockIcon size='16'/>}
          onInput={changeInputValue} 
          name='password' 
          type='password' 
          placeholder='Enter Password' 
          value=''
        />
    </Modal>
  )
}

// export default SignInModal
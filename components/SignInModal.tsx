import React, { useState } from 'react'
import Modal from './Modal'
import FormInput from './FormInput'
import UserIcon from './UserIcon';
import LockIcon from './LockIcon';
import FormButton from './FormButton';

export const SignInModal = () => {
  const [field, setField] = useState({
    username : "",
    password : ""
  });

  

  const changeInputValue = (e : any) => {
    setField({ ...field, [e.target.name] : e.target.value });
  }


  const ModalMessage = () => <div className='alert alert-warnin bg-inherit text-center flex justify-center border-none text-[0.8rem] rounded-none p-2'>
    Enter your Instagram details to connect your account
  </div>

  return (
    <Modal active={false} title='Login' modalMessage={<ModalMessage />}>
        <FormInput
          leftIcon={<UserIcon size='16' color='#94A2C8'/>}
          onInput={changeInputValue} 
          name='username' 
          type='text' 
          placeholder='Enter Username' 
          value={field.username}
        />
        <FormInput 
          leftIcon={<LockIcon size='16' color='#94A2C8'/>}
          onInput={changeInputValue} 
          name='password' 
          type='password' 
          placeholder='Enter Password' 
          value={field.password}
        />
        <FormButton text="Submit"/>
    </Modal>
  )
}

// export default SignInModal
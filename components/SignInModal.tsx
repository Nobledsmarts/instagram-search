import React, { useEffect } from 'react'
import Modal from './Modal'
import FormInput from './FormInput'
import UserIcon from './UserIcon';
import LockIcon from './LockIcon';
import FormButton from './FormButton';

import { useSigninModal } from '../store/UseSigninModal';


export const SignInModal = () => {
  const signInModal = useSigninModal((state) => state);


  const ModalMessage = () => (
    <div className='alert alert-warnin bg-inherit text-center flex justify-center border-none text-[0.8rem] rounded-none p-2'>
      Enter your Instagram details to connect your account
    </div>
  )
  
  const onSubmit = () => {

  }

  const changeInputValue = (e : any) => {
    signInModal.setField(e);
  }

  useEffect(() => {
    signInModal.setModalMessage(<ModalMessage />);
  },[])
  
  return (
      <Modal modal={signInModal} onSubmit={onSubmit} active={signInModal.active}>
          <FormInput
            leftIcon={<UserIcon size='16' color='#94A2C8'/>}
            onInput={changeInputValue} 
            name='username' 
            type='text' 
            placeholder='Enter Username' 
            value={signInModal?.username}
          />
          <FormInput 
            leftIcon={<LockIcon size='16' color='#94A2C8'/>}
            onInput={changeInputValue} 
            name='password' 
            type='password' 
            placeholder='Enter Password' 
            value={signInModal?.password}
          />
          <FormButton  text="Submit"/>
      </Modal>
  )
}

// export default SignInModal
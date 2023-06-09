import React, { useEffect } from 'react'
import Modal from './Modal'
import FormInput from './FormInput'
import UserIcon from './UserIcon';
import LockIcon from './LockIcon';
import FormButton from './FormButton';

import { useSigninModal } from './store/UseSigninModal';


export const SignInModal = () => {
  const signInModal = useSigninModal((state) => state);

  
  const ModalMessage = () => <div className='alert alert-warnin bg-inherit text-center flex justify-center border-none text-[0.8rem] rounded-none p-2'>
    Enter your Instagram details to connect your account
  </div>
  

  const changeInputValue = (e : any) => {
    signInModal.changeI({ action : [e.target.name], payload : e.target.value });
    // setField({ ...field, [e.target.name] : e.target.value });
  }
  useEffect(() => {
    dispatch({ action : 'modalMessage', payload : <ModalMessage /> });
  },[])

useEffect(() => {
  console.log(console.log(state));
}, [state])
  

  return (
      <Modal>
          <FormInput
            leftIcon={<UserIcon size='16' color='#94A2C8'/>}
            onInput={changeInputValue} 
            name='username' 
            type='text' 
            placeholder='Enter Username' 
            value={state?.username}
          />
          <FormInput 
            leftIcon={<LockIcon size='16' color='#94A2C8'/>}
            onInput={changeInputValue} 
            name='password' 
            type='password' 
            placeholder='Enter Password' 
            value={state?.password}
          />
          <FormButton text="Submit"/>
      </Modal>
  )
}

// export default SignInModal
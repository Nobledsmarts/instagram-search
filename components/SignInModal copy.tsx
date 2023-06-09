import React, { createContext, useState, useContext, useReducer } from 'react'
import Modal from './Modal'
import FormInput from './FormInput'
import UserIcon from './UserIcon';
import LockIcon from './LockIcon';
import FormButton from './FormButton';

type SignInModalProps = {
  active : boolean,
  showLogin : React.MouseEventHandler<HTMLAnchorElement>
}

interface ModalStateType {
  username : any,
  password : any,
  active : any,
  showLogin : any,
  title : any,
  changeModalState : React.Dispatch<any>,
}

const modalState:ModalStateType = {
  username : "",
  password : "",
  active : false,
  showLogin : null,
  title : "",
  changeModalState : () => null,
}


const reducer = (state : any, action:any) => {
  switch(action){
    case 'password' :
      return {
        ...state,
        password : state.payload
      }
    case 'username' :
      return {
        ...state,
        username : state.payload
      }

  }
};

// interface IcontextProps {
//   state : ModalStateInt,
//   dispatch : ({type}:{type:string}) => void,
// }

const modalContext:ModalStateType = {
  state : modalState,
};

export const SignInModalContext = createContext<ModalStateType>({
  state : modalState
});

export const SignInModal = (props : SignInModalProps) => {
  const { active, showLogin } = props;
  const [state, changeModalState] = useReducer(reducer, modalState);
  // const [field, setField] = useState({
  //   username : "",
  //   password : ""
  // });
  // const [modalProps, setModalProps] = useState();

  // const SignInModalProvider = useContext(SignInModalContext);
  
  // const changeInputValue = (e : any) => {
  //   setField({ ...field, [e.target.name] : e.target.value });
  // }


  const ModalMessage = () => <div className='alert alert-warnin bg-inherit text-center flex justify-center border-none text-[0.8rem] rounded-none p-2'>
    Enter your Instagram details to connect your account
  </div>

  return (
    <SignInModalContext.Provider value={state, changeModalState}>
      <Modal active={state.active} title='Login' showLogin={state.showLogin} modalMessage={<ModalMessage />}>
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
    </SignInModalContext.Provider>
  )
}

// export default SignInModal
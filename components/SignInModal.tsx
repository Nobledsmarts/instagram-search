import React, { createContext, useState, useContext, useReducer, useEffect } from 'react'
import Modal from './Modal'
import FormInput from './FormInput'
import UserIcon from './UserIcon';
import LockIcon from './LockIcon';
import FormButton from './FormButton';
import { UseModal } from './context/ModalContext';

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
  modalMessage: React.ReactNode,
  // dispatch : React.Dispatch<any>,
}
interface ModalStateTypeContext {
  state : ModalStateType,
  dispatch : React.Dispatch<any>
}
const modalState:ModalStateType = {
  username : "",
  password : "",
  active : false,
  showLogin : function(v:boolean) {
     this.active = v ;
    //  console.log('hhh');
  },
  title : "Log In",
  modalMessage: null,
  // dispatch : () => null,
}


const reducer = (state : any, action:any) => {
  switch(action.type){
    case 'password' :
      return {
        ...state,
        password : action.payload
      }
    case 'username' :
      return {
        ...state,
        username : action.payload
      }
    case 'modalMessage' :
      return {
        ...state,
        modalMessage : action.payload
      }
    case 'showLogin' :
      alert('working');
      return {
        ...state,
        showLogin : action.payload
      }
    default :
    return state;

  }
};

// interface IcontextProps {
//   state : ModalStateInt,
//   dispatch : ({type}:{type:string}) => void,
// }

export const SignInModalContext = createContext<ModalStateTypeContext>({
  state : modalState,
  dispatch : ({type}:{type:string}) => {
    alert('wdym')
  }
});

export const SignInModal = (props : SignInModalProps) => {
  const { active, showLogin } = props;
  const { state, dispatch } = UseModal();
  const ModalMessage = () => <div className='alert alert-warnin bg-inherit text-center flex justify-center border-none text-[0.8rem] rounded-none p-2'>
    Enter your Instagram details to connect your account
  </div>
  // const [field, setField] = useState({
  //   username : "",
  //   password : ""
  // });
  // const [modalProps, setModalProps] = useState();

  // const SignInModalProvider = useContext(SignInModalContext);


  const changeInputValue = (e : any) => {
    dispatch({ action : [e.target.name], payload : e.target.value });
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
import React, { createContext, useState, useContext, useReducer, useEffect } from 'react'

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
        let ret = {
            ...state,
            active : action.payload
          };
          console.log(ret);
      return ret;
    default :
    return state;

  }
};


export const SignInModalContext = createContext<ModalStateTypeContext>({
  state : modalState,
  dispatch : ({type}:{type:string}) => {
    alert('wdym')
  }
});

export const UseModal = () => {
//   const { active, showLogin } = props;
  const [state, dispatch] = useReducer(reducer, modalState);
  const ModalMessage = () => <div className='alert alert-warnin bg-inherit text-center flex justify-center border-none text-[0.8rem] rounded-none p-2'>
    Enter your Instagram details to connect your account
  </div>
  
  useEffect(() => {
    // console.log('changed from Modal context');
    // console.log(state);
  }, [state])
//   const changeInputValue = (e : any) => {
//     dispatch({ action : [e.target.name], payload : e.target.value });
//     // setField({ ...field, [e.target.name] : e.target.value });
//   }
//   useEffect(() => {
//     dispatch({ action : 'modalMessage', payload : <ModalMessage /> });
//   },[])


  

  return {state, dispatch}
}

// export default SignInModal
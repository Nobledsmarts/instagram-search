import React, { createContext, useContext } from 'react'
import { Montserrat } from 'next/font/google';
import CancelIcon from './CancelIcon';
import { SignInModalContext } from './SignInModal';
import { UseModal } from './context/ModalContext';

type FormProps = {
  children : React.ReactNode
}

const montserrat = Montserrat({ weight : "200", subsets : ['latin']});

export const Form = (props : FormProps) => {
  const { children } = props;
  const { state, dispatch } = UseModal();
  // const [modal, setModal] = useState({

  // });
  // const FormProvider = useContext(FormContext);

  return (
    // <FormContext.Provider value={FormContext}>
      <div className='relative rounded-[1rem] bg-dark-blue max-w-[766px] min-w-[400px] p-[1.25rem] flex flex-col justify-center items-center gap-4'>
        <div onClick={() => dispatch({ type : 'showLogin', payload : false}) } className='border-solid overflow-hidden border-[2.5px] border-[#596688] absolute flex items-center justify-center w-7 h-7 hover:cursor-pointer rounded-full -right-2 -top-2 bg-secondary'>
          <CancelIcon size='16' className='bg-secondary'/>
        </div>
        <div className={`flex justify-center text-[#B4C5F0] ${montserrat.className}`}>
          {state.title}
        </div>
        { state.modalMessage && state.modalMessage }
        <div className='flex flex-col gap-4 w-full'>
          { children }
        </div>
      </div>
    // </FormContext.Provider>
  )
}

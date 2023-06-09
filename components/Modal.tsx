import React, { useContext, useEffect } from 'react'

import { Form } from './Form';
import { SignInModalContext } from './SignInModal';
import { UseModal } from './context/ModalContext';


type ModalProps = {
    children : React.ReactNode,
}

const Modal = (props : ModalProps) => {
    const { children } = props;
    const { state, dispatch } = UseModal();

    useEffect(() => {
        console.log('changed 0');
        console.log(state);
    }, [state])
    // console.log(state);

    return (
        <>
            { state.active && 
                <div className='h-screen w-screen flex justify-center items-center absolute bg-gray-950/50 m-0 left-0 right-0 top-0 bottom-0'>
                    <Form>
                        { children }
                    </Form>
                </div>
            }
        </>
    )
}

export default Modal
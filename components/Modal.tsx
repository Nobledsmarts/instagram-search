import React from 'react'
import { Form } from './Form';
import { useSigninModal } from './store/UseSigninModal';


type ModalProps = {
    children : React.ReactNode,
}

const Modal = (props : ModalProps) => {
    const { children } = props;
    const signInModal = useSigninModal((state) => state);
    return (
        <>
            { signInModal.active && 
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
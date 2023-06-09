import React from 'react'
import { Form } from './Form';
import { useSigninModal } from '../store/UseSigninModal';


type ModalProps = {
    children : React.ReactNode,
    modal : any,
    onSubmit : React.FormEventHandler<HTMLFormElement>
}

const Modal = (props : ModalProps) => {
    const { children, onSubmit, modal } = props;
    return (
        <>
            { modal.active && 
                <div className='h-screen w-screen flex justify-center items-center absolute bg-gray-950/50 m-0 left-0 right-0 top-0 bottom-0'>
                    <Form modal={modal} onSubmit={onSubmit}>
                        { children }
                    </Form>
                </div>
            }
        </>
    )
}

export default Modal
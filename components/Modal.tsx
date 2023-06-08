import React from 'react'

import { Form } from './Form';

type ModalProps = {
    active : boolean,
    children : React.ReactNode,
    title : string,
    modalMessage? : React.ReactElement,
    showLogin : React.MouseEventHandler<HTMLAnchorElement>
}

const Modal = (props : ModalProps) => {
    const { active, children, title, modalMessage, showLogin } = props;
    return (
        <>
            { active && 
                <div className='h-screen w-screen flex justify-center items-center absolute bg-gray-950/50 m-0 left-0 right-0 top-0 bottom-0'>
                    <Form title={title} modalMessage={modalMessage} showLogin={showLogin}>
                        { children }
                    </Form>
                </div>
            }
        </>
    )
}

export default Modal
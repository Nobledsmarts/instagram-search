import React from 'react'

import { Form } from './Form';

type ModalProps = {
    active : boolean,
    children : React.ReactNode,
    title : string,
}

const Modal = (props : ModalProps) => {
    const { active, children, title } = props;
    return (
        <div className='h-screen w-screen absolute bg-gray-950 m-0 left-0 right-0 top-0 bottom-0'>
            <Form title=''>
                { children }
            </Form>
        </div>
    )
}

export default Modal
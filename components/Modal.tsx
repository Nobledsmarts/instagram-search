import React from 'react'

import { Form } from './Form';

type ModalProps = {
    active : boolean,
    children : React.ReactNode
}

const Modal = (props : ModalProps) => {
    const { active, children } = props;
    return (
        <div  >
            <Form>
                { children }
            </Form>
        </div>
    )
}

export default Modal
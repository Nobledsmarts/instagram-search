import { useSigninModal } from '@/store/UseSigninModal'
import React from 'react'

const handleLogin = () => {
    const state = useSigninModal();
    return (
        <div>handleLogin</div>
    )
}

export default handleLogin
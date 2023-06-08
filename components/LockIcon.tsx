import React from 'react'
import IconProps from '@/props/IconProps';


const LockIcon = (props : IconProps) => {
    const { size = '16', color = 'currentColor' } = props;
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={size} height={size}
            viewBox="0 0 24 24" 
            fill="none" 
            stroke={color} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="feather feather-lock">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
    )
}

export default LockIcon
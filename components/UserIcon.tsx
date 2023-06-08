import React from 'react'
import IconProps from '@/props/IconProps';

const UserIcon = (props : IconProps) => {
    const { size = '16', color = 'currentColor' } = props;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" 
            width={size} height={size} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke={color} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="feather feather-user">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
        </svg>
    )
}

export default UserIcon
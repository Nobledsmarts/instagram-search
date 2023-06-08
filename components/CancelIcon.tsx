import React from 'react'
import IconProps from '@/props/IconProps'

const CancelIcon = (props : IconProps) => {
    const { size = 16,  color = 'currentColor', className} = props;
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={size} 
            height={size} 
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    )
}

export default CancelIcon
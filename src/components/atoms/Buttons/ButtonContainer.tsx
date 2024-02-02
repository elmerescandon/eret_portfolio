"use client";
import React from 'react'

type ButtonContainerProps = {
    children: React.ReactNode
    onClick: () => void
}

const ButtonContainer = ({ children, onClick }: ButtonContainerProps) => {
    return (
        <button onClick={onClick}>{children}</button>
    )
}

export default ButtonContainer
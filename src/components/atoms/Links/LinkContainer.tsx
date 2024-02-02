import Link from 'next/link'
import React from 'react'

type LinkContainerProps = {
    children: React.ReactNode
    to: string
}

const LinkContainer = ({ children, to }: LinkContainerProps) => {
    return (
        <Link href={to}>{children}</Link>
    )
}

export default LinkContainer
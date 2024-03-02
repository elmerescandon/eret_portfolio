import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link'
import React from 'react'

type ExternalLinkProps = {
    href: string
    title: string;
}

const ExternalLink = ({ href, title }: ExternalLinkProps) => {
    return (
        <Link href={href} className='flex items-center gap-4'>
            <p className='font-semibold text-base'>{title}</p>
            <ArrowUpRightIcon height={24} width={24} />
        </Link>
    )
}

export default ExternalLink
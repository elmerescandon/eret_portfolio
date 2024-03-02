import { imageCallToActions, imageTechnologies } from '@/utils/constants';
import Image from 'next/image';

interface CTAIconsProps {
    callToAction: string;
}

const CTAIcons = ({ callToAction }: CTAIconsProps) => {
    return (
        <Image
            src={imageCallToActions[callToAction as keyof typeof imageCallToActions]}
            className='w-8 h-8'
            alt={`${callToAction}-icon`}
            width={30}
            height={30}
            loading="lazy"
        />
    );
};

export default CTAIcons;
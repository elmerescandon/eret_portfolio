import { imageTechnologies } from '@/utils/constants';
import Image from 'next/image';

type TechnologyIconsProps = {
  technology: string;
}

const TechnologyIcons = ({ technology }: TechnologyIconsProps) => {
  return (
    <Image
      src={imageTechnologies[technology as keyof typeof imageTechnologies]}
      className='w-8 h-8'
      alt={`${technology}-icon`}
      width={30}
      height={30}
      loading="lazy"
    />
  );
};

export default TechnologyIcons;
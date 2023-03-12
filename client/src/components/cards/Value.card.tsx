import { FC } from 'react';
import Text from '../Text';
import Image from '@/components/Image';
import { StaticImageData } from 'next/image';
interface ValueCard {
  title: string;
  description: string;
  imagePosition: 'left' | 'right';
  imageSrc: StaticImageData;
}

const ValueCard: FC<ValueCard> = ({ title, description, imagePosition, imageSrc }) => {
  return (
    <div className={`flex gap-10 items-center ${imagePosition === 'left' ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className="flex flex-col gap-4 ">
        <Text text={title} className={'text-white font-medium text-3xl pb-2'}></Text>
        <div className="h-[0.5px] bg-[#FCF9F9]"></div>
        <Text text={description} className={'text-white font-light text-lg pb-2'}></Text>
      </div>
      <div className="flex">
        <Image src={imageSrc} alt={'value'} width={293} height={386}></Image>
      </div>
    </div>
  );
};

export default ValueCard;

import { FC } from 'react';
import Text from '../Text';
import value from 'public/assets/images/value.png';
import value2 from 'public/assets/images/value2.png';
import Image from '@/components/Image';
interface ValueCard {
  title: string;
  description: string;
  imagePosition: 'left' | 'right';
}

const ValueCard: FC<ValueCard> = ({ title, description, imagePosition }) => {
  return (
    <div
      className={`flex gap-10 items-center ${
        imagePosition === 'left' ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      <div className="flex flex-col gap-4">
        <Text
          text={title}
          className={'text-white font-medium text-3xl pb-2'}
        ></Text>
        <div className="h-[0.5px] bg-[#FCF9F9]"></div>
        <Text
          text={description}
          className={'text-white font-light text-lg pb-2'}
        ></Text>
      </div>
      <div className="flex">
        <Image src={value} alt={'value'} width={293} height={386}></Image>
      </div>
    </div>
  );
};

export default ValueCard;

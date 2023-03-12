import { StaticImageData } from 'next/image';
import { FC } from 'react';
import Image from '../Image';
import Text from '../Text';
import arrow from 'public/assets/arrow.svg';
interface IServicesCard {
  title: string;
  imageUrl: StaticImageData;
  description: string;
  routingUrl: string;
}

const ServicesCard: FC<IServicesCard> = ({ title, imageUrl, description, routingUrl }) => {
  return (
    <div className="flex flex-col px-8 py-16 bg-gray-100">
      <Text text={title} className="text-2xl mb-10 font-medium"></Text>
      <Image src={imageUrl} alt={title} width={131} height={152} className="mb-10"></Image>
      <Text text={description} className="text-large mb-7 font-normal"></Text>
      <Text text="View More" className="text-lg cursor-pointer text-textLight"></Text>
      <Image src={arrow} width={230} height={28} alt={'arrow'}></Image>
    </div>
  );
};

export default ServicesCard;

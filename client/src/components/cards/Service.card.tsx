import { FC } from 'react';
import Image from '../Image';
import Text from '../Text';

interface IServicesCard {
  title: string;
  imageUrl: string;
  description: string;
  routingUrl: string;
}

const ServicesCard: FC<IServicesCard> = ({
  title,
  imageUrl,
  description,
  routingUrl,
}) => {
  return (
    <div className="flex flex-col p-8 bg-blue-gray-500">
      <Text text={title} className="text-2xl"></Text>
      <Image src={imageUrl} alt={title} width={131} height={152}></Image>
      <Text text={description} className="text-large"></Text>
    </div>
  );
};

export default ServicesCard;

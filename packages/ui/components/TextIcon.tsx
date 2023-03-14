import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import { isConstTypeReference } from 'typescript';

interface ITextIcon {
  text: string;
  icon: StaticImageData;
  className: string;
}

const TextIcon: FC<ITextIcon> = ({ text, icon, className }) => {
  return (
    <div className="flex gap-3 items-center">
      <Image src={icon} alt={text}></Image>
      <span className={className}>{text}</span>
    </div>
  );
};

export default TextIcon;

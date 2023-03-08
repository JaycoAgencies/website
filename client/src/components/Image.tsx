import NextImage from 'next/image';
import { FC } from 'react';

interface IImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Image: FC<IImage> = ({ src, alt, width, height }) => {
  return (
    <NextImage src={src} alt={alt} width={width} height={height}></NextImage>
  );
};

export default Image;

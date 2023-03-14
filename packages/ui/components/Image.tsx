import NextImage, { StaticImageData } from 'next/image';
import { FC } from 'react';

interface IImage {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const Image: FC<IImage> = ({ src, alt, width, height , className }) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    ></NextImage>
  );
};

export default Image;

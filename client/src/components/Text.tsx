import { Typography, TypographyProps } from '@material-tailwind/react';
import { variant } from '@material-tailwind/react/types/components/typography';
import { FC } from 'react';

interface IText {
  text: string;
  className?: string;
}

const Text: FC<IText> = ({ text, className }) => {
  return <Typography className={className}>{text}</Typography>;
};

export default Text;

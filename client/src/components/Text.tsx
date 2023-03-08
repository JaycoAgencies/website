import { Typography, TypographyProps } from '@material-tailwind/react';
import { variant } from '@material-tailwind/react/types/components/typography';
import { FC } from 'react';

interface IText {
  text: string;
  variant: variant;
  className?: string;
}

const Text: FC<IText> = ({ text, variant, className }) => {
  return (
    <Typography variant={variant} className={className}>
      {text}
    </Typography>
  );
};

export default Text;

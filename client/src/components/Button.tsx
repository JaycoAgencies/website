import {
  Button as MaterialButton,
  ButtonProps,
} from '@material-tailwind/react';
import { FC } from 'react';

interface IButton extends ButtonProps {}

const Button: FC<IButton> = ({ onClick, className, color, title }) => {
  return (
    <MaterialButton onClick={onClick} className={className} color={color}>
      {title}
    </MaterialButton>
  );
};

export default Button;

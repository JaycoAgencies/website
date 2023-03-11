import {
  Button as MaterialButton,
  ButtonProps,
} from '@material-tailwind/react';
import { FC } from 'react';

interface IButton {
  title: string;
  className: string;
  onClick: any;
}

const Button: FC<IButton> = ({ onClick, className, title }) => {
  return (
    <MaterialButton onClick={onClick} className={className}>
      {title}
    </MaterialButton>
  );
};

export default Button;

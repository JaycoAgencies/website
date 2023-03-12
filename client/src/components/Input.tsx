import { Input as MaterialInput } from '@material-tailwind/react';
import { FC } from 'react';

interface IInput {
  label: string;
  className?: string;
  isRequired?: boolean;
}

const Input: FC<IInput> = ({ label, className = 'rounded-none focus:rounded-none active:rounded-none', isRequired = false }) => {
  return (
    <div className="mb-7">
      <MaterialInput variant={`outlined`} label={`${label}${isRequired ? '*' : ''}`} size={'lg'} className={className}></MaterialInput>
    </div>
  );
};

export default Input;

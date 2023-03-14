import { Textarea as MaterialTextArea } from '@material-tailwind/react';
import { FC } from 'react';

interface ITextArea {
    title: string;
    className?: string;

}

const TextArea:FC<ITextArea> = ({title,className = 'rounded-none'}) => {
  return <MaterialTextArea className={className} label={title}></MaterialTextArea>;
};

export default TextArea;

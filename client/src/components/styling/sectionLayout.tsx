import { FC } from 'react';

interface ISectionLayout {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const SectionLayout: FC<ISectionLayout> = ({ children, className }) => {
  return <section className={className ? className : 'px-20 mt-10 mb-10'}>{children}</section>;
};

export default SectionLayout;

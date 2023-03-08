import React, { FC } from 'react';
import Navbar from '../Navbar';

interface IBaseLayout {
  children: JSX.Element[] | JSX.Element;
}

const BaseLayout: FC<IBaseLayout> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="desktop:container desktop:mx-auto wide:container wide:mx-auto">{children}</div>
    </>
  );
};

export default BaseLayout;

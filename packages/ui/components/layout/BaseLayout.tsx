import React, { FC } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';

interface IBaseLayout {
  children: JSX.Element[] | JSX.Element;
}

const BaseLayout: FC<IBaseLayout> = ({ children }) => {
  return (
    <>

      <Navbar />
      {children}
      <Footer/>
    </>
  );
};

export default BaseLayout;

import { Navbar as MaterialNavbar, NavbarProps } from '@material-tailwind/react';
import { FC } from 'react';
import Text from './Text';

interface INavbar {}

const Navbar: FC<INavbar> = ({}) => {
  return (
    <MaterialNavbar
      fullWidth={true}
      className={`py-2 px-4 lg:px-8 lg:py-4 lg:fixed lg:top-0 h-16 shadow-none border-b border-[#EFEDED] border-solid`}
    >
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Text text="Jayco Industries" className="text-[20px] font-semibold" />
      </div>
    </MaterialNavbar>
  );
};

export default Navbar;

import {Navbar as MaterialNavbar} from '@material-tailwind/react';
import { FC } from 'react';
import Text from './Text';

interface INavbar {}

const Navbar: FC<INavbar> = ({}) => {
  return (
    <MaterialNavbar
      fullWidth={true}
      className={`lg:fixed lg:top-0 h-16 shadow-none border-b border-[#EFEDED] border-solid`}
    >
      <div className="max-w-[1440px] mx-20 flex items-center justify-between text-blue-gray-900">
        <Text text="Jayco Industries" className="text-[20px] font-semibold" />
      </div>
    </MaterialNavbar>
  );
};

export default Navbar;

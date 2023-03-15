import {Navbar as MaterialNavbar} from '@material-tailwind/react';
import { FC } from 'react';
import Text from './Text';

interface INavbar {}

const Navbar: FC<INavbar> = ({}) => {
  return (
    <MaterialNavbar
      fullWidth={true}
      className={`lg:fixed lg:top-0 h-16 shadow-none border-b border-[#EFEDED] border-solid z-50`}
    >
      <div className=" flex items-center justify-between text-blue-gray-900">
        <Text text="Jayco Industries" className="text-[20px] font-semibold" />
      </div>
    </MaterialNavbar>
  );
};

export default Navbar;

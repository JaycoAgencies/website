import {
  Navbar as MaterialNavbar,
  NavbarProps,
} from '@material-tailwind/react';
import { FC } from 'react';
import Text from './Text';

interface INavbar {}

const Navbar: FC<INavbar> = ({}) => {
  return (
    <MaterialNavbar
      className={`py-2 px-4 lg:px-8 lg:py-4 rounded-none max-w-none h-16`}
    >
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Text text="Jayco Industries" variant="h4" />
      </div>

    </MaterialNavbar>
  );
};

export default Navbar;

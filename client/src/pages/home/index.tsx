import Button from '@/components/Button';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <div className='w-full h-40'>
      <Button title="Hello" variant={'filled'} color={'blue'} children={undefined}></Button>
    </div>
  );
};

export default HomePage;

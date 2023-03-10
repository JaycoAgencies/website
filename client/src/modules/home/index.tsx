import Navbar from '@/components/Navbar';
import AboutUs from './AboutUs';
import OurServices from './OurServices';
import ValuesWeProvide from './VauesWeProvide';

const Home = () => {
  const description =
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
  return (
    <>
      <OurServices></OurServices>
      <AboutUs description={description} />
      <ValuesWeProvide />
    </>
  );
};

export default Home;

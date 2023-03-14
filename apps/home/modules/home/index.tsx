
import ConnectWithUs from '../common/ConnectWithUs';
import AboutUs from './AboutUs';
import OurServices from './OurServices';
import OurTrustedPartners from './OurTrustedPartners';
import ValuesWeProvide from './VauesWeProvide';

const Home = () => {
  const description =
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
  return (
    <>
      <OurServices></OurServices>
      <OurTrustedPartners />
      <AboutUs description={description} />
      <ValuesWeProvide />
      <ConnectWithUs />
    </>
  );
};

export default Home;

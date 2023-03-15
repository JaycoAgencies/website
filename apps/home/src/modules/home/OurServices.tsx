
import chemical from 'public/assets/images/chemical.png';
import ServicesCard from 'ui/components/cards/Service.card';
import SectionLayout from 'ui/components/layout/sectionLayout';
import Text from 'ui/components/Text';
import { BASE_CONSTANTS_CLASS } from '../../constants/base.constants';


const OurServices = () => {
  const servicesList = [
    {
      id: 1,
      title: 'Chemical Industry',
      imageUrl: chemical,
      description: 'Minimal description of the service can be pasted here',
      routingUrl: 'http://google.com',
    },
    {
      id: 2,
      title: 'Agriculture Industry',
      imageUrl: chemical,
      description: 'Minimal description of the service can be pasted here',
      routingUrl: 'http://google.com',
    },
    {
      id: 3,
      title: 'Insurance Industry',
      imageUrl: chemical,
      description: 'Minimal description of the service can be pasted here',
      routingUrl: 'http://google.com',
    },
  ];

  return (
    <SectionLayout className={`mt-[169px] mb-[168px]  ${BASE_CONSTANTS_CLASS.baseLayout}`}>
      <div className="flex justify-start items-center gap-4">
        <Text
          className="dark:textDark text-textBlack text-[64px] uppercase"
          text="Our"
        ></Text>
        <Text
          className="dark:textDark text-textLight text-[64px] uppercase"
          text="Services."
        ></Text>
      </div>

      <div className="grid-cols-3 grid gap-20 mt-16">
        {servicesList.map((service) => {
          return (
            <ServicesCard
              key={service.id}
              title={service.title}
              imageUrl={service.imageUrl}
              description={service.description}
              routingUrl={service.routingUrl}
            />
          );
        })}
      </div>
    </SectionLayout>
  );
};

export default OurServices;

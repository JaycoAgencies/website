
import chemical from 'public/assets/images/chemical.png';
import ServicesCard from 'ui/cards/Service.card';
import SectionLayout from 'ui/styling/sectionLayout';
import Text from 'ui/Text';

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
    <SectionLayout className='mt-[169px] mb-[168px] mx-20'>
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
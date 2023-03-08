import ServicesCard from '@/components/cards/Service.card';
import Text from '@/components/Text';
import chemical from 'public/assets/images/chemical.png';

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
      imageUrl: '',
      description: 'Minimal description of the service can be pasted here',
      routingUrl: 'http://google.com',
    },
    {
      id: 3,
      title: 'Insurance Industry',
      imageUrl: '',
      description: 'Minimal description of the service can be pasted here',
      routingUrl: 'http://google.com',
    },
  ];

  return (
    <section>
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

      <div className="grid-cols-3 grid gap-20">
        {servicesList.map((service) => {
          return (
            <ServicesCard
              title={service.title}
              imageUrl={service.imageUrl as string}
              description={service.description}
              routingUrl={service.routingUrl}
            />
          );
        })}
      </div>
    </section>
  );
};

export default OurServices;

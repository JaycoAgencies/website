import ValueCard from '@/components/cards/Value.card';

import SectionLayout from '@/components/styling/sectionLayout';
import Text from '@/components/Text';


const ValuesWeProvide = () => {
  return (
    <SectionLayout className="bg-[#353A52] p-[112px]">
      <div className="flex w-full justify-center">
        <Text
          text={'Values we provide.'}
          className="dark:textDark text-white text-[64px] uppercase"
        ></Text>
      </div>

      <div className="flex mt-10 gap-20 justify-end items-center">
        <div className="flex flex-col justify-between items-center">
          <ValueCard
            title="Value"
            description="Lorem Ipsum has been the industry's standard dummy"
            imagePosition={'right'}
          ></ValueCard>

          <ValueCard
            title="Value"
            description="Lorem Ipsum has been the industry's standard dummy"
            imagePosition={'right'}
          ></ValueCard>
        </div>
        <div className="flex flex-col justify-between">
          <ValueCard
            title="Value"
            description="Lorem Ipsum has been the industry's standard dummy"
            imagePosition={'left'}
          ></ValueCard>

          <ValueCard
            title="Value"
            description="Lorem Ipsum has been the industry's standard dummy"
            imagePosition={'left'}
          ></ValueCard>
        </div>
      </div>
    </SectionLayout>
  );
};

export default ValuesWeProvide;

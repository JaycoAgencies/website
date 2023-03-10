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
    </SectionLayout>
  );
};

export default ValuesWeProvide;

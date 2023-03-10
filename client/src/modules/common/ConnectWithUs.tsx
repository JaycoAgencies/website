import SectionLayout from '@/components/styling/sectionLayout';
import Text from '@/components/Text';

const ConnectWithUs = () => {
  return (
    <SectionLayout>
      <div className="flex">
        <div className="flex-1">
          <Text text="Connect" className={'text-[64px] text-textLight uppercase'}></Text>
          <Text text="with us." className={'text-[64px] text-black uppercase'}></Text>
        </div>
        <div className="flex-1"></div>
      </div>
    </SectionLayout>
  );
};

export default ConnectWithUs;


import { FC } from 'react';
import SectionLayout from 'ui/styling/sectionLayout';
import Text from 'ui/Text';

interface IAboutUs {
  description: string;
}

const AboutUs: FC<IAboutUs> = ({ description }) => {
  return (
    <SectionLayout className='mt-[169px] mb-[168px] mx-20'>
      <div className="flex justify-start items-center gap-4">
        <Text
          className="dark:textDark text-textBlack text-[64px] uppercase"
          text="About"
        ></Text>
        <Text
          className="dark:textDark text-textLight text-[64px] uppercase"
          text="US."
        ></Text>
      </div>
      <div className="mt-12 ">
        <Text text={description} className={'font-normal text-lg'}></Text>
      </div>
    </SectionLayout>
  );
};

export default AboutUs;

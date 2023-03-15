import { FC } from "react";
import SectionLayout from "ui/components/layout/sectionLayout";
import Text from "ui/components/Text";
import { BASE_CONSTANTS_CLASS } from "../../constants/base.constants";

interface IAboutUs {
  description: string;
}

const AboutUs: FC<IAboutUs> = ({ description }) => {
  return (
    <SectionLayout className={`mx-auto mt-[169px] mb-[168px] flex flex-col items-start justify-center ${BASE_CONSTANTS_CLASS.baseLayout}`}>
      <div className="px-[70px]">
        <div className="flex items-center justify-start gap-4">
          <Text
            className="dark:textDark text-[64px] uppercase text-textBlack"
            text="About"
          ></Text>
          <Text
            className="dark:textDark text-[64px] uppercase text-textLight"
            text="US."
          ></Text>
        </div>
        <div className="mt-12 ">
          <Text text={description} className={"text-lg font-normal"}></Text>
        </div>
      </div>
    </SectionLayout>
  );
};

export default AboutUs;

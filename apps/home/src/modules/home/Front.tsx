import Button from "ui/components/Button";
import Image from "ui/components/Image";
import SectionLayout from "ui/components/layout/sectionLayout";
import Text from "ui/components/Text";
import { Icons } from "../../constants/icons.constants";

const Front = () => {
  return (
    <SectionLayout className="mt-16 ">
      <div className="flex items-center gap-20">
        <div className="flex-1">
          <Image
            src={Icons.frontPicture}
            alt={"raw"}
            height={0}
            width={0}
          ></Image>
        </div>
        <div className="flex flex-1   flex-col items-start justify-start ">
          <Text
            text={"GET RAW SUPPLIES FOR YOUR PRODUCTION"}
            className="text-[64px] font-normal"
          />
          <Button
            title="Enquire us"
            onClick={() => {}}
            className="mt-7 h-[50px] w-[221px] rounded-none bg-buttonLight text-base"
          ></Button>
        </div>
      </div>
      <div className="absolute top-[40%] right-0 h-[613px] w-[130px] bg-textLight z-0"></div>
    </SectionLayout>
  );
};

export default Front;

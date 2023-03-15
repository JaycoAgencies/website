import Button from "ui/components/Button";
import Image from "ui/components/Image";
import SectionLayout from "ui/components/layout/sectionLayout";
import Text from "ui/components/Text";
import { Icons } from "../../constants/icons.constants";

const Front = () => {
  return (
    <SectionLayout className="mx-[70px] mt-16">
      <div className="flex items-center gap-10">
        <div className="flex-1">
          <Image
            src={Icons.frontPicture}
            alt={"raw"}
            height={800}
            width={824}
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
    </SectionLayout>
  );
};

export default Front;

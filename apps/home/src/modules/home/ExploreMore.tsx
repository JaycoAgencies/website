import Image from "ui/components/Image";
import SectionLayout from "ui/components/layout/sectionLayout";
import Text from "ui/components/Text";
import { BASE_CONSTANTS_CLASS } from "../../constants/base.constants";
import { Icons } from "../../constants/icons.constants";

const ExporeMore = () => {
  return (
    <SectionLayout className={`mt-16 w-full mx-auto ${BASE_CONSTANTS_CLASS.baseLayout}`}>
      <div className="flex flex-col items-center justify-center gap-5 ">
        <Text
          text={"Explore More"}
          className="cursor-pointer text-sm font-normal uppercase"
        ></Text>
        <Image
          src={Icons.downArrow}
          alt={""}
          height={108}
          width={28}
          className={"cursor-pointer"}
        ></Image>
      </div>
    </SectionLayout>
  );
};

export default ExporeMore;

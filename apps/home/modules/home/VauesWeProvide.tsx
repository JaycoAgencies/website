import value1 from "public/assets/images/value1.png";
import value2 from "public/assets/images/value2.png";
import value3 from "public/assets/images/value3.png";
import value4 from "public/assets/images/value4.png";
import ValueCard from "ui/cards/Value.card";
import SectionLayout from "ui/styling/sectionLayout";
import Text from "ui/Text";

const ValuesWeProvide = () => {
  return (
    <SectionLayout className="bg-[#353A52] p-[112px]">
      <div className="flex w-full justify-center">
        <Text
          text={"Values we provide."}
          className="dark:textDark text-[64px] uppercase text-white"
        ></Text>
      </div>

      <div className="mt-10 flex  items-center justify-end">
        <div className="flex flex-col items-center justify-between">
          <ValueCard
            imageSrc={value1}
            title="Value 1"
            description="Lorem Ipsum has been the industry's standard dummy"
            imagePosition={"right"}
          ></ValueCard>

          <ValueCard
            imageSrc={value3}
            title="Value 3"
            description="Lorem Ipsum has been the industry's standard dummy"
            imagePosition={"right"}
          ></ValueCard>
        </div>
        <div className="flex flex-col justify-between">
          <ValueCard
            imageSrc={value2}
            title="Value 2"
            description="Lorem Ipsum has been the industry's standard dummy"
            imagePosition={"left"}
          ></ValueCard>

          <ValueCard
            imageSrc={value4}
            title="Value 4"
            description="Lorem Ipsum has been the industry's standard dummy"
            imagePosition={"left"}
          ></ValueCard>
        </div>
      </div>
    </SectionLayout>
  );
};

export default ValuesWeProvide;

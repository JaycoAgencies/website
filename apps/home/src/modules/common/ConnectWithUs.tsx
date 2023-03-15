import SectionLayout from "ui/components/layout/sectionLayout";
import TextArea from "ui/components/TextArea";
import TextIcon from "ui/components/TextIcon";
import Text from "ui/components/Text";
import Input from "ui/components/Input";
import Button from "ui/components/Button";
import { Icons } from "../../constants/icons.constants";
import { BASE_CONSTANTS_CLASS } from "../../constants/base.constants";

const ConnectWithUs = () => {
  return (
    <SectionLayout className={`mx-auto pt-[155px] pb-[155px] flex justify-center items-center ${BASE_CONSTANTS_CLASS.baseLayout}`}>
      <div className="flex gap-40 justify-center items-center">
        <div className="flex-1 ">
          <div className="mb-20">
            <Text
              text="Connect"
              className={"text-[64px] uppercase text-textLight"}
            ></Text>
            <Text
              text="with us."
              className={"text-[64px] uppercase text-black"}
            ></Text>
          </div>

          <div className="flex w-full flex-col">
            <div className="mb-10 flex border-b border-textLight pb-8">
              <Text text="Want to schedule a meeting? Click here to schedule in calendar"></Text>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <TextIcon
                  className="text-base font-light"
                  text={"04423422342"}
                  icon={Icons.telephone}
                ></TextIcon>
                <TextIcon
                  className="text-base font-light underline"
                  text={"919999999999"}
                  icon={Icons.whatsapp}
                ></TextIcon>
              </div>
              <div className="flex items-center">
                <TextIcon
                  className="text-base font-light"
                  text={"xxx street, place, area, country 600106"}
                  icon={Icons.location}
                ></TextIcon>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-12 flex flex-col gap-5">
            <Text
              className="text-lg font-normal"
              text="Fill the form and send us, We will get back to you soon"
            ></Text>
            <Text className="text-base" text="*-mandatory"></Text>
          </div>

          <form>
            <Input label="Name" isRequired={true}></Input>
            <Input label="Phone no." isRequired={true}></Input>
            <TextArea title="Additional Notes"></TextArea>
            <Button
              title="Enquire us"
              onClick={() => {}}
              className="mt-7 h-[50px] w-[221px] rounded-none bg-buttonLight"
            ></Button>
          </form>
        </div>
      </div>
    </SectionLayout>
  );
};

export default ConnectWithUs;
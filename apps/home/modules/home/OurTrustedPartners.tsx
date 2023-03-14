import SectionLayout from "ui/styling/sectionLayout";
import Text from "ui/Text";

const OurTrustedPartners = () => {
  return (
    <SectionLayout className='mt-[169px] mb-[168px] mx-20'>
      <div className="flex">
        <div className="flex-1 flex-col">
          <div className="flex bg-[#353A52] px-8 py-12 flex-col">
            <div className="flex flex-col">
              <Text
                text="OUR"
                className="dark:textDark text-white text-[64px] uppercase font-normal"
              />
              <Text
                text="TRUSTED"
                className="dark:textDark text-white text-[64px] uppercase font-normal"
              />
              <Text
                text="Partners"
                className="dark:textDark text-white text-[64px] uppercase font-normal"
              />
            </div>

            <Text
              text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
              className="text-lg font-normal text-white"
            />
          </div>
          <div className="flex"></div>
        </div>
        <div className="flex-1"></div>
      </div>
    </SectionLayout>
  );
};

export default OurTrustedPartners;

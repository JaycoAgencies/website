import PartnerCard from "ui/components/cards/Partner.card";
import SectionLayout from "ui/components/layout/sectionLayout";
import Text from "ui/components/Text";
import { Icons } from "../../constants/icons.constants";

const OurTrustedPartners = () => {
  return (
    <SectionLayout className="mx-[70px]">
      <div className="flex">
        <div className="flex  flex-col h-full">
          <div className=" flex gap-6 p-14 w-[477px] h-[421px]  flex-col items-start justify-start bg-[#353A52] mb-[38px] mr-[43px]">
            <div className="flex flex-col">
              <Text
                text="OUR"
                className="dark:textDark h-[70px] text-[64px] font-normal uppercase text-white"
              />
              <Text
                text="TRUSTED"
                className="dark:textDark h-[70px] text-[64px] font-normal uppercase text-white"
              />
              <Text
                text="Partners."
                className="dark:textDark h-[70px] text-[64px] font-normal uppercase text-white"
              />
            </div>

            <Text
              text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
              className="text-lg font-normal text-white"
            />
          </div>
          <div className="flex">
            <div className="flex-1">
              <PartnerCard
                imageUrl={Icons.companyLogo}
                partnerName="AR stanchem private limited"
              ></PartnerCard>
            </div>
            <div className="flex-1">
              <PartnerCard
                imageUrl={Icons.companyLogo}
                partnerName="AR stanchem private limited"
              ></PartnerCard>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <PartnerCard
            imageUrl={Icons.companyLogo}
            partnerName="AR stanchem private limited"
          ></PartnerCard>
          <PartnerCard
            imageUrl={Icons.companyLogo}
            partnerName="AR stanchem private limited"
          ></PartnerCard>
          <PartnerCard
            imageUrl={Icons.companyLogo}
            partnerName="AR stanchem private limited"
          ></PartnerCard>
          <PartnerCard
            imageUrl={Icons.companyLogo}
            partnerName="AR stanchem private limited"
          ></PartnerCard>
          <PartnerCard
            imageUrl={Icons.companyLogo}
            partnerName="AR stanchem private limited"
          ></PartnerCard>
          <PartnerCard
            imageUrl={Icons.companyLogo}
            partnerName="AR stanchem private limited"
          ></PartnerCard>
          <PartnerCard
            imageUrl={Icons.companyLogo}
            partnerName="AR stanchem private limited"
          ></PartnerCard>
          <PartnerCard
            imageUrl={Icons.companyLogo}
            partnerName="AR stanchem private limited"
          ></PartnerCard>
          <PartnerCard
            imageUrl={Icons.companyLogo}
            partnerName="AR stanchem private limited"
          ></PartnerCard>
        </div>
  

      </div>
    </SectionLayout>
  );
};

export default OurTrustedPartners;

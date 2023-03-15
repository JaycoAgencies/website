import { FC } from "react";
import Image from "../Image";
import {StaticImageData} from 'next/image';
import Text from "../Text";

interface IPartner {
    imageUrl: StaticImageData;
    partnerName: string;
}

const PartnerCard: FC<IPartner> = ({imageUrl,partnerName}) => {
    return (
        <div className="flex w-[260px] h-[230px] bg-[#f1f1f1] flex-col p-5 text-center rounded-[5px] gap-4 justify-center items-center border-[1px] border-[#FBFBFC] border-solid">
            <Image src={imageUrl} alt={''} width={82} height={82}></Image>
            <Text text={partnerName}></Text>
        </div>
    )
};

export default PartnerCard;
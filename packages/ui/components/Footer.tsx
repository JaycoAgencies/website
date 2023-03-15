import SectionLayout from "./layout/sectionLayout";
import Text from "./Text";

const Footer = () =>{

    const footerLinks= [{
        title : 'Legal Policies',
        link : ''
    },{
        title : 'Terms & Conditions',
        link : ""
    },{
        title : "FAQ",
        link : ""
    }]

    return <SectionLayout className="">
            <div className="flex justify-between items-center">
                    <div className="flex-1">
                        <Text text="Jayco Industries" className="text-[20px] font-semibold"></Text>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <Text text="Copyrights 2020 Jayco. All rights reserved" className="text-sm"></Text>
                    </div>
                    <div className="flex-1 flex justify-end">
                        <ul className="flex">
                            {
                                footerLinks.map(link => {
                                    return                                 <li className="px-3">
                                    <Text text={link.title} className="underline"></Text>
                                </li>
                                })
                            }
                        </ul>
                    </div>
            </div>
    </SectionLayout>
};

export default Footer;
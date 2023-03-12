import SectionLayout from '@/components/styling/sectionLayout';
import Text from '@/components/Text';
import TextIcon from '@/components/TextIcon';
import Telephone from 'public/assets/telephone.svg';
import Whatsapp from 'public/assets/whatsapp.svg';
import location from 'public/assets/location.svg';
import Input from '@/components/Input';
import TextArea from '@/components/TextArea';
import Button from '@/components/Button';

const ConnectWithUs = () => {
  return (
    <SectionLayout>
      <div className="flex gap-40">
        <div className="flex-1 ">
          <div className="mb-20">
            <Text text="Connect" className={'text-[64px] text-textLight uppercase'}></Text>
            <Text text="with us." className={'text-[64px] text-black uppercase'}></Text>
          </div>

          <div className="flex flex-col w-full">
            <div className="flex mb-10 border-b border-textLight pb-8">
              <Text text="Want to schedule a meeting? Click here to schedule in calendar"></Text>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex gap-4 items-center">
                <TextIcon className="text-base font-light" text={'04423422342'} icon={Telephone}></TextIcon>
                <TextIcon className="text-base font-light underline" text={'919999999999'} icon={Whatsapp}></TextIcon>
              </div>
              <div className="flex items-center">
                <TextIcon className="text-base font-light" text={'xxx street, place, area, country 600106'} icon={location}></TextIcon>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-5 mb-12">
            <Text className="text-lg font-normal" text="Fill the form and send us, We will get back to you soon"></Text>
            <Text className="text-base" text="*-mandatory"></Text>
          </div>

          <form>
            <Input label="Name" isRequired={true}></Input>
            <Input label="Phone no." isRequired={true}></Input>
            <TextArea title="Additional Notes"></TextArea>
            <Button title="Enquire us" onClick={() => {}} className="bg-buttonLight rounded-none w-[221px] h-[50px] mt-7"></Button>
          </form>
        </div>
      </div>
    </SectionLayout>
  );
};

export default ConnectWithUs;

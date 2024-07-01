import Avatar from "@/ui/atom/Avatar";
import InputFile from "@/ui/atom/InputFile";
import InputText from "@/ui/atom/InputText";
import SvgIcon from "@/ui/atom/SvgIcon";
import TextArea from "@/ui/atom/TextArea";
import Text from "@/ui/atom/typography/Text";
import { FC, ReactNode } from "react";

interface NewTaskProps {
  children: ReactNode;
}

export const NewTask: FC<NewTaskProps> = ({ children }) => {
  return (
    <>
      <div className="bg-white rounded-lg border w-[1153px] h-[637px]">
        <div className="mt-2 flex flex-row items-center justify-center relative">
          <div className="mt-1 flex flex-row items-center justify-center">
            <Text textSize="headingS">عنوان تسک</Text>
          </div>
          <SvgIcon
            name="close"
            width="24"
            height="24"
            className="top-2 left-4 cursor-pointer absolute "
          />
        </div>
        {/* <div>{children}</div> */}
        <div>
            <div className="">
                <span>در</span>
                <InputText name="title"/>
                <span>برای</span>
                <Avatar/>
            </div>
            <div className="">
                <TextArea name="message" value="توضیحاتی برای این تسک بنویسید"/>
            </div>
            <div className="">
                <InputFile name="addAttachment" labelText="افزودن پیوست" onChange={()=>{}}/>
                <InputFile name="addCover" labelText="افزودن کاور" onChange={()=>{}}/>
            </div>
        </div>
      </div>
    </>
  );
};

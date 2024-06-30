import { Button } from "@/ui/atom/Button";
import InputFile from "@/ui/atom/InputFile";
import InputText from "@/ui/atom/InputText";
import SvgIcon from "@/ui/atom/SvgIcon";
import TextArea from "@/ui/atom/TextArea";
import Text from "@/ui/atom/typography/Text";
import { OutBox } from "@/ui/molocol/Box";
import FormContainer from "@/ui/molocol/FormContainer";
import { useState } from "react";
import { FC, ReactNode } from "react";

interface NewTaskProps {
  children: ReactNode;
}

export const NewTask: FC<NewTaskProps> = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleTermsClick = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
    {/* button for onclick */}
      <OutBox
        title="ثبت‌نام در کوئرا تسک منیجر"
        className="w-[540px] flex flex-col justify-between"
      >
        <button onClick={handleTermsClick} className="flex items-center">
          <SvgIcon name="add" className="ml-2" />
          تسک جدید
        </button>
      </OutBox>

{/* show modal */}
      <OutBox
        isOpen={modalOpen}
        toggle={handleCloseModal}
        title="عنوان تسک"
        className="w-[1153px]"
      >
        <FormContainer>
          <div className="flex items-center mb-10">
            <span>در</span>
            <div className="mx-2">
              <InputText name="title" />
            </div>
            <span>برای</span>
            <span className="border-2 border-dotted rounded-full p-2 m-2">
              <SvgIcon name="new-user" />
            </span>
          </div>
          <div className="mb-10">
            <TextArea
              name="message"
              placeholder="توضیحاتی برای این تسک بنویسید"
              rowsNumber={6}
              columnsNumber={200}
            />
          </div>
          <div className="flex items-center mb-10">
            <Text className="ml-3">افزودن پیوست</Text>
            <InputFile
              name="addAttachment"
              labelText="آپلود فایل"
              iconName="link"
              onChange={() => {}}
            />
          </div>
          <div className="flex items-center mb-10">
            <Text>افزودن کاور</Text>
            <InputFile
              name="addCover"
              labelText="آپلود فایل"
              iconName="link"
              onChange={() => {}}
            />
          </div>
          <div className="flex items-center">
            <ul className="flex mx-3 items-center flex-1">
              <li>
                <span className="w-[50px] h-[50px] flex items-center justify-center border-2 rounded-full border-dotted p-2 m-2">
                  <SvgIcon name="flag" />
                </span>
              </li>
              <li>
                <span className="w-[50px] h-[50px] flex items-center justify-center border-2 rounded-full border-dotted p-2 m-2">
                  <SvgIcon name="calendar" />
                </span>
              </li>
              <li>
                <span className="w-[50px] h-[50px] flex items-center justify-center border-2 rounded-full border-dotted p-2 m-2">
                  <SvgIcon name="label" />
                </span>
              </li>
            </ul>
            <Button type="submit" isBold isprimary className="mr-auto px-10">
              ساخت تسک
            </Button>
          </div>
        </FormContainer>
      </OutBox>
    </>
  );
};

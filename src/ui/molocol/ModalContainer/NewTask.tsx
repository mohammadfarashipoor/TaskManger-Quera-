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
  children?: ReactNode;
}

export const NewTask: FC<NewTaskProps> = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {/* button for onclick */}
      <FormContainer>
        <div className="flex">
          <Button type="button" onclick={handleOpenModal}>
            <SvgIcon name="add" className="ml-2" />
            تسک جدید
          </Button>
        </div>
      </FormContainer>

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
            <div className="mx-3">
              <InputText name="title" />
            </div>
            <span>برای</span>
            <Button
                  type="button"
                  className="w-[35px] h-[35px] bg-white flex items-center justify-center mr-4"
                >
              <SvgIcon name="new-user" isBorder={true} className="text-brand-primary" />
            </Button>
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
            <Text className="ml-5">افزودن پیوست</Text>
            <div>
              <InputFile
                name="addAttachment"
                labelText="آپلود فایل"
                iconName="link"
                onChange={() => {}}
              />
            </div>
          </div>
          <div className="flex items-center mb-10">
            <Text className="ml-5">افزودن کاور</Text>
            <div>
              <InputFile
                name="addCover"
                labelText="آپلود فایل"
                iconName="link"
                onChange={() => {}}
              />
            </div>
          </div>
          <div className="flex items-center">
            <ul className="flex mx-3 items-center flex-1">
              <li className="mx-4">
                <Button
                  type="button"
                  className="w-[50px] h-[50px] bg-white flex items-center justify-center"
                >
                  <SvgIcon name="flag" isBorder={true} width="30" height="30" className="text-brand-primary border-gray-secondary" />
                </Button>
              </li>
              <li className="mx-4">
                <Button
                  type="button"
                  className="w-[50px] h-[50px] bg-white flex items-center justify-center"
                >
                  <SvgIcon name="calendar" isBorder={true} width="30" height="30" className="text-brand-primary border-gray-secondary" />
                </Button>
              </li>
              <li className="mx-4">
                <Button
                  type="button"
                  className="w-[50px] h-[50px] bg-white flex items-center justify-center"
                >
                  <SvgIcon name="label" isBorder={true} width="30" height="30" className="text-brand-primary border-gray-secondary" />
                </Button>
              </li>
            </ul>
            <Button type="submit" isBold className="mr-auto px-10">
              ساخت تسک
            </Button>
          </div>
        </FormContainer>
      </OutBox>
    </>
  );
};

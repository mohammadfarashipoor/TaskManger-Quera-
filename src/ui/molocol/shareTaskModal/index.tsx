import { Button } from "@/ui/atom/Button";
import InputText from "@/ui/atom/InputText";
import SvgIcon from "@/ui/atom/SvgIcon";
import Text from "@/ui/atom/typography/Text";
import React, { useEffect, useState } from "react";
import FormContainer from "../FormContainer";
import { schemaForgotPage } from "@/validation/validationSchema";
import Avatar from "@/ui/atom/Avatar";
import Badge from "@/ui/atom/Badge";
import { ShareProject } from "../Box";
import CopyToClipboard from "react-copy-to-clipboard";
import { Permission } from "@/ui/molocol/Permission";

interface ModalProps {
  children?: React.ReactNode;
  iconName?: string;
  className?: string;
  users?: any;
  textToCopy?: any;
  title?:any
}
export const ShareTaskModal = ({
  children,
  iconName,
  className,
  title,
  users = ["shamim", "ali"],
}: ModalProps) => {
  const [modal, setModal] = useState(false);
  const [permission, setPermission]=useState("")
  
    const toggleModal = () => {
      setModal(!modal)
    };
     const togglePermission = (user: any) => {
        setPermission(user);
      if(user===permission){
        setPermission("")
      }

      };


  const [inputValue, setInputValue] = useState("check");

  return (
    <>
      <div onClick={toggleModal} >
        <Text className={className}>
          {iconName && <SvgIcon name={iconName} />}
          {children}
        </Text>
      </div>

      {modal && (
        <ShareProject isOpen toggle={toggleModal} >
          <div className="space-y-6">
            <FormContainer
              className=" flex justify-center items-center "
              onSubmit={onsubmit}
              schema={schemaForgotPage}
            >
              <InputText
                type="text"
                name="invate"
                classNames="bg-[#F0F1F3] w-[320px] "
                inlineElement
              ></InputText>

              <Button isLeftRounded>ارسال</Button>
            </FormContainer>
            <div className="flex justify-between ">
              <div className="flex gap-xs">
                <SvgIcon width="24" name="link" className="text-[#BDBDBD] " />
                <Text textSize="bodyS">
                  <a href={inputValue} />
                  لینک خصوصی
                </Text>
              </div>
              <CopyToClipboard text={inputValue}>
                <button className="border rounded-md px-[12px] py-[3px]">
                  <Text textSize="bodyS"> کپی لینک</Text>
                </button>
              </CopyToClipboard>
            </div>
            <Text textSize="bodyS" className="text-[#7D828C] text-start">
              اشتراک‌گذاشته شده با
            </Text>

            <div className="gap-m space-y-2 ">
              <div className="space-y-2">
                {users.map((user: any) => {
                  return (
                    <div
                      className="flex justify-between items-center  "
                      key={user}
                    >
                      <div className="flex justify-center items-center gap-2">
                        <Avatar name={user}></Avatar>
                        {user}
                        <Badge textLabel="workSpace"></Badge>
                      </div>
                      <Permission></Permission>                      
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </ShareProject>
      )}
    </>
  );
};

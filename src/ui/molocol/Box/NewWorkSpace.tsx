import SvgIcon from "@/ui/atom/SvgIcon";
import Text from "@/ui/atom/typography/Text";
import { FC, ReactNode } from "react";

interface NewWorkSpaceProps {
  children: ReactNode;
  toggle: () => void;
  isOpen: boolean;
  className?: string;
}

export const NewWorkSpace: FC<NewWorkSpaceProps> = ({
  children,
  toggle,
  isOpen,
  className,
}) => {
  if (isOpen === false) return null;
  return (
    <>
      {isOpen && (
        <>
          <div
            className="fixed inset-0"
            style={{ backgroundColor: "rgba(23, 25, 27, 0.6)" }}
          ></div>
          <div
            className={`bg-white rounded-lg w-[500px] text-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ${className}`}
          >
            <div className="mt-2 flex flex-row items-center justify-center relative">
              <SvgIcon
                name="close"
                width="24"
                height="24"
                className="absolute top-2 right-4 cursor-pointer"
                onClick={toggle}
              />
              <div className="mt-1 flex flex-row items-center justify-center">
                <Text textSize="headingS">ساختن ورک اسپیس جدید</Text>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center px-4 py-2 mt-4 m-6">
              {children}
            </div>
          </div>
        </>
      )}
    </>
  );
};

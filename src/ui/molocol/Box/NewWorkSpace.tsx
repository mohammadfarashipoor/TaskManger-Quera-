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
        <div
          className={`bg-white rounded-lg w-[500px] text-center absolute  ${className}`}
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
          <div className="flex flex-col justify-center items-center px-4 py-2 mt-4">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

import SvgIcon from "@/ui/atom/SvgIcon";
import Text from "@/ui/atom/typography/Text";
import { FC, ReactNode } from "react";

interface ColorInformationProps {
  children: ReactNode;
  toggle: () => void;
  isOpen: boolean;
  isBackIcon?: boolean;
  title: string;
  height: string;
}

export const ColorInformation: FC<ColorInformationProps> = ({
  children,
  toggle,
  isOpen,
  title,
  height,
  isBackIcon = true,
}) => {
  if (isOpen === false) return null;
  return (
    <>
      {isOpen && (
        <div
          className={`bg-white p-3 rounded-lg w-[501px]  justify-center  items-center`}
          style={{ height }}
        >
          <div className="text-center mt-4 flex justify-between items-center">
            <SvgIcon
              name="close"
              width="24"
              height="24"
              className="top-4 right-4 mr-4 cursor-pointer"
              onClick={toggle}
            />
            <Text textSize="headingS">{title}</Text>
            <span className="w-[24px] h-[24px]">
              {isBackIcon && (
                <SvgIcon
                  name="arrow-side"
                  width="24"
                  height="24"
                  className="top-4 left-4 ml-4 cursor-pointer"
                  onClick={toggle}
                />
              )}
            </span>
          </div>
          <div className="flex flex-col justify-center items-center px-4 py-2 mt-4">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

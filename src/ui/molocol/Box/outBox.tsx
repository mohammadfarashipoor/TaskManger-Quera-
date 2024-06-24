import SvgIcon from "@/ui/atom/SvgIcon";
import Text from "@/ui/atom/typography/Text";
import { FC, ReactNode } from "react";

interface OutBoxProps {
  children: ReactNode;
  isOpen?: boolean;
  toggle?: () => void;
  title: string;
  className: string;
}

export const OutBox: FC<OutBoxProps> = ({
  children,
  isOpen,
  toggle,
  title,
  className,
}) => {
  if (isOpen === false) return null;
  const classWrap =
    "bg-white rounded-[20px] shadow-custom absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pr-6 pl-6 pb-6";
  return (
    <>
      {!isOpen ? (
        <div className={`${classWrap} ${className} `}>
          <div className="text-center pt-6 mb-6">
            <Text textSize="headingL">{title}</Text>
          </div>
          {children}
        </div>
      ) : (
        <>
          <div
            className="fixed inset-0 w-screen h-screen"
            style={{ backgroundColor: "rgba(23, 25, 27, 0.6)" }}
          ></div>
          {/* <div className="fixed inset-0  flex items-center justify-center z-50 w-screen h-screen"> */}
          <div className={`${classWrap} ${className} `}>
            <div className="relative">
              <div className="text-center pt-6 mb-6">
                <Text textSize="headingL">{title}</Text>
              </div>
              <SvgIcon
                name="close"
                width="32"
                height="32"
                className="absolute top-4 left-4 cursor-pointer"
                onClick={toggle}
              />
            </div>
            {children}
          </div>
          {/* </div> */}
        </>
      )}
    </>
  );
};

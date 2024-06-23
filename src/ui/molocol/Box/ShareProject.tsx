import SvgIcon from "@/ui/atom/SvgIcon";
import Text from "@/ui/atom/typography/Text";
import { FC, ReactNode } from "react";

interface ShareProjectProps {
  children: ReactNode;
  toggle: () => void;
  isOpen: boolean;
}

export const ShareProject: FC<ShareProjectProps> = ({
  children,
  toggle,
  isOpen,
}) => {
  if (isOpen === false) return null;
  return (
    <>
      {isOpen && (
        <div
          className={`bg-white rounded-lg border w-[470px] h-[332px] text-center`}
        >
          <div className="mt-2 flex flex-row items-center justify-center relative">
            <SvgIcon
              name="close"
              width="24"
              height="24"
              className="top-2 right-4 cursor-pointer absolute "
              onClick={toggle}
            />
            <div className="mt-1 flex flex-row items-center justify-center">
              <Text textSize="headingS">به اشتراک‌ گذاری پروژه‌</Text>
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

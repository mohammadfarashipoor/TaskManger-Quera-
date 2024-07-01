import { FC, ReactNode } from "react";

interface OtherBoxProps {
  children: ReactNode;
  className: string;
  boxShadow: string;
}

export const OtherBox: FC<OtherBoxProps> = ({
  children,
  className,
  boxShadow,
}) => {
  return (
    <>
      <div
        className={`bg-white rounded-lg text-center ${className}  `}
        style={{ boxShadow }}
      >
        <div className=" flex flex-row items-center justify-center ">
          {children}
        </div>
      </div>
    </>
  );
};

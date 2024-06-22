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
        className={`bg-white rounded-lg border text-center  ${className}  `}
        style={{ boxShadow }}
      >
        <div className="mt-2 flex flex-row items-center justify-center mt-4">
          {children}
        </div>
      </div>
    </>
  );
};

import React from "react";
import SvgIcon from "../SvgIcon";
import BodyXS from "../typography/BodyXS";
import BoldXS from "../typography/BoldXS";
interface ButtonProps {
  onClick: () => void;
  className: string;
  children?: React.ReactNode;
  isRoundedFull:boolean
//   roundedSide:string; 
  isBold:boolean;
  name:string;
  colorClass:string;
}

export const Button = ({ onClick, className, children ,isBold,name,isRoundedFull}: ButtonProps) => {

  return (
    <button
      className={`bg-brand-primary ${isRoundedFull?"rounded-md":"rounded-l-md"}  w-full text-white p-2.5  gap-2 ${className}`}
      onClick={onClick}
    >
      <div className="flex justify-center items-center gap-1">
        {isBold ? <BoldXS>{children}</BoldXS> : <BodyXS>{children}</BodyXS>}
        <SvgIcon name={name} />
      </div>
    </button>
  );
};

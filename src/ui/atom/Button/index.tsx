import React from "react";
import SvgIcon from "../SvgIcon";
import BodyXS from "../typography/BodyXS";
import BoldXS from "../typography/BoldXS";
interface ButtonProps {
  onClick: () => void;
  className: string;
  children?: React.ReactNode;
  isRoundedFull:boolean
  isBold:boolean;
  isSmallRoundedButton:boolean;
  name:string;
  colorClass:string;

}

export const Button = ({ onClick, className, children ,isBold,name,isRoundedFull,isSmallRoundedButton}: ButtonProps) => {

  return (
    <button
      className={`bg-brand-primary 
        ${isRoundedFull ? isSmallRoundedButton ?"w-[125px] rounded-md" : "w-full rounded-md"  : "rounded-l-md w-[91px]"}
         text-white p-2.5 gap-2 ${className}`}
      onClick={onClick}
    >
      <div className="flex justify-center items-center gap-1">
        <SvgIcon name={name} />
        {isBold ? <BoldXS>{children}</BoldXS> : <BodyXS>{children}</BodyXS>}
      </div>
    </button>
  );
};

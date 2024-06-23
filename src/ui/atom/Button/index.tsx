import React from "react";
import SvgIcon from "../SvgIcon";
import Text from "../typography/Text";
interface ButtonProps {
  type?: "submit" | "reset" | "button" | undefined ;
  className?:string;
  children: React.ReactNode;
  isLeftRounded?: boolean;
  isBold?: boolean;
  isSmallRoundedButton?: boolean;
  iconName?: string;
}

export const Button = ({
  type,
  className,
  children,
  isBold,
  iconName,
  isLeftRounded,
  isSmallRoundedButton,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`bg-brand-primary 
        ${
          isLeftRounded
            ? "rounded-l-md w-[91px]"
            : isSmallRoundedButton
            ? "w-[125px] rounded-md"
            : "w-full rounded-md"
        }
         text-white p-2.5 gap-2 ${className}`}
        
        
         
    >
      <div className="flex justify-center items-center gap-1">
        {iconName && <SvgIcon name={iconName} />}
        {isBold ? (
          <Text textSize="boldS" textColor="white">
            {children}
          </Text>
        ) : (
          <Text textSize="bodyS" textColor="white">
            {children}
          </Text>
        )}
      </div>
    </button>
  );
};


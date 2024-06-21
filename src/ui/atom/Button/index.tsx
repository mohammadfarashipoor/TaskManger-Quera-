import React from "react";
import SvgIcon from "../SvgIcon";
import Text from "../typography/Text";
interface ButtonProps {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
  isLeftRounded?: boolean;
  isBold?: boolean;
  isSmallRoundedButton?: boolean;
  iconName?: string;
}

export const Button = ({
  onClick,
  className,
  children,
  isBold,
  iconName,
  isLeftRounded,
  isSmallRoundedButton,
}: ButtonProps) => {
  return (
    <button
      className={`bg-brand-primary 
        ${
          isLeftRounded
            ? "rounded-l-md w-[91px]"
            : isSmallRoundedButton
            ? "w-[125px] rounded-md"
            : "w-full rounded-md"
        }
         text-white p-2.5 gap-2 ${className}`}
      onClick={onClick}
    >
      <div className="flex justify-center items-center gap-1">
        {iconName && <SvgIcon name={iconName} />}
        {isBold ? (
          <Text textSize="boldXS" textColor="white">
            {children}
          </Text>
        ) : (
          <Text textSize="bodyXS" textColor="white">
            {children}
          </Text>
        )}
      </div>
    </button>
  );
};


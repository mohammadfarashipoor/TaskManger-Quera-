import React from "react";
import SvgIcon from "../SvgIcon";
import Text from "../typography/Text";
interface ButtonProps {
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  children: React.ReactNode;
  isLeftRounded?: boolean;
  isBold?: boolean;
  isSmallRoundedButton?: boolean;
  iconName?: string;
  isprimary?: boolean;
}

export const Button = ({
  type,
  className,
  children,
  isBold,
  iconName,
  isLeftRounded,
  isSmallRoundedButton,
  isprimary,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`p-2.5 gap-2 ${className}
        ${
          isprimary
            ? `bg-brand-primary  text-white`
            : `bg-white text-brand-primary`
        }
        ${
          isLeftRounded
            ? "rounded-l-md w-[91px]"
            : isSmallRoundedButton
            ? "w-[125px] rounded-md"
            : "w-full rounded-md"
        }
         `}
    >
      <div className="flex justify-center items-center gap-1">
        {iconName && <SvgIcon name={iconName} />}
        {isBold ? (
          <Text textSize="boldS" textColor={isprimary}>
            {children}
          </Text>
        ) : (
          <Text textSize="bodyS" textColor={isprimary}>
            {children}
          </Text>
        )}
      </div>
    </button>
  );
};


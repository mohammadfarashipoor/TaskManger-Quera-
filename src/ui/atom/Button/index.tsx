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
  isRedButton?: boolean;
  isOnlyBorderButton?: boolean;
  isGrayButton?:boolean;
}

export const Button = ({
  type,
  className,
  children,
  isBold,
  iconName,
  isLeftRounded,
  isSmallRoundedButton,
  isRedButton,
  isOnlyBorderButton,
  isGrayButton,

}: ButtonProps) => {
  return (
    <div>
      <button
        type={type}
        className={`p-2.5 ${className}
        ${isRedButton ? "bg-red-primary" : ""}
        ${
          isOnlyBorderButton
            ? "bg-white border border-2 border-brand-primary"
            : "bg-brand-primary"
        }
        ${isGrayButton ? "bg-gray-primary" : ""}
        ${
          isLeftRounded
            ? "rounded-l-md w-[91px]"
            : isSmallRoundedButton
            ? "w-[125px] rounded-md"
            : "w-full rounded-md"
        }
         `}
      >
        {isBold ? (
          <Text
            className="flex justify-center items-center gap-2"
            textSize="boldS"
            textColor={
              isGrayButton
                ? "black"
                : isOnlyBorderButton
                ? "brandPrimary"
                : "white"
            }
          >
            {iconName && <SvgIcon name={iconName} />}

            {children}
          </Text>
        ) : (
          <Text
            className="flex justify-center items-center gap-2"
            textSize="bodyS"
            textColor={
              isGrayButton
                ? "black"
                : isOnlyBorderButton
                ? "brandPrimary"
                : "white"
            }
          >
            {iconName && <SvgIcon name={iconName} />}

            {children}
          </Text>
        )}
      </button>
    </div>
  );
};


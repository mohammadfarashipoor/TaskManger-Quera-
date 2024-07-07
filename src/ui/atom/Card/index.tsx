import React from "react";
import Text from "../typography/Text";

interface CardProps {
  nameCard?: string;
  className?: string;
  children: React.ReactNode;
}

export const Card = ({ className = "", children }: CardProps) => {
  return (
    <div className="flex">
      <div className={`rounded-[16px] shadow px-10 py-5 ${className}`}>
        <Text className="text-white">{children}</Text>
      </div>
    </div>
  );
};

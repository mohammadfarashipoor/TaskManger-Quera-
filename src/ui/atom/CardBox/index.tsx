import React, { ReactNode } from "react";
import Text from "../typography/Text";

interface CardBoxProps {
  children: ReactNode;
  className?: string;
  title: string;
}

export const CardBox: React.FC<CardBoxProps> = (props) => {
  const { className = "", title, children } = props;

  return (
    <div className={`p-8 mb-5 ${className}`}>
      <Text textSize="headingS" className={`font-[800] mb-5`}>
        {title}
      </Text>
      <div className="flex items-center w-full overflow-x-auto">{children}</div>
    </div>
  );
};

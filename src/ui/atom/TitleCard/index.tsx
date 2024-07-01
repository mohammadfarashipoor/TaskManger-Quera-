import React, { ReactNode } from "react";
import Text from "../typography/Text";

interface TitleCardProps {
  children: ReactNode;
  className?: string;
}

export const TitleCard: React.FC<TitleCardProps> = (props) => {
  const { children, className = "" } = props;

  return <Text textSize="headingS" className={`font-[800] ${className}`}>{children}</Text>;
};

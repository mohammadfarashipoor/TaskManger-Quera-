import { FC } from "react";
import SvgIcon from "../SvgIcon";

interface InputSearchProps {
  placeholder: string;
  className?: string;
  onClick: () => void;
}

export const InputSearch: FC<InputSearchProps> = ({
  placeholder,
  className,
  onClick,
}) => {
  return (
    <div className="relative flex items-center w-full h-[40px] bg-white rounded">
      <SvgIcon
        name="search"
        className="absolute left-3 text-gray-500 cursor-pointer"
        onClick={onClick}
      />
      <input
        type="text"
        id="search-input"
        placeholder={placeholder}
        className={`pl-10 pr-3 w-full h-full bg-transparent border-none focus:outline-none ${className}`}
      />
    </div>
  );
};

import { useState } from "react";
import SvgIcon from "../SvgIcon";
interface DropdownProps {
  Header: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}
const Dropdown: React.FC<DropdownProps> = ({
  Header,
  children,
  className = "",
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center gap-3">
        <SvgIcon
          name="arrow-bottom"
          width="30"
          height="30"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className={`border-2 rounded-full transition-all border-black cursor-pointer ${
            !isDropdownOpen ? `rotate-90` : ``
          }`}
        />
        {Header}
      </div>
      {isDropdownOpen && children}
    </div>
  );
};

export default Dropdown;

import { useState } from "react";
import SvgIcon from "../SvgIcon";
interface DropdownProps {
  Header: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  initialDropdown?: boolean;
  InlineElement?: React.ReactNode;
}
const DefualtInlineElement = (isDropdownOpen: boolean) => (
  <SvgIcon
    name="arrow-bottom"
    width="30"
    height="30"
    className={`border-2 rounded-full transition-all border-black cursor-pointer ${
      !isDropdownOpen ? `rotate-90` : ``
    }`}
  />
);
const Dropdown: React.FC<DropdownProps> = ({
  Header,
  children,
  className = "",
  initialDropdown = true,
  InlineElement,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(initialDropdown);

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center gap-3">
        <span onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          {InlineElement || DefualtInlineElement(isDropdownOpen)}
        </span>
        {Header}
      </div>
      {isDropdownOpen && children}
    </div>
  );
};

export default Dropdown;

import { FC, useState } from "react";
import { Button } from "../Button";

export interface IItem {
  id: number;
  title: string;
}

interface IDropdownProps {
  list: Array<IItem>;
  onClick: (event: IItem) => void;
  defaultValue?: string;
}

const SelectOption: FC<IDropdownProps> = ({ list, onClick, defaultValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<IItem>();

  const handleSelect = (item: IItem) => {
    onClick?.(item);
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="relative flex flex-col items-center max-w-[182px] w-[182px]">
      <Button
        onclick={() => setIsOpen((prevState) => !prevState)}
        iconName="down"
        className="bg-gray-400 px-2 py-1 w-full flex items-center justify-between rounded-md border border-[#E9EBF0]"
      >
        {!!defaultValue ? defaultValue : selectedItem?.title ?? "انتخاب کنید"}
      </Button>
      {isOpen ? (
        <div className="bg-white absolute top-10 flex flex-col item-start rounded-lg p-2 w-full z-50 shadow-lg">
          {list.map((item) => (
            <div
              onClick={() => handleSelect(item)}
              className="flex w-full justify-start py-[14px] cursor-pointer"
              key={item.id}
            >
              <span className="font-bold">{item.title}</span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default SelectOption;

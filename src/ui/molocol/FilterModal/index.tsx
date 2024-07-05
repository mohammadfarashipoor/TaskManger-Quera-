import { Button } from "@/ui/atom/Button";
import SvgIcon from "@/ui/atom/SvgIcon";
import { useState } from "react";
import FilterRow from "./FilterRow";
import Text from "@/ui/atom/typography/Text";

interface FilterProps {
  closeModal: () => void;
}
const FilterModal: React.FC<FilterProps> = ({ closeModal }) => {
  const [filters, setFilters] = useState([]);

  const addRow = () => {
    const newRow: any = {
      id: filters.length + 1,
      isOrNot: "",
      tag: "",
      where: "",
    };
    setFilters([...filters, newRow]);
  };

  const handleDelete = (id: number) => {
    const updatedFilters = filters.filter((filter) => filter.id !== id);
    setFilters(updatedFilters);
  };

  const handleUpdate = (item: any) => {
    const updatedFilters = filters.map((filter) =>
      filter.id === item.id ? item : filter
    );
    setFilters(updatedFilters);
  };
  return (
    <div className="bg-white py-4 px-5 border border-red-50 rounded-lg min-h-[206px] shadow-newTask w-fit min-w-[720px] absolute top-36 right-[550px] z-50">
      <div className="flex justify-between items-center mb-3.5">
        <Text textSize="headingXS">فیلتر‌ها</Text>
        <SvgIcon name="close" onClick={closeModal} />
      </div>
      {filters.map((filter) => (
        <div key={filter.id} className="flex flex-col justify-center mb-4">
          <FilterRow
            filterData={filter}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        </div>
      ))}
      <Button onclick={addRow} isOnlyBorderButton>
        افزودن فیلتر جدید
      </Button>
    </div>
  );
};

export default FilterModal;

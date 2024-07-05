import { Button } from "@/ui/atom/Button";
import SelectOption from "@/ui/atom/SelectOption";
import { useState } from "react";

interface IFilterRowProps {
  filterData: any;
  onUpdate: (item: any) => void;
  onDelete: (id: number) => void;
}
const whereList = [
  { id: 1, title: "تاریخ" },
  { id: 2, title: "تگ" },
  { id: 3, title: "اعضا" },
  { id: 4, title: "اولویت" },
];

const tagList: { id: number; title: string }[] = [
  { id: 1, title: "درس" },
  { id: 2, title: "پروژه" },
  { id: 3, title: "کار" },
];

const statusList = [
  { id: 1, title: "است" },
  { id: 2, title: "نیست" },
];
const FilterRow: React.FC<IFilterRowProps> = (props) => {
  const { filterData, onUpdate, onDelete } = props;
  const [rowData, setRowData] = useState(filterData);

  const handleUpdate = (item: any, which: "where" | "tag" | "isOrNot") => {
    const updatedRowData = { ...rowData };
    updatedRowData[which] = item.title;
    setRowData(updatedRowData);
    onUpdate(updatedRowData);
  };
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-start items-center gap-2.5">
        <span className="whitespace-nowrap">تسک‌هایی که</span>
        <SelectOption
          list={whereList}
          onClick={(item) => handleUpdate(item, "where")}
          defaultValue={filterData.where}
        />
        <span>آن‌ها</span>
        <SelectOption
          list={tagList}
          onClick={(item) => handleUpdate(item, "tag")}
          defaultValue={filterData.tag}
        />
        <SelectOption
          list={statusList}
          onClick={(item) => handleUpdate(item, "isOrNot")}
          defaultValue={filterData.isOrNot}
        />
      </div>
      <Button onclick={() => onDelete(filterData.id)} iconName="delete">
        {}
      </Button>
    </div>
  );
};

export default FilterRow;

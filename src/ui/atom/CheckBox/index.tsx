import SvgIcon from "@/ui/atom/SvgIcon";
import { useFormContext } from "react-hook-form";

type ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;

interface CheckBoxProps {
  acceptedTerms?: boolean;
  terms?: React.ReactNode;
  onChange?: ChangeHandler;
  onClick?: () => any;
  labelText?: string;
  classNameLabel?: string;
}

const CheckBox = (props: CheckBoxProps) => {
  const {
    acceptedTerms,
    onChange,
    labelText = "",
    onClick,
    classNameLabel,
    terms,
  } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex gap-2 ml-auto cursor-pointer">
      <div className="flex items-center justify-center ">
        <input
          type="checkbox"
          id="checkbox"
          className="relative peer cursor-pointer appearance-none w-[20px] h-[20px]  border-[1px] border-gray-primary rounded-[4px] checked:border-brand-primary checked:bg-brand-secondary"
          {...register("checkBox")}
        />
        <SvgIcon
          name="accept"
          width="15"
          height="15"
          className="absolute w-4 h-4 ml-auto hidden peer-checked:block text-brand-primary"
        />
      </div>
      <label className={`cursor-pointer ${classNameLabel}`} htmlFor="checkbox">
        {terms && terms}
        <span>{labelText}</span>
      </label>
      {errors["checkBox"] && (
        <span className="text-red-500 text-sm">
          {errors["checkBox"].message}
        </span>
      )}
    </div>
  );
};

export default CheckBox;

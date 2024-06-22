import SvgIcon from "@/ui/atom/SvgIcon";

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
  return (
    <div className="flex gap-2 ml-auto cursor-pointer" onClick={onClick}>
      <label className={`cursor-pointer ${classNameLabel}`} htmlFor="checkbox">
        {terms && terms}
        <span>{labelText}</span>
      </label>
      <div className="flex items-center justify-center ">
        <input
          type="checkbox"
          id="checkbox"
          className="relative peer cursor-pointer appearance-none w-[20px] h-[20px]  border-[1px] border-gray-primary rounded-[4px] checked:border-brand-primary checked:bg-brand-secondary"
          checked={acceptedTerms}
          onChange={onChange}
        />
        <SvgIcon
          name="accept"
          width="15"
          height="15"
          className="absolute w-4 h-4 ml-auto hidden peer-checked:block text-brand-primary"
        />
      </div>
    </div>
  );
};

export default CheckBox;

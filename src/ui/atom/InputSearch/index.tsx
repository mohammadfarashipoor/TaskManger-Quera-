import SvgIcon from "../SvgIcon";

interface InputSearchProps {
  name: string;
  classNames?: string;
  placeholder?: string;
  onChange: any;
}

const InputSearch: React.FC<InputSearchProps> = (props) => {
  const { name, classNames, placeholder = "", onChange } = props;
  return (
    <div
      className={`flex flex-row-reverse w-full px-2 relative justify-center items-center border border-gray-400 rounded-[6px]  ${classNames}`}
    >
      <input
        id={name}
        type={"search"}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`p-xs w-full outline-none `}
      />
      <SvgIcon name="search" width="30" height="30" />
    </div>
  );
};

export default InputSearch;

import { useFormContext } from "react-hook-form";

interface InputTextProps {
  name: string;
  classNames?: string;
  label?: string;
  type?: "text" | "number" | "password";
}

const InputText: React.FC<InputTextProps> = (props) => {
  const { name, label, classNames, type = "text" } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex flex-col items-start gap-xs self-stretch">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        type={type}
        className={`p-xs self-stretch rounded-[6px] border border-gray-400 h-xl ${classNames} `}
        {...register(name)}
      />
      {errors[name] && <span>{errors[name].message}</span>}
    </div>
  );
};

export default InputText;

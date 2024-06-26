import { useFormContext } from "react-hook-form";
import Text from "../typography/Text";

interface InputTextProps {
  name: string;
  classNames?: string;
  label?: string;
  classNameLabel?: string;
  type?: "text" | "number" | "password";
  inlineElement?: React.ReactNode;
}

const InputText: React.FC<InputTextProps> = (props) => {
  const {
    name,
    label,
    classNames,
    classNameLabel,
    type = "text",
    inlineElement,
  } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col items-start gap-xs py-2">
      {label && (
        <label className={classNameLabel} htmlFor={name}>
          <Text>{label}</Text>
        </label>
      )}
      <div className="flex w-full">
        <input
          id={name}
          type={type}
          className={`p-xs self-stretch w-full ${
            inlineElement ? "rounded-r-[6px]" : "rounded-[6px]"
          } border border-gray-400 h-xl ${classNames} `}
          {...register(name)}
        />
        {inlineElement && inlineElement}
      </div>
      {errors[name] && (
        <span className="text-red-600 mb-1">{errors[name].message}</span>
      )}
    </div>
  );
};

export default InputText;

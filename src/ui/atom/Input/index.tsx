import { ChangeEvent } from "react";

interface InputPropsType {
  type: string;
  value?: string;
  label: string;
  name: string;
  id: string;
}

const Input: React.FC<InputPropsType> = ({
  type,
  value,
  label,
  name,
  id,
}) => {
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
  console.log(value);
  };

  return (
    <div className="mb-3">
      <label style={{color:'#1E1E1E',fontSize:'14px'}} className="block mb-2" htmlFor={id}>{label}</label>
      <input style={{borderColor:'#AAAAAA'}}
        className="appearance-none border py-2 px-2 rounded"
        type={type}
        value={value}
        name={name}
        id={id}
        onChange={handleInput}
      />
    </div>
  );
};

export default Input;

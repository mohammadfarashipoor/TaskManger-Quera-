import { useFormContext } from "react-hook-form";


interface TextAreaProps{
    name:string;
    classNames?:string;
    value?:string;
    rowsNumber:number;
    columnsNumber:number;
    placeholder:string;
}

const TextArea:React.FC<TextAreaProps>=(props)=> {

    const{name,value,classNames="",rowsNumber,columnsNumber,placeholder}=props

    const {
      register,
      formState: { errors },
    } = useFormContext();

  return (
    <div className="flex flex-col w-full">
        <textarea id={name} rows={rowsNumber} cols={columnsNumber} className={`w-full rounded-[12px] border border-gray-400 p-xs ${classNames}`} defaultValue={value} placeholder={placeholder} {...register(name)}></textarea>
        {errors[name] && (
        <span className="text-red-600 mb-1">{errors[name].message}</span>
      )}
    </div>
  )
}

export default TextArea


          {/* <TextArea name="message" placeholder="توضیحاتی برای این تسک بنویسید" rowsNumber={5} columnsNumber={150}/> */}

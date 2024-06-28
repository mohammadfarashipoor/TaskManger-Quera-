

interface TextAreaProps{
    name:string;
    classNames?:string;
    value?:string;
}

const TextArea:React.FC<TextAreaProps>=(props)=> {

    const{name,value,classNames}=props

  return (
    <div className="flex w-full">
        <textarea id={name} className={`w-full rounded-[12px] border border-gray-400 p-xs ${classNames}`} defaultValue={value}></textarea>
    </div>
  )
}

export default TextArea
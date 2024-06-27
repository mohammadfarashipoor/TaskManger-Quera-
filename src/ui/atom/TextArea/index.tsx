

interface TextAreaProps{
    name:string;
    classNames:string;
    value:string;
}

const TextArea:React.FC<TextAreaProps>=(props)=> {

    const{name,value,classNames}=props

  return (
    <div>
        <textarea id={name} className={`w-full rounded border border-gray-400 ${classNames}`} defaultValue={value}></textarea>
    </div>
  )
}

export default TextArea
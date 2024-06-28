

interface TextAreaProps{
    name:string;
    classNames?:string;
    value?:string;
    rowsNumber:number;
    columnsNumber:number;
}

const TextArea:React.FC<TextAreaProps>=(props)=> {

    const{name,value,classNames,rowsNumber,columnsNumber}=props

  return (
    <div className="flex w-full">
        <textarea id={name} rows={rowsNumber} cols={columnsNumber} className={`w-full rounded-[12px] border border-gray-400 p-xs ${classNames}`} defaultValue={value}></textarea>
    </div>
  )
}

export default TextArea


          {/* <TextArea name="message" value="توضیحاتی برای این تسک بنویسید" rowsNumber={5} columnsNumber={150}/> */}

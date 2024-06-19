interface ColorBoxProps {
  color: PaletteColorType;
  isSelected?: boolean;
}
function ColorBox(props: ColorBoxProps) {
  const { isSelected, color } = props;
  const handleColorClick = (color: PaletteColorType) => {
    console.log(color);
  };
  return (
    <div
      className={`flex items-center justify-center rounded-[40%]  cursor-pointer ${
        isSelected
          ? "w-[25px] h-[25px]"
          : "w-[20px] h-[20px] hover:scale-125 duration-200 ease-in-out"
      }`}
      style={{ backgroundColor: color }}
      onClick={() => handleColorClick(color)}
    >
      {isSelected && (
        <span className=" w-[12px] h-[12px] bg-white rounded-[40%]"></span>
      )}
    </div>
  );
}

export default ColorBox;

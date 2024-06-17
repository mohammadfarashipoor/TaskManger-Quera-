import ColorBox from "../../atom/ColorBox";
import SvgIcon from "../../atom/SvgIcon";

interface ColorSelectorProps {
  selectedColorPalette?: string;
  classNames?: string;
  theme?: boolean;
}

const ColorSelector = (props: ColorSelectorProps) => {
  const { selectedColorPalette, classNames, theme } = props;
  const colors: PaletteColorType[] = [
    "#228BE6",
    "#208D8E",
    "#15AABF",
    "#BE4BDB",
    "#40C057",
    "#4C6EF5",
    "#82C91E",
    "#FD7E14",
    "#E64980",
    "#FA5252",
    "#12B886",
    "#7950F2",
    "#FAB005",
  ];

  const handleColorClick = (color: PaletteColorType) => {
    console.log(color);
  };

  return (
    <div className={`flex items-center gap-[13px] ${classNames}`}>
      {colors.map((color) => (
        <ColorBox
          key={color}
          color={color}
          isSelected={color === selectedColorPalette}
        />
      ))}
      {theme && (
        <SvgIcon
          name="forbidden"
          className="cursor-pointer"
          onClick={() => handleColorClick("#fffff")}
        />
      )}
    </div>
  );
};

export default ColorSelector;

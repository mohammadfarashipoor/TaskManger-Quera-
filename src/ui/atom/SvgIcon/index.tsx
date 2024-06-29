import { ReactSVG } from "react-svg";
interface SvgIconProps {
  name: string;
  className?: string;
  height?: string;
  width?: string;
  borderClassName?: string;
  isBorder?: boolean;
  onClick?: (input: any) => any;
}
const SvgIcon = (props: SvgIconProps) => {
  const {
    name,
    height = "20",
    width = "20",
    borderClassName = "",
    isBorder = false,
  } = props;
  return isBorder ? (
    <div
      className={`border-dotted border-2 rounded-full p-2 ${borderClassName}`}
    >
      <ReactSVG
        style={{ width: `${width}px`, height: `${height}px` }}
        src={`/icons/${name}.svg`}
        {...props}
      />
    </div>
  ) : (
    <ReactSVG
      style={{ width: `${width}px`, height: `${height}px` }}
      src={`/icons/${name}.svg`}
      {...props}
    />
  );
};

export default SvgIcon;

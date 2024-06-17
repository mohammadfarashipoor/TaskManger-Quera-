import { ReactSVG } from "react-svg";
interface SvgIconProps {
  name: string;
  height?: string;
  width?: string;
}
const SvgIcon = (props: SvgIconProps) => {
  const { name, height = "20", width = "20" } = props;
  return (
    <ReactSVG
      style={{ width: `${width}px`, height: `${height}px` }}
      src={`/icons/${name}.svg`}
      {...props}
    />
  );
};

export default SvgIcon;

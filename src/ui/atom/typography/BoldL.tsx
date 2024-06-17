import { colorClassMap, type TypoColor } from "./TypoColors";

interface Props {
	children: string;
	color: TypoColor;
}

const BoldL: React.FC<Props> = ({ children, color }) => {
	const colorClass = colorClassMap[color];

	return (
		<b className={`font-yekan-bold ${colorClass}`} style={{ fontSize: "20px" }}>
			{children}
		</b>
	);
};

export default BoldL;

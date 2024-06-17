import { colorClassMap, type TypoColor } from "./TypoColors";

interface Props {
	children: string;
	color: TypoColor;
}

const BoldS: React.FC<Props> = ({ children, color }) => {
	const colorClass = colorClassMap[color];

	return (
		<b className={`font-yekan-bold ${colorClass}`} style={{ fontSize: "14px" }}>
			{children}
		</b>
	);
};

export default BoldS;

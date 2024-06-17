import { colorClassMap, type TypoColor } from "./TypoColors";

interface Props {
	children: string;
	color: TypoColor;
}

const BoldM: React.FC<Props> = ({ children, color }) => {
	const colorClass = colorClassMap[color];

	return (
		<b className={`font-yekan-bold ${colorClass}`} style={{ fontSize: "16px" }}>
			{children}
		</b>
	);
};

export default BoldM;

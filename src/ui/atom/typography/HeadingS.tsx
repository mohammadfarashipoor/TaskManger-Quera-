import { colorClassMap, type TypoColor } from "./TypoColors";

interface Props {
	children: string;
	color: TypoColor;
}

const HeadingS: React.FC<Props> = ({ children, color }) => {
	const colorClass = colorClassMap[color];

	return (
		<h3
			className={`font-yekan-bold ${colorClass}`}
			style={{ fontSize: "24px" }}
		>
			{children}
		</h3>
	);
};

export default HeadingS;

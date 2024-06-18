import { colorClassMap, type TypoColor } from "./TypoColors";

interface Props {
	children: string;
	color: TypoColor;
}

const HeadingXS: React.FC<Props> = ({ children, color }) => {
	const colorClass = colorClassMap[color];

	return (
		<h4
			className={`font-yekan-bold ${colorClass}`}
			style={{ fontSize: "20px" }}
		>
			{children}
		</h4>
	);
};

export default HeadingXS;

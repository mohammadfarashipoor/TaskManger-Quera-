import { colorClassMap, type TypoColor } from "./TypoColors";

interface Props {
	children: string;
	color: TypoColor;
}

const HeadingM: React.FC<Props> = ({ children, color }) => {
	const colorClass = colorClassMap[color];

	return (
		<h2
			className={`font-yekan-bold ${colorClass}`}
			style={{ fontSize: "28px" }}
		>
			{children}
		</h2>
	);
};

export default HeadingM;

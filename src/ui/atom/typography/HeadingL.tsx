import { colorClassMap, type TypoColor } from "./TypoColors";

interface Props {
	children: string;
	color: TypoColor;
}

const HeadingL: React.FC<Props> = ({ children, color }) => {
	const colorClass = colorClassMap[color];

	return (
		<h1
			className={`font-yekan-bold ${colorClass}`}
			style={{ fontSize: "32px" }}
		>
			{children}
		</h1>
	);
};

export default HeadingL;

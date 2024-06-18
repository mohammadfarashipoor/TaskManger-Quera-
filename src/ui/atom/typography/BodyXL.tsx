import { colorClassMap, type TypoColor } from "./TypoColors";

interface Props {
	children: string;
	color: TypoColor;
}

const BodyXL: React.FC<Props> = ({ children, color }) => {
	const colorClass = colorClassMap[color];

	return (
		<p
			className={`font-yekan-normal ${colorClass}`}
			style={{ fontSize: "24px" }}
		>
			{children}
		</p>
	);
};

export default BodyXL;

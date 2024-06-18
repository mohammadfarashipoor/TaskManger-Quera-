import { colorClassMap, type TypoColor } from "./TypoColors";

interface Props {
	children: string;
	color: TypoColor;
}

const BodyM: React.FC<Props> = ({ children, color }) => {
	const colorClass = colorClassMap[color];

	return (
		<p
			className={`font-yekan-normal ${colorClass}`}
			style={{ fontSize: "16px" }}
		>
			{children}
		</p>
	);
};

export default BodyM;

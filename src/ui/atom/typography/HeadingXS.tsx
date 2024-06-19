import type React from "react";

const colorClassMap = {
	white: "text-white",
	gray: "text-[#818181]",
	black: "text-[#1E1E1E]",
	brandPrimary: "text-brand-primary",
	gradient:
		"inline-block text-transparent bg-clip-text bg-gradient-to-r from-hgradient-primary to-hgradient-secondary",
};

type TypoColor = "white" | "gray" | "black" | "brandPrimary" | "gradient";

interface TextProps {
	children: string;
	color: TypoColor;
	variant: "body" | "bold" | "heading";
	size: "XS" | "S" | "M" | "L" | "XL";
}

type SizeMap = {
	[key in "XS" | "S" | "M" | "L" | "XL"]?: string;
};

const sizeMap: { [key in TextProps["variant"]]: SizeMap } = {
	body: {
		XS: "12px",
		S: "14px",
		M: "16px",
		L: "20px",
		XL: "24px",
	},
	bold: {
		XS: "12px",
		S: "14px",
		M: "16px",
		L: "20px",
		XL: "24px",
	},
	heading: {
		XS: "20px",
		S: "24px",
		M: "28px",
		L: "32px",
	},
};

type ElementMap = {
	body: "p";
	bold: "b";
	heading: {
		XS: "h4";
		S: "h3";
		M: "h2";
		L: "h1";
	};
};

const elementMap: ElementMap = {
	body: "p",
	bold: "b",
	heading: {
		XS: "h4",
		S: "h3",
		M: "h2",
		L: "h1",
	},
};

const Text: React.FC<TextProps> = ({ children, color, variant, size }) => {
	const colorClass = colorClassMap[color];
	const fontSize = sizeMap[variant][size];
	const Element =
		variant === "heading"
			? elementMap.heading[size as keyof ElementMap["heading"]]
			: elementMap[variant];

	return (
		<Element
			className={`font-yekan-${variant === "bold" ? "bold" : "normal"} ${colorClass}`}
			style={{ fontSize }}
		>
			{children}
		</Element>
	);
};

export default Text;

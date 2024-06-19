import React from "react";

const colorClassMap = {
	white: "text-white",
	gray: "text-[#818181]",
	black: "text-[#1E1E1E]",
	brandPrimary: "text-brand-primary",
	gradient:
		"inline-block text-transparent bg-clip-text bg-gradient-to-r from-hgradient-primary to-hgradient-secondary",
};

type TextColor = keyof typeof colorClassMap;

const sizeMap = {
	bodyXS: {
		fontSizeClass: "text-[12px]",
		element: "p",
		fontClass: "font-yekan-normal",
	},
	bodyS: {
		fontSizeClass: "text-[14px]",
		element: "p",
		fontClass: "font-yekan-normal",
	},
	bodyM: {
		fontSizeClass: "text-[16px]",
		element: "p",
		fontClass: "font-yekan-normal",
	},
	bodyL: {
		fontSizeClass: "text-[20px]",
		element: "p",
		fontClass: "font-yekan-normal",
	},
	bodyXL: {
		fontSizeClass: "text-[24px]",
		element: "p",
		fontClass: "font-yekan-normal",
	},
	boldXS: {
		fontSizeClass: "text-[12px]",
		element: "strong",
		fontClass: "font-yekan-bold",
	},
	boldS: {
		fontSizeClass: "text-[14px]",
		element: "strong",
		fontClass: "font-yekan-bold",
	},
	boldM: {
		fontSizeClass: "text-[16px]",
		element: "strong",
		fontClass: "font-yekan-bold",
	},
	boldL: {
		fontSizeClass: "text-[20px]",
		element: "strong",
		fontClass: "font-yekan-bold",
	},
	boldXL: {
		fontSizeClass: "text-[24px]",
		element: "strong",
		fontClass: "font-yekan-bold",
	},
	headingXS: {
		fontSizeClass: "text-[20px]",
		element: "h4",
		fontClass: "font-yekan-bold",
	},
	headingS: {
		fontSizeClass: "text-[24px]",
		element: "h3",
		fontClass: "font-yekan-bold",
	},
	headingM: {
		fontSizeClass: "text-[28px]",
		element: "h2",
		fontClass: "font-yekan-bold",
	},
	headingL: {
		fontSizeClass: "text-[32px]",
		element: "h1",
		fontClass: "font-yekan-bold",
	},
};

type TextSize = keyof typeof sizeMap;

interface TextProps {
	children: string;
	textColor: TextColor;
	textSize: TextSize;
}

const Text: React.FC<TextProps> = ({ children, textColor, textSize }) => {
	const colorClass = colorClassMap[textColor];
	const { fontSizeClass, element, fontClass } = sizeMap[textSize];

	const Element = element as keyof JSX.IntrinsicElements;

	return React.createElement(
		Element,
		{ className: `${fontClass} ${colorClass} ${fontSizeClass}` },
		children,
	);
};

export default Text;

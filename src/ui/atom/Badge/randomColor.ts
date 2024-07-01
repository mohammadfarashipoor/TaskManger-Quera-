interface ColorPalette {
  [color: string]: {
    bg: string;
    text: string;
  };
}
export const randomColor = () => {
  let colorPalette: ColorPalette = {
    gray: { bg: "bg-gray-secondary", text: "text-gray-primary" },
    red: { bg: "bg-red-secondary", text: "text-red-primary" },
    pink: { bg: "bg-pink-secondary", text: "text-pink-primary" },
    grape: { bg: "bg-grape-secondary", text: "text-grape-primary" },
    violet: { bg: "bg-violet-secondary", text: "text-violet-primary" },
    indigo: { bg: "bg-indigo-secondary", text: "text-indigo-primary" },
    blue: { bg: "bg-blue-secondary", text: "text-blue-primary" },
    cyan: { bg: "bg-cyan-secondary", text: "text-cyan-primary" },
    teal: { bg: "bg-teal-secondary", text: "text-teal-primary" },
    lime: { bg: "bg-lime-secondary", text: "text-lime-primary" },
    yellow: { bg: "bg-yellow-secondary", text: "text-yellow-primary" },
    orange: { bg: "bg-orange-secondary", text: "text-orange-primary" },
    hgradient: { bg: "bg-hgradient-secondary", text: "text-hgradient-primary" },
  };
  const randomColor = (obj: ColorPalette) => {
    var keys = Object.keys(obj);
    return obj[keys[(keys.length * Math.random()) << 0]];
  };
  return randomColor(colorPalette);
};

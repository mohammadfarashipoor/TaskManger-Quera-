import { randomColor } from "@/ui/atom/Badge/randomColor";

interface BadgeProps {
  textLabel: string;
  className?: string;
}

function Badge(props: BadgeProps) {
  const { textLabel, className = "" } = props;
  const color = randomColor();
  return (
    <span
      className={`text-[12px] font-extrabold py-0.5 px-2 rounded-xl ${color.bg} ${color.text} ${className}`}
    >
      {textLabel}
    </span>
  );
}

export default Badge;

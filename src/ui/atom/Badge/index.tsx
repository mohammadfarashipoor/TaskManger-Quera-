interface BadgeProps {
  textLabel: string;
  color?: string;
  className?: string;
}
function Badge(props: BadgeProps) {
  const { textLabel, color = "blue", className } = props;
  return (
    <span
      className={`text-[12px] font-extrabold py-0.5 px-2 rounded-xl bg-${color}-secondary text-${color}-primary ${className}`}
    >
      {textLabel}
    </span>
  );
}

export default Badge;

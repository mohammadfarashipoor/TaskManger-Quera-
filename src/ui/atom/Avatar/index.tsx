import Text from "../typography/Text";

interface AvatarProps {
  avatarImage?: string;
  name?: string;
  className?: string;
  backgroundColor?: string;
  textColor?: string;
  size?: "small" | "normal" | "big";
}
interface AvatarConfig {
  [size: string]: {
    size: string;
    textSize: "boldXL" | "boldXS";
  };
}
function Avatar(props: AvatarProps) {
  const {
    avatarImage,
    name = "",
    size = "normal",
    className = "",
    backgroundColor = "bg-yellow-100",
    textColor = "text-yellow-600",
  } = props;
  const avatarConfig: AvatarConfig = {
    big: { size: "w-[100px] h-[100px]", textSize: "boldXL" },
    normal: { size: "w-[45px] h-[45px]", textSize: "boldXS" },
    small: { size: "w-[30px] h-[30px]", textSize: "boldXS" },
  };
  return avatarImage ? (
    <img
      src={avatarImage}
      alt="add-member"
      className={`${avatarConfig[size].size} fill-white rounded-[50%] p-[5px] ${className}`}
    />
  ) : (
    <Text
      textSize={avatarConfig[size].textSize}
      className={`flex items-center justify-center ${
        avatarConfig[size].size
      } rounded-[50%] p-[5px] ${
        backgroundColor + " " + textColor
      } ${className}`}
    >
      {name.slice(0, 2)}
    </Text>
  );
}

export default Avatar;

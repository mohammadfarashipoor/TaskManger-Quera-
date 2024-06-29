import Text from "../typography/Text";

interface AvatarProps {
  avatarImage?: string;
  name?: string;
  className?: string;
  backgroundColor?: string;
  textColor?: string;
  size?: "normal" | "big";
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
  return avatarImage ? (
    <img
      src={avatarImage}
      alt="add-member"
      className={` ${
        size === "big" ? "w-[100px] h-[100px]" : "w-[45px] h-[45px]"
      } fill-white rounded-[50%] p-[5px] ${className}`}
    />
  ) : (
    <Text
      textSize={size === "big" ? "boldXL" : "boldXS"}
      className={`flex items-center justify-center ${
        size === "big" ? "w-[100px] h-[100px]" : "w-[45px] h-[45px]"
      } rounded-[50%] p-[5px] ${
        backgroundColor + " " + textColor
      } ${className}`}
    >
      {name.slice(0, 2)}
    </Text>
  );
}

export default Avatar;

interface AvatarProps {
  avatarImage?: string;
  name?: string;
  backgroundColor?: string;
}
function Avatar(props: AvatarProps) {
  const { avatarImage, name = "", backgroundColor = "black" } = props;
  return avatarImage ? (
    <img
      src={avatarImage}
      alt="add-member"
      className="w-[45px] h-[45px] fill-white rounded-[50%] p-[5px]"
    />
  ) : (
    <span
      className={`flex items-center justify-center w-[45px] h-[45px] rounded-[50%] p-[5px] bg-${backgroundColor}`}
    >
      {name.slice(0, 2)}
    </span>
  );
}

export default Avatar;

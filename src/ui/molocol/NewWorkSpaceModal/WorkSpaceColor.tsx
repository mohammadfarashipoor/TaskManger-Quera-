import Text from "@/ui/atom/typography/Text";
import ColorSelector from "../ColorSelector";

function WorkSpaceColor() {
  return (
    <div className="flex gap-4">
      <span className="flex justify-center items-center w-[70px] h-[70px] bg-gray-primary rounded-md text-white">
        و ک
      </span>
      <div>
        <Text textSize="bodyL">رنگ ورک اسپیس</Text>
        <ColorSelector theme classNames="flex-wrap" />
      </div>
    </div>
  );
}

export default WorkSpaceColor;

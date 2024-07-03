import Avatar from "@/ui/atom/Avatar";
import ColorBox from "@/ui/atom/ColorBox";
import Text from "@/ui/atom/typography/Text";

function WorkSpaceInfo() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex justify-between items-center">
        <Text textSize="boldXS">نام ورک اسپیس</Text>
        <Text textSize="boldXS">تیم طراحی</Text>
      </div>
      <div className="flex justify-between items-center">
        <Text textSize="boldXS">رنگ ورک اسپیس</Text>
        <ColorBox color="#228BE6" />
      </div>
      <div className="flex justify-between items-center">
        <Text textSize="boldXS">اعضا</Text>
        <Avatar />
      </div>
    </div>
  );
}

export default WorkSpaceInfo;

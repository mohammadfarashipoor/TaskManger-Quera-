import Text from "@/ui/atom/typography/Text";
import { ColorInformation } from "../Box";
import ColorSelector from "../ColorSelector";
import { Button } from "@/ui/atom/Button";
import Avatar from "@/ui/atom/Avatar";
import ColorBox from "@/ui/atom/ColorBox";

export default function ReviewInfo() {
  function close() {
    console.log("first");
  }
  return (
    <ColorInformation
      toggle={close}
      isOpen={true}
      title={"مرور اطلاعات"}
      height={"auto"}
    >
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
      <Button className="flex-none mt-3">ساختن ورک اسپیس</Button>
    </ColorInformation>
  );
}

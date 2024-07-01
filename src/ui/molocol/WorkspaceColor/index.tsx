import Text from "@/ui/atom/typography/Text";
import { ColorInformation } from "../Box";
import ColorSelector from "../ColorSelector";
import { Button } from "@/ui/atom/Button";

export default function WorkspaceColor() {
  function close() {
    console.log("first");
  }
  return (
    <ColorInformation
      toggle={close}
      isOpen={true}
      title={"انتخاب رنگ ورک اسپیس"}
      height={"auto"}
    >
      <div className="flex gap-4">
        <span className="flex justify-center items-center w-[70px] h-[70px] bg-gray-primary rounded-md text-white">
          و ک
        </span>
        <div>
          <Text textSize="bodyL">رنگ ورک اسپیس</Text>
          <ColorSelector theme classNames="flex-wrap" />
        </div>
      </div>
      <Button className="flex-none mt-3">ادامه</Button>
    </ColorInformation>
  );
}

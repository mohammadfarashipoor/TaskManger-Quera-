import { OtherBox } from "@/ui/molocol/Box";
import Text from "../typography/Text";

export const Permission = () => {
  return (
    <>
      <OtherBox
        className=" w-[252px] p-4 "
        boxShadow="0px 4px 8px 0px #00000033"
      >
        <div className="flex flex-col justify-center gap-s">
          <div className="  flex flex-col items-start gap-xs">
            <Text textSize="boldXS">دسترسی کامل</Text>
            <Text textSize="bodyXS" className="text-start">
              توانایی ساختن تسک در این پروژه، ویرایش تنظیمات پروژه و حذف پروژه
            </Text>
          </div>
          <div className="border-b border-[#F4F4F4]"></div>
          <div className=" flex flex-col items-start gap-xs">
            <Text textSize="boldXS">دسترسی ویرایش</Text>
            <Text textSize="bodyXS" className="text-start">
              توانایی ویرایش تسک در این پروژه و ویرایش تنظیمات پروژه. نمی‌تواند
              پروژه را حذف یا تسک جدید بسازد.
            </Text>
          </div>
          <div className="border-b border-[#F4F4F4]"></div>

          <div className=" flex flex-col items-start gap-xs">
            <Text textSize="boldXS">دسترسی کامنت</Text>
            <Text textSize="bodyXS" className="text-start">
              توانایی کامنت گذاشتن دارد. می‌تواند ستون تسک‌ها را تغییر دهد اما
              توانایی ویرایش تنظیمات پروژه را ندارد.
            </Text>
          </div>

          <div className="border-b border-[#F4F4F4]"></div>

          <div className="flex flex-col items-start gap-xs">
            <Text textSize="boldXS">فقط دسترسی مشاهده</Text>
            <Text textSize="bodyXS" className="text-start">
              توانایی گذاشتن کامنت یا ویرایش تسک‌ها را ندارد.
            </Text>
          </div>
        </div>
      </OtherBox>
    </>
  );
};
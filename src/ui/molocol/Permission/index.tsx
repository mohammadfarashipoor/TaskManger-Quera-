import { OtherBox } from "@/ui/molocol/Box";
import Text from "../../atom/typography/Text";
import { useState } from "react";
import SvgIcon from "@/ui/atom/SvgIcon";

export const Permission = () => {
  const [value,setValue]=useState("")
  const [titles, setTitles] = useState([
    "دسترسی کامل",
    "دسترسی ویرایش",
    "دسترسی کامنت",
    "فقط دسترسی مشاهده",
  ]);
  const [description, setDescription] = useState([
    "توانایی ساختن تسک در این پروژه، ویرایش تنظیمات پروژه و حذف پروژه",
    "توانایی ویرایش تسک در این پروژه و ویرایش تنظیمات پروژه. نمی‌تواند پروژه را حذف یا تسک جدید بسازد.",
    "توانایی کامنت گذاشتن دارد. می‌تواند ستون تسک‌ها را تغییر دهد اما توانایی ویرایش تنظیمات پروژه را ندارد.",
    "توانایی گذاشتن کامنت یا ویرایش تسک‌ها را ندارد.",
  ]);
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div
        onClick={() => setToggle(!toggle)}
        className="border rounded-md px-[12px] py-[3px] flex justify-center items-center"
      >
        <Text textSize="boldXS">{value}</Text>
        <SvgIcon name="arrow-bottom" />
      </div>

      {toggle && (
        <OtherBox
          className=" w-[252px] p-4  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          boxShadow="0px 4px 8px 0px #00000033"
        >
          <div>
            {titles.map((title, index) => {
              return (
                <div key={title} onClick={() => setToggle(!toggle)}>
                  <div
                    onClick={() => setValue(title)}
                    className="flex flex-col justify-center gap-xs "
                  >
                    <Text textSize="boldXS" className="text-start">
                      {title}
                    </Text>
                    <Text textSize="bodyXS" className="text-start">
                      {description[index]}
                    </Text>
                    {index !== titles.length - 1 && (
                      <div className=" border-b border-[#F4F4F4] mb-2"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </OtherBox>
      )}
    </>
  );
};







              
            

      // <div
      //   onClick={() => setToggle(!toggle)}
      //   className="border rounded-md px-[12px] py-[3px] flex justify-center items-center"
      // >
      //   <Text textSize="boldXS">{value}</Text>
      //   <SvgIcon name="arrow-bottom" />
      // </div>
      // {
      // }



      /* {toggle && (
          <div className="flex flex-col justify-center gap-s">
            <button className="flex flex-col items-start gap-xs">
              <Text textSize="boldXS">دسترسی کامل</Text>
              <Text textSize="bodyXS" className="text-start">
                توانایی ساختن تسک در این پروژه، ویرایش تنظیمات پروژه و حذف پروژه
              </Text>
            </button>
            <div className="border-b border-[#F4F4F4]"></div>
            <div className=" flex flex-col items-start gap-xs">
              <Text textSize="boldXS">دسترسی ویرایش</Text>
              <Text textSize="bodyXS" className="text-start">
                توانایی ویرایش تسک در این پروژه و ویرایش تنظیمات پروژه.
                نمی‌تواند پروژه را حذف یا تسک جدید بسازد.
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
      )} */

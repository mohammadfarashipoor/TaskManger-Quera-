import { OtherBox } from "@/ui/molocol/Box";
import Text from "../../atom/typography/Text";
import { useState } from "react";
import SvgIcon from "@/ui/atom/SvgIcon";


export const Projects =()=>{
      const [value,setValue]=useState("")
  const [titles, setTitles] = useState(["همه پروژه‌ها","پروژه اول"]);
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
          className="  p-4  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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







              
            


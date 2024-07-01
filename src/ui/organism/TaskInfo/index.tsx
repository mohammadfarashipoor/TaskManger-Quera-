import { Button } from "@/ui/atom/Button";
import SvgIcon from "@/ui/atom/SvgIcon";
import Avatar from "@/ui/atom/Avatar";
import InputText from "@/ui/atom/InputText";
import Text from "@/ui/atom/typography/Text";
import FormContainer from "@/ui/molocol/FormContainer";
import CommentMassage from "@/ui/atom/CommentMassage";
import { useState } from "react";

const TaskInfo = () => {
  const [isReplay, setIsReplay] = useState(false);
  return (
    <div className="flex justify-center w-[1352px] h-[596px] bg-white p-[20px] rounded-3xl shadow-2xl relative">
      <SvgIcon
        className="absolute top-[36px] right-[1292px] cursor-pointer z-10"
        name="close"
        width="40"
        height="40"
      />
      <div className="w-1/2">
        <div className="flex items-center gap-[40px] pb-[28px]">
          <Button className="w-[200px]" isRedButton>
            Open
          </Button>
          <Avatar className="z-10" />
          <SvgIcon
            name="new-user"
            isBorder
            borderClassName="text-gray-400 border-gray-400 -mr-[50px]"
          />
          <SvgIcon
            name="flag"
            isBorder
            borderClassName="text-red-400 border-red-400"
          />
        </div>

        <div className="flex mt-[34px]">
          <SvgIcon name="label" isBorder borderClassName="text-gray-400" />
        </div>
        <Text textSize="headingS" className="mt-[15px]">
          عنوان تسک
        </Text>
        <Text textSize="bodyM" className="p-[12px] rounded-xl mt-[15px]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </Text>
        <div className="flex">
          <Button iconName={"add"} isOnlyBorderButton className="mt-[18px]">
            اضافه کردن پیوست
          </Button>
        </div>
      </div>
      {/* changed */}
      <div className="w-1/2 border-r-2 h-full border-gray-secondary relative">
        <div className="border-b-2 flex items-center gap-[20px] pb-[10px] pr-[10px] border-gray-secondary">
          <div className=" flex gap-2 ">
            <SvgIcon name="share" className="text-gray-light" />
            <span className=" mb-[10px]">اشتراک گذاری</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-light mb-[10px]">ساخته شده در</span>
            <span>1 اردیبهشت 1402</span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-light mb-[10px]">ددلاین</span>
            <span>پس فردا</span>
          </div>
        </div>
        {isReplay && (
          <div className="overflow-y-scroll h-[390px] scroll-smooth ">
            <CommentMassage />
            <CommentMassage />
          </div>
        )}

        <FormContainer className="flex gap-xs w-full items-center justify-between absolute bottom-[30px]">
          <div className="flex-auto" onClick={() => setIsReplay(!isReplay)}>
            {isReplay ? (
              <InputText
                placeholder="کامنت"
                name="mycomment"
                inlineElement={
                  <Button iconName={"coment"} isOnlyBorderButton isLeftRounded>
                    {" "}
                  </Button>
                }
              />
            ) : (
              <>
                <textarea
                  id={"mycomment"}
                  placeholder="کامنت"
                  className={`w-full rounded-[12px] border border-gray-400 p-xs h-40`}
                  defaultValue={""}
                ></textarea>
                <div className="flex justify-between items-center -mt-[65px] p-3">
                  <div className="flex gap-3 text-gray-primary">
                    <SvgIcon name="atsign" width="30" height="30" />
                    <SvgIcon name="link" width="30" height="30" />
                    <SvgIcon name="draft" width="22" height="22" />
                    <SvgIcon name="emoji" width="30" height="30" />
                  </div>
                  <Button className="w-[200px] float-left">ثبت کامنت</Button>
                </div>
              </>
            )}
          </div>
        </FormContainer>
      </div>
    </div>
  );
};

export default TaskInfo;

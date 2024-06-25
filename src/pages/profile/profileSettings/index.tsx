import { Button } from "@/ui/atom/Button";
import ColorBox from "@/ui/atom/ColorBox";
import SvgIcon from "@/ui/atom/SvgIcon";
import Text from "@/ui/atom/typography/Text";
import ColorSelector from "@/ui/molocol/ColorSelector";
import FormContainer from "@/ui/molocol/FormContainer";

function ProfileSettingsPage() {
  return (
    <div className="flex flex-col gap-l items-start p-7">
      <Text textSize="headingL">تنظیمات</Text>
      <FormContainer className="flex flex-col gap-3" onSubmit={onsubmit}>
        <Text textSize="bodyL">انتخاب تم</Text>
        <ColorSelector />
        <SvgIcon
          name="sun"
          className="my-5 cursor-pointer text-brand-primary"
          width="30"
          height="30"
        />
        <Button type="submit" isprimary>
          ثبت تغییرات
        </Button>
      </FormContainer>
    </div>
  );
}

export default ProfileSettingsPage;

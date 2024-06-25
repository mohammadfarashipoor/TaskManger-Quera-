import { Button } from "@/ui/atom/Button";
import Avatar from "@/ui/atom/Avatar";
import InputText from "@/ui/atom/InputText";
import Text from "@/ui/atom/typography/Text";
import FormContainer from "@/ui/molocol/FormContainer";
import InputFile from "@/ui/atom/InputFile";
import { schemaPersonalInfo } from "@/validation/validationSchema";

function PersonalInfoPage() {
  return (
    <div className="flex flex-col gap-l items-start p-7">
      <Text textSize="headingL">اطلاعات فردی</Text>
      <FormContainer
        schema={schemaPersonalInfo}
        className="flex flex-col gap-3"
        onSubmit={onsubmit}
      >
        <div className="flex items-center justify-center gap-4">
          <Avatar name="Mohammad" size="big" />
          <div className="flex flex-col gap-2">
            <InputFile labelText="ویرایش تصویر پروفایل" iconName="link" />
            <Text textSize="bodyXS">این تصویر برای عموم قابل مشاهده است</Text>
          </div>
        </div>
        <InputText name="firstName" label="نام" />
        <InputText name="lastName" label="نام خانوادگی" />
        <InputText name="phone" label="شماره تلفن" />
        <Button type="submit" isprimary>
          ثبت تغییرات
        </Button>
      </FormContainer>
    </div>
  );
}

export default PersonalInfoPage;

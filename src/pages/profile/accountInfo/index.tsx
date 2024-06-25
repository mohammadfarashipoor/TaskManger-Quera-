import { Button } from "@/ui/atom/Button";
import InputText from "@/ui/atom/InputText";
import Text from "@/ui/atom/typography/Text";
import FormContainer from "@/ui/molocol/FormContainer";
import { schemaAccountInfo } from "@/validation/validationSchema";

interface AccountData {
  email: string;
  username: string;
  password: string;
}

function AccountInfoPage() {
  const onSubmit = (data: AccountData) => {
    console.log("data", data);
  };

  return (
    <div>
      <Text textSize="headingL">اطلاعات حساب</Text>
      <FormContainer className="flex flex-col items-start p-7 gap-l" onSubmit={onSubmit} schema={schemaAccountInfo}>
        <InputText name="email" label="ایمیل" classNames="mb-4" />
        <InputText name="username" label="نام کاربری" classNames="mb-4" />
        <InputText
          type="password"
          name="password"
          label="رمز عبور فعلی"
          classNames="mb-2"
        />
        <InputText
          type="password"
          name="password"
          label="رمز عبور جدید"
          classNames="mb-2"
        />
        <InputText
          type="password"
          name="password"
          label="تکرار رمز عبور جدید"
          classNames="mb-2"
        />
        <Button className="mt-6" type="submit" isBold isprimary>
          ثبت تغییرات
        </Button>
      </FormContainer>
    </div>
  );
}

export default AccountInfoPage;

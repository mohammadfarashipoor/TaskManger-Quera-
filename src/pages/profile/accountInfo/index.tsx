import { Button } from "@/ui/atom/Button";
import InputText from "@/ui/atom/InputText";
import FormContainer from "@/ui/molocol/FormContainer";

interface AccountData{
  email:string;
  username:string;
  password:string;

}

function AccountInfoPage() {

  const onSubmit = (data:AccountData) => {
    console.log("data" , data);
  };

  return(
    <div>
    <FormContainer onSubmit={onSubmit} schema>
        <h2>
         اطلاعات حساب
        </h2>
          <InputText name="email" label="ایمیل" classNames="mb-4" />
          <InputText name="username" label="نام کاربری" classNames="mb-4" />
          <InputText type="password" name="password" label="رمز عبور فعلی" classNames="mb-2" />
          <InputText type="password" name="password" label="رمز عبور جدید" classNames="mb-2" />
          <InputText type="password" name="password" label="تکرار رمز عبور جدید" classNames="mb-2" />
          <Button className="mt-6" type="submit" isBold isprimary>ثبت تغییرات</Button>
      </FormContainer>
  </div>
  );
}

export default AccountInfoPage;

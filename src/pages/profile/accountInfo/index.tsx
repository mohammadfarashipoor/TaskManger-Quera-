import { changePassword } from "@/containers/account/action";
import { useAppDispatch } from "@/lib/hook";
import { Button } from "@/ui/atom/Button";
import InputText from "@/ui/atom/InputText";
import Text from "@/ui/atom/typography/Text";
import FormContainer from "@/ui/molocol/FormContainer";
import { schemaAccountInfo } from "@/validation/validationSchema";
import { useSelector } from "react-redux";

interface AccountData {
  username: string;
  oldPassword: string;
  newPassword:string;
  newPassword1:string;
}

function AccountInfoPage() {
  const dispatch =useAppDispatch()
  const onSubmit = (data: AccountData) => {
    const { oldPassword, newPassword, newPassword1 }=data;
    dispatch(changePassword({oldPassword, newPassword, newPassword1}));
    
  };
  const{data}=useSelector((state:any)=>state.account)
  console.log(data)

  return (
    <div>
      <Text textSize="headingL">اطلاعات حساب</Text>
      <FormContainer className="flex flex-col items-start p-7 gap-l" onSubmit={onSubmit} schema={schemaAccountInfo}>
        <InputText name="email" label="ایمیل" classNames="mb-4" />
        <InputText name="username" label="نام کاربری" classNames="mb-4" />
        <InputText
          type="password"
          name="oldPassword"
          label="رمز عبور فعلی"
          classNames="mb-2"
        />
        <InputText
          type="password"
          name="newPassword"
          label="رمز عبور جدید"
          classNames="mb-2"
        />
        <InputText
          type="password"
          name="newPassword1"
          label="تکرار رمز عبور جدید"
          classNames="mb-2"
        />
        <Button className="mt-6" type="submit" isBold >
          ثبت تغییرات
        </Button>
      </FormContainer>
    </div>
  );
}

export default AccountInfoPage;

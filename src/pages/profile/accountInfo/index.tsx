import { changePassword} from "@/containers/account/action";
import { useAppDispatch } from "@/lib/hook";
import { Button } from "@/ui/atom/Button";
import InputText from "@/ui/atom/InputText";
import Text from "@/ui/atom/typography/Text";
import FormContainer from "@/ui/molocol/FormContainer";
import { schemaAccountInfo } from "@/validation/validationSchema";
import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

interface AccountData {
  email: string;
  username: string;
  oldPassword: string;
  newPassword: string;
  newPassword1: string;
}

function AccountInfoPage() {
  // const accountId  = 112


  const dispatch =useAppDispatch()
  const onSubmit = (data: AccountData) => {
    dispatch(changePassword(data));
    // dispatch(accountUpdate({ accountId,body }));

  };
  
  const data = useSelector((state: any) => state.account);


  return (
    <div>
      <Text textSize="headingL">اطلاعات حساب</Text>
      <FormContainer
        className="flex flex-col items-start p-7 gap-l"
        onSubmit={onSubmit}
        schema={schemaAccountInfo}
      >
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
        <div>{data.message[Object.keys(data.message)[0]][0]}</div>

        <Button className="mt-6" type="submit" isBold>
          ثبت تغییرات
        </Button>
      </FormContainer>
    </div>
  );
}

export default AccountInfoPage;
